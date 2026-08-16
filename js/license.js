/* NC pesticide license lookup. Queries the North Carolina Department of
   Agriculture public license search — the same public data behind
   apps.ncagr.gov/AgRSysPortalV2/licensesearch — and caches the result so the
   card shows instantly and only touches the network when the user asks it to.

   More than one license can be kept, because more than one is the normal
   case: an aerial applicator holds a pilot license and a commercial ground
   one, and the business they fly for holds a contractor license on top. Each
   is saved under its own (number, type) pair and refreshed on its own.

   This is the one place the app talks to a server. The cache lives under its
   own localStorage key and is never folded into the study state that Export
   writes, so a progress backup stays a progress backup. */
const License = (() => {
  const API = 'https://apps.ncagr.gov/AgRSysAPI/api';
  // The portal ships this fixed anonymous credential in its own public
  // JavaScript bundle; the public search is unauthenticated in every way but
  // needing a bearer token minted from it. If NCAGR ever rotates it the token
  // request just fails, the lookup reports it, and any cached card stays put.
  const PORTAL_USER = 'AgrSysPortal';
  const PORTAL_PASS = 'V]Na`Ck[!XFP(ts-nnE-V]a+Hd->j[99%QR#Ls>!u)UbsTVgU#9!!!NPF4Cj?9!L.';
  // With no credential to mint a token from there is nothing the lookup can
  // do, so the whole feature (its nav tab and its view) is hidden rather than
  // shown broken. Blank either constant above to turn it off.
  const enabled = Boolean(PORTAL_USER.trim() && PORTAL_PASS.trim());
  const TOKEN_KEY = 'ncagr-token';       // {token, exp} — cached bearer token
  const CACHE_KEY = 'ncagr-licenses';    // {v, list:[{input, record, fetchedAt}]}
  const LEGACY_KEY = 'ncagr-license';    // the single {input, record, fetchedAt} this replaced
  const TIMEOUT = 15000;
  // Enough for a pilot's own licenses plus the contractor they fly under and
  // a spouse or two, and low enough that the cache stays a cache. Adding past
  // it drops the least recently refreshed.
  const MAX_SAVED = 8;

  // Pesticide license types, from the portal's own ownerlicensetypes list
  // (the two pesticide owners, FDPE and FDPR). The owner scopes the search, so
  // it travels with each type rather than being a second thing to pick.
  //
  // `kind` is which set of recertification rules the license renews under
  // (see data/recert-credits.js). The letter buckets on a record cannot say:
  // an aerial applicator and a ground one both hold work categories, and only
  // the license type tells them apart.
  const TYPES = [
    { id: '026', owner: 'FDPE', kind: 'commercial', label: 'Commercial Pesticide Applicator (026)' },
    { id: '038', owner: 'FDPR', kind: 'private', label: 'Private Pesticide Applicator (038)' },
    { id: '027', owner: 'FDPE', kind: 'aerial', label: 'Aerial Pesticide Applicator (Pilot) (027)' },
    { id: '028', owner: 'FDPE', kind: 'aerial', label: 'Aerial Pesticide Applicator (Contractor) (028)' },
    { id: '029', owner: 'FDPE', kind: 'aerial', label: 'Aerial Pesticide Applicator (Apprentice) (029)' },
    { id: '030', owner: 'FDPE', kind: 'commercial', label: 'Pesticide Consultant (030)' },
    { id: '031', owner: 'FDPE', kind: 'commercial', label: 'Public Pesticide Operator (Fed-State)-Ground (031)' },
    { id: '032', owner: 'FDPE', kind: 'commercial', label: 'Public Pesticide Operator (County-Municipal)-Ground (032)' },
    { id: '033', owner: 'FDPE', kind: 'commercial', label: 'Public Pesticide Operator (Public Utility)-Ground (033)' },
    { id: '034', owner: 'FDPE', kind: 'aerial', label: 'Public Aerial Pesticide (Fed-State)-Pilot (034)' },
    { id: '035', owner: 'FDPE', kind: 'aerial', label: 'Public Aerial Pesticide (County-Municipal)-Pilot (035)' },
    { id: '037', owner: 'FDPE', kind: 'commercial', label: 'Pesticide Dealer (037)' },
  ];
  const typeById = id => TYPES.find(t => t.id === id);
  // Commercial is the fallback because it is the rule set every license but
  // the private and aerial ones renews under, so an id the list has not heard
  // of still gets the right answer more often than not.
  const kindOf = id => (typeById(id) || {}).kind || 'commercial';

  const readJSON = key => {
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
  };
  const writeJSON = (key, val) => {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* quota/private mode: non-fatal */ }
  };

  // exp is seconds since epoch in the JWT; a minute of slack keeps a token
  // that is about to lapse from being sent and bouncing as 401.
  function tokenExpiry(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return typeof payload.exp === 'number' ? payload.exp * 1000 : 0;
    } catch { return 0; }
  }

  async function fetchJSON(url, opts) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT);
    try {
      return await fetch(url, { ...opts, signal: ctrl.signal });
    } finally {
      clearTimeout(timer);
    }
  }

  async function mintToken() {
    let res;
    try {
      res = await fetchJSON(`${API}/authorization/getusertoken`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: PORTAL_USER, passphrase: PORTAL_PASS }),
      });
    } catch {
      throw new Error('Could not reach the NC license search. Check your connection and try again.');
    }
    if (!res.ok) throw new Error('The NC license search turned the app away. It may have changed; try again later.');
    const body = await res.json().catch(() => null);
    const token = body && body.Token;
    if (!token) throw new Error('The NC license search sent back nothing usable. Try again later.');
    writeJSON(TOKEN_KEY, { token, exp: tokenExpiry(token) });
    return token;
  }

  function cachedToken() {
    const t = readJSON(TOKEN_KEY);
    return t && t.token && t.exp - Date.now() > 60000 ? t.token : null;
  }

  // GET an API path with a bearer token, minting one first if none is cached
  // and re-minting once if the cached one is rejected (expired server-side, or
  // the signing key rotated). Anything past that is a real failure.
  async function authedGet(path) {
    let token = cachedToken() || await mintToken();
    for (let attempt = 0; attempt < 2; attempt++) {
      let res;
      try {
        res = await fetchJSON(`${API}/${path}`, { headers: { Authorization: `Bearer ${token}` } });
      } catch {
        throw new Error('Could not reach the NC license search. Check your connection and try again.');
      }
      if (res.status === 401 && attempt === 0) {
        try { localStorage.removeItem(TOKEN_KEY); } catch { /* non-fatal */ }
        token = await mintToken();
        continue;
      }
      if (!res.ok) throw new Error('The NC license search returned an error. Try again later.');
      return res.json();
    }
    // Unreachable: the loop either returns a body or throws.
    throw new Error('The NC license search returned an error. Try again later.');
  }

  // Keep only what the card shows, so the cache never holds more of the
  // record (email, phone, mailing address) than the feature needs.
  function normalize(d) {
    return {
      name: d.Name || d.EntityName || '',
      number: d.LicenseNumber,
      licenseType: (d.LicenseType || '').trim(),
      licenseTypeId: d.LicenseTypeId || '',
      owner: d.Owner || '',
      county: d.County || '',
      status: d.Status || '',
      expire: d.Expire || '',
      issueDate: d.IssueDate || '',
      originalIssue: d.OriginalIssue || '',
      recertBy: d.RecertificationDateString || '',
      creditTotals: d.CourseCreditTotals || '',
      courses: (Array.isArray(d.Courses) ? d.Courses : []).map(c => ({
        name: (c.CourseName || '').trim(),
        date: c.CourseDate || '',
        credits: (c.CourseString || '').trim(),
      })),
    };
  }

  // A saved license is identified by what was typed to find it, not by
  // anything the record carries: the same number exists under more than one
  // type, and the record's own fields are what a refresh replaces.
  const keyOf = input => `${input.typeId}:${input.number}`;

  // The saved list, newest refresh first, migrating the single-entry key this
  // replaced on the way. An entry is only kept if it still has the input that
  // would refresh it, since an entry that cannot be refreshed is a card that
  // can only ever go stale.
  function saved() {
    const stored = readJSON(CACHE_KEY);
    const list = stored && Array.isArray(stored.list) ? stored.list : migrate();
    return list.filter(e =>
      e && e.record && e.input && e.input.number && e.input.typeId);
  }

  // The pre-multi-license cache held one entry under its own key. Lift it
  // into the list and drop the old key, so an upgrade keeps the card the user
  // already had rather than presenting them an empty page.
  function migrate() {
    const old = readJSON(LEGACY_KEY);
    if (!old || !old.record || !old.input) return [];
    const list = [old];
    writeJSON(CACHE_KEY, { v: 1, list });
    try { localStorage.removeItem(LEGACY_KEY); } catch { /* non-fatal */ }
    return list;
  }

  // Save an entry, replacing any earlier lookup of the same license so a
  // refresh updates in place rather than stacking a second copy of the same
  // card. Newest first, capped: the list is a convenience, not a record.
  function store(entry) {
    const list = [entry, ...saved().filter(e => keyOf(e.input) !== keyOf(entry.input))]
      .slice(0, MAX_SAVED);
    writeJSON(CACHE_KEY, { v: 1, list });
    return list;
  }

  // Look a license up fresh and cache it. number is the printed license
  // number; typeId is one of TYPES[].id. Throws a user-facing Error on any
  // failure so the view can show its message verbatim.
  async function lookup(number, typeId) {
    const num = String(number || '').trim();
    const type = typeById(typeId);
    if (!num) throw new Error('Enter your license number.');
    if (!type) throw new Error('Pick your license type.');

    const params = new URLSearchParams({
      owner: type.owner,
      licensenumber: num,
      pagenumber: '1',
      exacttext: 'false',
    });
    const results = await authedGet(`publiclicensesearch/searchV2?${params}`);
    const rows = (results && Array.isArray(results.Data)) ? results.Data : [];
    // A number can appear under more than one type for the same person, so
    // pin it to the type the user chose rather than taking the first row.
    const match = rows.find(r => String(r.LicenseTypeId) === typeId)
      || (rows.length === 1 ? rows[0] : null);
    if (!match) {
      throw new Error(`No ${type.label} found for license number ${num}. Check the number and type.`);
    }
    const detail = await authedGet(`publiclicensesearch/publiclicensedetail/${match.LID}`);
    const record = normalize(detail);
    const entry = { input: { number: num, typeId }, record, fetchedAt: Date.now() };
    store(entry);
    return entry;
  }

  // Forget one saved license, returning what is left.
  function remove(key) {
    const list = saved().filter(e => keyOf(e.input) !== key);
    writeJSON(CACHE_KEY, { v: 1, list });
    return list;
  }

  function clearCache() {
    try {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(LEGACY_KEY);
    } catch { /* non-fatal */ }
  }

  return { enabled, TYPES, MAX_SAVED, kindOf, keyOf, lookup, saved, remove, clearCache };
})();
