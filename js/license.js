/* NC pesticide license lookup. Queries the North Carolina Department of
   Agriculture public license search — the same public data behind
   apps.ncagr.gov/AgRSysPortalV2/licensesearch — and caches the result so the
   card shows instantly and only touches the network when the user asks it to.

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
  const TOKEN_KEY = 'ncagr-token';    // {token, exp} — cached bearer token
  const CACHE_KEY = 'ncagr-license';  // {input, record, fetchedAt}
  const TIMEOUT = 15000;

  // Pesticide license types, from the portal's own ownerlicensetypes list
  // (the two pesticide owners, FDPE and FDPR). The owner scopes the search, so
  // it travels with each type rather than being a second thing to pick.
  const TYPES = [
    { id: '026', owner: 'FDPE', label: 'Commercial Pesticide Applicator (026)' },
    { id: '038', owner: 'FDPR', label: 'Private Pesticide Applicator (038)' },
    { id: '027', owner: 'FDPE', label: 'Aerial Pesticide Applicator (Pilot) (027)' },
    { id: '028', owner: 'FDPE', label: 'Aerial Pesticide Applicator (Contractor) (028)' },
    { id: '029', owner: 'FDPE', label: 'Aerial Pesticide Applicator (Apprentice) (029)' },
    { id: '030', owner: 'FDPE', label: 'Pesticide Consultant (030)' },
    { id: '031', owner: 'FDPE', label: 'Public Pesticide Operator (Fed-State)-Ground (031)' },
    { id: '032', owner: 'FDPE', label: 'Public Pesticide Operator (County-Municipal)-Ground (032)' },
    { id: '033', owner: 'FDPE', label: 'Public Pesticide Operator (Public Utility)-Ground (033)' },
    { id: '034', owner: 'FDPE', label: 'Public Aerial Pesticide (Fed-State)-Pilot (034)' },
    { id: '035', owner: 'FDPE', label: 'Public Aerial Pesticide (County-Municipal)-Pilot (035)' },
    { id: '037', owner: 'FDPE', label: 'Pesticide Dealer (037)' },
  ];
  const typeById = id => TYPES.find(t => t.id === id);

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
    writeJSON(CACHE_KEY, entry);
    return entry;
  }

  const cached = () => readJSON(CACHE_KEY);
  function clearCache() {
    try { localStorage.removeItem(CACHE_KEY); } catch { /* non-fatal */ }
  }

  return { enabled, TYPES, lookup, cached, clearCache };
})();
