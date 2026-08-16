/* Calculation drills: the engine that turns a template in data/problems.js
 * into an ordinary bank question with fresh numbers.
 *
 * A worked calculation with fixed numbers stops testing its method the third
 * time it is answered: what got easy is recalling the answer, not converting
 * the load. So a template is one card — one id, one FSRS card, one entry in
 * the bank — whose numbers are drawn again every time it comes up.
 *
 * Everything downstream reads the bank as a plain list, so a materialized
 * template is a plain question object: {id, section, sectionName, question,
 * choices, answer, explanation, page}. Nothing in the scheduler, the readiness
 * projection, the exam pools or the export knows the difference, and the
 * `drill` flag exists only for the two places that count cards for a reader.
 *
 * Numbers come from a seeded PRNG rather than Math.random, so a draw can be
 * reproduced from its seed. The caller keeps the seed with the session, which
 * is what makes Undo re-ask the same problem and a reload mid-session resume
 * the one that was on screen. Card state stores no seed: a card that comes due
 * tomorrow should be a fresh problem.
 *
 * docs/math-drills.md is the design; data/problems.js documents a template.
 */
const Problems = (() => {
  // An exam with no arithmetic in it drops data/problems.js and keeps working:
  // no templates means nothing is appended to the bank and every call below is
  // a no-op.
  const TEMPLATES = typeof PROBLEM_TEMPLATES === 'undefined' ? [] : PROBLEM_TEMPLATES;
  // Draws to try before widening the rounding, then before falling back.
  const TRIES = 20;
  // How far from the correct answer a distractor may land, unless a template
  // sets its own `spread`. A named mistake can be out by a conversion factor
  // and still be the answer someone would write down (43.5, 16, a decimal
  // place), but past this it is not a choice anyone weighs, and it turns a
  // four-choice question into a three-choice one. A method built on a divisor
  // — per 100 gallons, 128 fluid ounces, a percent — raises it, because
  // leaving that divisor out is the mistake the question is about and it lands
  // exactly a hundred-fold away.
  const SPREAD = 50;
  // Fixed seeds: the draw a template is materialized with at boot, and the one
  // its recorded fallback numbers are dressed with. Both are constant so that
  // a reload reproduces them exactly.
  const BOOT_SEED = 0x5EED;
  const FALLBACK_SEED = 0xFA11;

  // mulberry32: a 32-bit PRNG in five lines, good enough for drawing label
  // rates and small enough to read.
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const shuffle = (arr, rand) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // toFixed rounds the decimal the reader sees, which is the comparison that
  // matters here: two choices are the same choice when they print the same.
  const round = (x, places) => Number(x.toFixed(places));

  // "1,600", "7.5", "0.01": rounded to `places`, trailing zeros dropped, and
  // grouped in thousands the way the manual prints them.
  function num(x, places) {
    let s = round(x, places).toFixed(places);
    if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
    const [whole, frac] = s.split('.');
    return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (frac ? '.' + frac : '');
  }

  // A quantity with its unit. Units are written plural in a template and
  // singularized at exactly 1 by dropping the s from the measure itself, which
  // is all the units a pesticide label uses need: "1 pound", and "1 gallon per
  // acre" rather than "1 gallons per acre".
  const SINGULAR = /^(\w+?)s\b/;
  function qty(x, places, unit) {
    const r = round(x, places);
    return `${num(x, places)} ${r === 1 ? unit.replace(SINGULAR, '$1') : unit}`;
  }

  // A template writes its prose across several lines; the app wants one.
  const text = s => String(s).replace(/\s+/g, ' ').trim();

  // What `ask` and `teach` are handed: n(x) prints a number, n(x, 'pounds')
  // prints it with its unit.
  const n = (x, unit) => (unit ? qty(x, 2, unit) : num(x, 2));

  // One value per variable, on the template's own grid, so a drawn rate is the
  // kind a label prints.
  function drawValues(t, rand) {
    const v = {};
    Object.entries(t.vary).forEach(([key, [lo, hi, step]]) => {
      const steps = Math.floor((hi - lo) / step + 1e-9);
      v[key] = round(lo + step * Math.floor(rand() * (steps + 1)), 6);
    });
    return v;
  }

  const triples = list => {
    const out = [];
    for (let i = 0; i < list.length - 2; i++) {
      for (let j = i + 1; j < list.length - 1; j++) {
        for (let k = j + 1; k < list.length; k++) out.push([list[i], list[j], list[k]]);
      }
    }
    return out;
  };

  /* One draw, checked before it is shown. Returns a question object, or null
     when this draw is not usable and the caller should draw again. */
  function compose(t, v, places, rand) {
    // Variables are drawn independently, so a template whose numbers have to
    // stand in some relation to each other — the wide measurement of a swath
    // pattern being the wider one — says so and the draw is thrown away.
    if (t.valid && !t.valid(v)) return null;
    const exact = t.solve(v);
    if (!Number.isFinite(exact) || exact <= 0) return null;
    if (exact < t.band[0] || exact > t.band[1]) return null;
    const ans = round(exact, places);
    const label = x => qty(x, places, t.unit);
    const right = label(ans);

    // A slip is usable when it is a number a person could write down, sits
    // near enough the answer to be weighed against it, and is not the correct
    // answer wearing a different name — which happens for real: dividing and
    // multiplying by the rate coincide whenever the rate is 1. A value that
    // rounds away to nothing is dropped too: "0 pounds" is not an answer
    // anyone would write down, so offering it is offering three choices.
    const spread = t.spread || SPREAD;
    const usable = t.slips
      .map(s => ({ why: s.why, value: s.value(v) }))
      .filter(s => Number.isFinite(s.value) && round(s.value, places) > 0
        && s.value <= exact * spread && s.value * spread >= exact
        && label(s.value) !== right);

    // Which three of them to use. The numeric analogue of the answer-length
    // tell the bank validator prints is the correct answer's rank among the
    // four values: if it is always the largest, or always the second smallest,
    // the drill can be beaten without doing the arithmetic. So a rank is drawn
    // first and a combination that produces it is preferred; when the drawn
    // numbers make that rank unreachable, the first usable combination stands.
    const want = Math.floor(rand() * 4);
    let chosen = null;
    for (const combo of shuffle(triples(usable), rand)) {
      if (new Set([right, ...combo.map(s => label(s.value))]).size !== 4) continue;
      if (!chosen) chosen = combo;
      if (combo.filter(s => round(s.value, places) < ans).length === want) {
        chosen = combo;
        break;
      }
    }
    if (!chosen) return null;

    const at = Math.floor(rand() * 4);
    const choices = chosen.map(s => label(s.value));
    // Parallel to `choices`: the mistake that produces each wrong one, null
    // for the correct one. Nothing shows these yet; they are what lets the
    // feedback screen say what you did rather than only what is right.
    const whyWrong = chosen.map(s => s.why);
    choices.splice(at, 0, right);
    whyWrong.splice(at, 0, null);

    const q = {
      id: t.id,
      section: t.section,
      sectionName: t.sectionName,
      question: text(t.ask(v, n)),
      choices,
      answer: at,
      explanation: text(t.teach(v, ans, n)),
      page: t.page,
      drill: true,
      whyWrong,
      numbers: v,     // the draw, so a test can recompute the answer from it
      fallback: false,
    };
    if (t.sectionLabel) q.sectionLabel = t.sectionLabel;
    if (t.manual) q.manual = t.manual;
    return q;
  }

  /* A template plus a seed makes a question. Draw, check, redraw; the numbers
     are a function of the seed alone, so the same seed always gives the same
     problem. */
  function build(t, seed) {
    const rand = rng(seed);
    for (let i = 0; i < TRIES; i++) {
      const q = compose(t, drawValues(t, rand), t.places, rand);
      if (q) return q;
    }
    // Most rejections are four values that collide once rounded, so try again
    // with a decimal place more before giving up on drawing at all.
    for (let i = 0; i < TRIES; i++) {
      const q = compose(t, drawValues(t, rand), t.places + 1, rand);
      if (q) return q;
    }
    // The recorded numbers, so a template can never fail to render. Reaching
    // here means its `vary` ranges cannot produce a usable problem, which is a
    // bug in the template and not something the reader should be shown
    // silently. tests/problems-test.js asserts this never fires.
    console.warn(`problems: ${t.id} fell back to its recorded numbers; check its vary ranges`);
    const fb = rng(FALLBACK_SEED);
    const q = compose(t, t.fallback, t.places, fb)
      || compose(t, t.fallback, t.places + 1, fb);
    if (q) q.fallback = true;
    return q;
  }

  const BY_ID = {};   // id -> template
  const CARDS = {};   // id -> the question object this template has in the bank
  TEMPLATES.forEach(t => { BY_ID[t.id] = t; });

  const isDrill = id => Object.prototype.hasOwnProperty.call(BY_ID, id);

  // A seed for a fresh problem. Callers keep it with the session so the same
  // problem can be re-rendered.
  const newSeed = () => Math.floor(Math.random() * 4294967296) >>> 0;

  /* Give a drill new numbers, in place, so every reference to it — the bank,
     the app's id index, whatever a view is holding — sees the new problem. */
  function reroll(id, seed) {
    const t = BY_ID[id];
    if (!t || !CARDS[id]) return null;
    const fresh = build(t, seed);
    return fresh ? Object.assign(CARDS[id], fresh) : CARDS[id];
  }

  /* Materialize every template into the bank. Runs at load, before anything
     reads QUESTION_BANK, with a fixed seed so a reload reproduces the same
     starting problem. A template that cannot render at all is left out rather
     than allowed to take the app down with it. */
  TEMPLATES.forEach((t, i) => {
    const q = build(t, BOOT_SEED + i);
    if (!q) {
      console.error(`problems: ${t.id} could not be rendered and was left out of the bank`);
      return;
    }
    CARDS[t.id] = q;
    QUESTION_BANK.push(q);
  });

  return { templates: TEMPLATES, count: TEMPLATES.length, build, reroll, isDrill, newSeed };
})();
