/* The License tab: NC license lookup cards with recertification-credit
   meters. App-specific UI on top of js/license.js (the portal client) and
   data/recert-credits.js (what AG-714 asks of each category), registered
   with the engine through its APP_VIEWS hook: the engine routes #license to
   renderLicense and hands it the view surface. When no portal credential is
   configured the view never registers, the engine drops the route, and the
   nav tab is removed at boot.
   Loads after js/license.js and before js/app.js. */
(() => {
  if (!License.enabled) return;

  const DAY = 24 * 60 * 60 * 1000;
  // Bound at each render from the engine's view context; the helpers below
  // only run from inside renderLicense, so they always see current bindings.
  let view, $, esc, cfg;

  // The NC search prints dates as M/D/YYYY. Parse to a local Date, or null
  // when the string is empty or not a date, so callers can fall back to
  // showing the raw text.
  function parseUSDate(s) {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(s || '').trim());
    if (!m) return null;
    const d = new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2]));
    return Number.isNaN(d.getTime()) ? null : d;
  }
  const fmtDate = d =>
    d ? d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '';

  // "in 3 months" / "5 days ago", rounded to whatever unit reads cleanly at
  // that distance. Used for the expiration and recertification deadlines.
  function relDays(d) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((d - today) / DAY);
    if (days === 0) return 'today';
    const n = Math.abs(days);
    let phrase;
    if (n < 60) phrase = `${n} day${n === 1 ? '' : 's'}`;
    else if (n < 550) { const mo = Math.round(n / 30); phrase = `${mo} month${mo === 1 ? '' : 's'}`; }
    else { const yr = Math.round(n / 36.5) / 10; phrase = `${yr} year${yr === 1 ? '' : 's'}`; }
    return days > 0 ? `in ${phrase}` : `${phrase} ago`;
  }

  // How long ago the cached lookup was fetched, for the "last checked" line.
  function relTime(ts) {
    const mins = Math.round((Date.now() - ts) / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins} min ago`;
    const hrs = Math.round(mins / 60);
    if (hrs < 24) return `${hrs} hour${hrs === 1 ? '' : 's'} ago`;
    const days = Math.round(hrs / 24);
    if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;
    return `on ${new Date(ts).toLocaleDateString()}`;
  }

  const titleCase = s =>
    String(s || '').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

  // Credits earned against credits owed. The record counts only what was
  // earned; data/recert-credits.js supplies what each letter asks of this
  // licence, which depends on the other letters beside it, so the two are
  // zipped here into one meter per category.
  const fmtHours = n => (Number.isInteger(n) ? String(n) : n.toFixed(1));

  function creditPlan(record) {
    const earned = RECERT.parseTotals(record.creditTotals);
    const kind = License.kindOf(record.licenseTypeId);
    const required = RECERT.plan(earned.map(e => e.code), kind);
    const byCode = new Map(required.map(r => [r.code, r]));
    const rows = earned.map(e => ({ ...e, ...(byCode.get(e.code) || {}) }));
    // Only the categories with a requirement can be totalled; Core and any
    // letter the table does not know sit outside the sum rather than
    // dragging it silently off.
    const scored = rows.filter(r => typeof r.required === 'number');
    const need = scored.reduce((n, r) => n + r.required, 0);
    const met = scored.reduce((n, r) => n + Math.min(r.earned, r.required), 0);
    return { rows, need, met, kind, short: Math.max(0, need - met) };
  }

  function creditsHTML(record) {
    const { rows, need, met, kind, short } = creditPlan(record);
    if (!rows.length) return '<p class="hint">No credits on record for this cycle.</p>';
    const cycle = RECERT.CYCLES[kind];
    const summary = need === 0
      ? ''
      : short === 0
        ? `<p class="crsum met">All ${fmtHours(need)} hours earned for this cycle.</p>`
        : `<p class="crsum">${fmtHours(met)} of ${fmtHours(need)} hours earned —
             <b>${fmtHours(short)} short</b>${
               cycle ? `, due by ${esc(cycle.due)}` : ''}.</p>`;
    return `
      <ul class="creditlist">
        ${rows.map(r => {
          const has = typeof r.required === 'number';
          const pct = has && r.required > 0
            ? Math.min(100, Math.round((r.earned / r.required) * 100)) : 0;
          const met = has && r.earned >= r.required;
          return `
            <li class="credit${has ? (met ? ' met' : ' short') : ' untargeted'}">
              <div class="crhead">
                <span class="crname"><b>${esc(r.code)}</b>${
                  r.name ? ` ${esc(r.name)}` : ''}</span>
                <span class="crnum">${fmtHours(r.earned)}${
                  has ? ` <span class="crof">of ${fmtHours(r.required)}</span>` : ''}</span>
              </div>
              ${has
                ? `<div class="crbar"><span style="width:${pct}%"></span></div>` : ''}
              ${r.rule ? `<div class="crrule">${esc(r.rule)}</div>` : ''}
            </li>`;
        }).join('')}
      </ul>
      ${summary}`;
  }

  function licenseCard(entry) {
    const r = entry.record;
    const exp = parseUSDate(r.expire);
    const recert = parseUSDate(r.recertBy);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expired = exp && exp < today;
    const expSoon = exp && !expired && exp - today <= 60 * DAY;
    const badge = expired ? 'danger' : expSoon ? 'warn' : 'ok';
    const key = License.keyOf(entry.input);
    return `
      <div class="liccard" data-lic="${esc(key)}">
        <div class="lichead">
          <div>
            <div class="licname">${esc(r.name || '—')}</div>
            <div class="licsub">${esc(r.licenseType || '')}${
              r.county ? ` · ${esc(titleCase(r.county))} County` : ''}</div>
          </div>
          <span class="licbadge ${badge}">${esc(r.status || 'Unknown')}</span>
        </div>
        <dl class="licgrid">
          <div><dt>License number</dt><dd>${esc(String(r.number))}</dd></div>
          <div><dt>Expires</dt><dd>${exp
            ? `${esc(fmtDate(exp))} <small>${esc(relDays(exp))}${expired ? ' — expired' : ''}</small>`
            : esc(r.expire || '—')}</dd></div>
          <div><dt>Recertify by</dt><dd>${recert
            ? `${esc(fmtDate(recert))} <small>${esc(relDays(recert))}</small>`
            : esc(r.recertBy || '—')}</dd></div>
          ${r.originalIssue
            ? `<div><dt>First licensed</dt><dd>${esc(r.originalIssue)}</dd></div>` : ''}
        </dl>
        <div class="liccredits">
          <h3>Continuing-certification credits</h3>
          ${creditsHTML(r)}
        </div>
        ${r.courses.length ? `
          <details class="liccourses">
            <summary>${r.courses.length} course${r.courses.length === 1 ? '' : 's'} on record</summary>
            <ul>
              ${r.courses.map(c =>
                `<li><span class="cname">${esc(c.name || 'Course')}</span>
                   <span class="cmeta">${esc(c.date)}${c.credits ? ` · ${esc(c.credits)}` : ''}</span></li>`).join('')}
            </ul>
          </details>` : ''}
        <div class="licfoot">
          <button class="btn primary" data-licrefresh="${esc(key)}">Refresh</button>
          <button class="btn" data-licforget="${esc(key)}">Forget this license</button>
          <span class="hint">Last checked ${esc(relTime(entry.fetchedAt))}</span>
        </div>
      </div>`;
  }

  function renderLicense(ctx) {
    if (ctx) ({ view, $, esc, cfg } = ctx);
    const saved = License.saved();
    const full = saved.length >= License.MAX_SAVED;
    view.innerHTML = `
      <div class="license">
        <h2>My licenses</h2>
        <p class="hint">Look a North Carolina pesticide license up by number and type. This is the
          only screen that reaches a server — the
          <a href="https://apps.ncagr.gov/AgRSysPortalV2/licensesearch" target="_blank" rel="noopener">NC
          Department of Agriculture public license search</a>. Results are cached in this browser, so
          they show instantly and only refresh when you ask. Keep as many as you hold: a pilot's own
          license and the contractor they fly under are two separate records.</p>
        <div class="licform">
          <label>License number
            <input type="text" id="licnum" inputmode="numeric" autocomplete="off"
              value="" placeholder="e.g. 87690" ${full ? 'disabled' : ''}>
          </label>
          <label>License type
            <select id="lictype" ${full ? 'disabled' : ''}>
              <option value="">Select type…</option>
              ${License.TYPES.map(t =>
                `<option value="${t.id}">${esc(t.label)}</option>`).join('')}
            </select>
          </label>
          <button class="btn primary" id="liclookup" ${full ? 'disabled' : ''}>
            ${saved.length ? 'Add license' : 'Look up'}</button>
        </div>
        <p id="licstatus" class="licstatus" role="status" aria-live="polite">${
          full ? `Forget one to add another; ${License.MAX_SAVED} is the most this keeps.` : ''}</p>
        <div id="liclist">${saved.map(licenseCard).join('')}</div>
        ${saved.length ? `
          <p class="hint">Letters are NC recertification categories and the first number is what this
            cycle has earned. What each one asks is worked out from
            <a href="${esc(cfg.manuals.ncsu.url)}" target="_blank" rel="noopener">AG-714</a>: the
            highest category held is earned in full and each additional one takes three, except
            demonstration and research, which always takes ten. Aerial certification splits its
            hours differently and runs two years rather than five.</p>
          <p class="disclaimer">These mirror the NC Department of Agriculture public record and can lag
            their system, and the credits each category is shown as owing are worked out here from
            AG-714 rather than read off the record. The official
            <a href="https://apps.ncagr.gov/AgRSysPortalV2/licensesearch"
            target="_blank" rel="noopener">license search</a> and the
            <a href="https://www.ncagr.gov/divisions/structural-pest-control-and-pesticides"
            target="_blank" rel="noopener">NCDA&amp;CS Pesticide Section</a> are authoritative.</p>` : ''}
      </div>`;

    const statusEl = $('#licstatus');
    const busy = (on, msg) => {
      statusEl.className = 'licstatus';
      statusEl.textContent = on ? msg : '';
      view.querySelectorAll('#liclist button').forEach(b => { b.disabled = on; });
      // Add stays disabled at the cap however the lookup that was running
      // turned out; only a Forget makes room, and that re-renders.
      $('#liclookup').disabled = on || full;
    };

    // Add and Refresh are the same call — a lookup of a (number, type) pair,
    // which stores in place — so the difference is only where the pair comes
    // from and whether the form is cleared afterwards.
    async function run(number, typeId, fromForm) {
      busy(true, 'Checking with the NC license search…');
      try {
        await License.lookup(number, typeId);
        if (fromForm) {
          $('#licnum').value = '';
          $('#lictype').value = '';
        }
        renderLicense();
      } catch (err) {
        busy(false);
        statusEl.className = 'licstatus error';
        statusEl.textContent = err.message;
      }
    }

    const fromForm = () => run($('#licnum').value, $('#lictype').value, true);
    $('#liclookup').addEventListener('click', fromForm);
    $('#licnum').addEventListener('keydown', e => { if (e.key === 'Enter') fromForm(); });

    // Delegated, because the cards are re-rendered wholesale on every change.
    $('#liclist').addEventListener('click', e => {
      const refresh = e.target.closest('[data-licrefresh]');
      if (refresh) {
        const entry = saved.find(x => License.keyOf(x.input) === refresh.dataset.licrefresh);
        if (entry) run(entry.input.number, entry.input.typeId, false);
        return;
      }
      const forget = e.target.closest('[data-licforget]');
      if (forget) {
        License.remove(forget.dataset.licforget);
        renderLicense();
      }
    });
  }

  self.APP_VIEWS = Object.assign(self.APP_VIEWS || {}, { license: renderLicense });
})();
