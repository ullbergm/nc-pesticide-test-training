#!/usr/bin/env node
/* Calculation drills (data/problems.js + js/problems.js).
 *
 * A drill is not one question but a method, so it cannot be reviewed the way
 * a written question is: there is no single wording to read against a page.
 * What can be checked is every draw it is capable of producing, which is what
 * this does — a few thousand seeds per template, asserting the properties a
 * generated question has to have to be a fair exam question.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const load = (file, name) => eval(read(file).replace(`const ${name}`, `globalThis.${name}`));

load('data/questions.js', 'QUESTION_BANK');
load('data/manual-pages.js', 'MANUAL_PAGES');
const written = QUESTION_BANK.length;

// Warnings are how the engine reports a template whose ranges cannot produce a
// usable problem; catch them rather than letting them scroll past.
const warnings = [];
const report = console.error.bind(console);
console.warn = msg => warnings.push(msg);
console.error = msg => warnings.push(msg);

load('data/problems.js', 'PROBLEM_TEMPLATES');
load('js/problems.js', 'Problems');

const SEEDS = 4000;
const errors = [];
const fail = msg => { if (errors.length < 40) errors.push(msg); };
// A choice string back to its number: "1,600 pounds" -> 1600.
const value = choice => Number(String(choice).split(' ')[0].replace(/,/g, ''));

for (const t of Problems.templates) {
  const ranks = [0, 0, 0, 0];
  const positions = [0, 0, 0, 0];
  let fallbacks = 0;

  // --- the template's own fields, before any draw ---
  const twin = QUESTION_BANK.find(q => !q.drill
    && (q.manual || 'default') === (t.manual || 'default') && q.section === t.section);
  if (!twin) {
    fail(`${t.id}: section ${t.section} of ${t.manual || 'the core manual'} has no written `
      + 'questions, so nothing in the app names it; place the drill in a section that exists');
  } else {
    if (twin.sectionName !== t.sectionName) {
      fail(`${t.id}: sectionName "${t.sectionName}" but the section is called "${twin.sectionName}"`);
    }
    if ((twin.sectionLabel || '') !== (t.sectionLabel || '')) {
      fail(`${t.id}: sectionLabel "${t.sectionLabel || ''}" but the section uses "${twin.sectionLabel || ''}"`);
    }
  }
  if (!t.manual && !MANUAL_PAGES[t.page]) {
    fail(`${t.id}: page "${t.page}" is not in the core manual's pages map, so the citation cannot link`);
  }
  if (new Set(t.slips.map(s => s.why)).size !== t.slips.length) {
    fail(`${t.id}: two slips share a name; each names a different mistake`);
  }
  // A slip name is shown to the reader as "You ${why}.", so it is a verb
  // phrase rather than a sentence of its own.
  t.slips.forEach(s => {
    if (typeof s.why !== 'string' || !s.why.trim()) {
      fail(`${t.id}: a slip has no name`);
    } else if (/[.!?]$/.test(s.why.trim()) || /^[A-Z][a-z]/.test(s.why)) {
      fail(`${t.id}: the slip "${s.why}" should complete "You ...", `
        + 'so it starts lowercase and ends without a full stop');
    }
  });
  if (t.slips.length < 4) {
    fail(`${t.id}: only ${t.slips.length} slips, so the same three distractors appear every time`);
  }
  // The recorded numbers are the last thing between a bad range and a card
  // that cannot render, so they have to work on their own. Drawing from an
  // empty range is how that path is forced; the warning it prints is the
  // point of the exercise, so it does not count against the template.
  const noticed = warnings.length;
  const forced = Problems.build({ ...t, vary: {} }, 1);
  warnings.length = noticed;
  if (!forced || !forced.fallback || new Set(forced.choices).size !== 4) {
    fail(`${t.id}: its recorded fallback numbers do not produce a usable problem`);
  }

  for (let seed = 0; seed < SEEDS; seed++) {
    const q = Problems.build(t, seed);
    if (!q) { fail(`${t.id}: seed ${seed} produced no question at all`); continue; }
    if (q.fallback) { fallbacks++; continue; }

    // --- shape ---
    if (q.choices.length !== 4) fail(`${t.id}/${seed}: ${q.choices.length} choices`);
    if (new Set(q.choices).size !== 4) fail(`${t.id}/${seed}: choices repeat [${q.choices}]`);
    if (!(q.answer >= 0 && q.answer <= 3)) fail(`${t.id}/${seed}: answer index ${q.answer}`);
    if (!q.question || !q.explanation) fail(`${t.id}/${seed}: empty question or explanation`);
    if (/undefined|NaN|Infinity/.test(q.question + q.explanation + q.choices.join(''))) {
      fail(`${t.id}/${seed}: a value did not render [${q.question}]`);
    }
    if (q.id !== t.id) fail(`${t.id}/${seed}: id changed to ${q.id}`);

    // --- the marked answer is the method's answer, computed independently ---
    const solved = t.solve(q.numbers);
    const marked = value(q.choices[q.answer]);
    if (Math.abs(marked - solved) > 0.5 * 10 ** -t.places + 1e-9) {
      fail(`${t.id}/${seed}: marked ${marked} but solve() gives ${solved}`);
    }
    if (solved < t.band[0] || solved > t.band[1]) {
      fail(`${t.id}/${seed}: answer ${solved} is outside the declared band [${t.band}]`);
    }
    // The unit as printed, which is the template's with the measure
    // singularized when the value is exactly 1 ("1 gallon per acre").
    const unit = q.choices[q.answer].split(' ').slice(1).join(' ');
    if (!new RegExp(`^${t.unit.replace(/^(\w+?)s\b/, '$1s?')}$`).test(unit)) {
      fail(`${t.id}/${seed}: answer is in "${unit}", not "${t.unit}"`);
    }

    // --- every distractor is a named mistake, and none of them is right ---
    q.choices.forEach((choice, i) => {
      if (i === q.answer) {
        if (q.whyWrong[i] !== null) fail(`${t.id}/${seed}: the correct choice names a mistake`);
        return;
      }
      if (!q.whyWrong[i]) fail(`${t.id}/${seed}: choice "${choice}" is not a named mistake`);
      const slip = t.slips.find(s => s.why === q.whyWrong[i]);
      if (!slip) fail(`${t.id}/${seed}: "${q.whyWrong[i]}" is not one of the template's slips`);
      // Some mistakes land on the right answer for particular numbers: x/rate
      // and x*rate coincide whenever the rate is 1, and a drill that offers
      // the answer twice is unanswerable.
      else if (slip.value(q.numbers) === solved || value(choice) === marked) {
        fail(`${t.id}/${seed}: distractor "${choice}" is the correct answer`);
      }
    });

    const numbers = q.choices.map(value);
    // "0 pounds" is not an answer anyone would write down, so a choice that
    // rounds away to nothing is a choice nobody weighs.
    if (numbers.some(x => !(x > 0))) {
      fail(`${t.id}/${seed}: a choice rounds to nothing [${q.choices}]`);
    }
    ranks[numbers.filter(x => x < marked).length]++;
    positions[q.answer]++;
  }

  // --- determinism: the seed is the whole of the draw ---
  const once = Problems.build(t, 12345);
  const twice = Problems.build(t, 12345);
  if (JSON.stringify(once) !== JSON.stringify(twice)) {
    fail(`${t.id}: the same seed gave two different problems`);
  }

  if (fallbacks) fail(`${t.id}: fell back to its recorded numbers on ${fallbacks} of ${SEEDS} seeds`);

  // The numeric answer-length tell: if the correct answer is systematically
  // the largest of the four, or always the second smallest, the drill is
  // beatable without doing the arithmetic. Chance is 25% in each rank.
  const pct = n => Math.round((n / SEEDS) * 100);
  console.log(`${t.id} ${t.name}`);
  console.log(`  answer rank ${ranks.map(pct).join('/')}%, position ${positions.map(pct).join('/')}% (chance ~25 each)`);
  ranks.forEach((n, rank) => {
    if (pct(n) > 40) {
      fail(`${t.id}: the correct answer is the ${['smallest', '2nd smallest', '2nd largest', 'largest'][rank]}`
        + ` of the four ${pct(n)}% of the time; give it slips that land the other way`);
    } else if (pct(n) > 35) {
      console.warn(`WARN ${t.id}: answer rank ${rank} at ${pct(n)}%, drifting toward guessable`);
    }
  });
}

// --- what the templates put in the bank ---
const drills = QUESTION_BANK.filter(q => q.drill);
if (drills.length !== Problems.count) {
  fail(`${drills.length} of ${Problems.count} templates reached the bank`);
}
if (QUESTION_BANK.length !== written + drills.length) {
  fail('materializing the drills changed the bank by more than the drills');
}
const ids = new Set(QUESTION_BANK.filter(q => !q.drill).map(q => q.id));
drills.forEach(q => {
  if (ids.has(q.id)) fail(`${q.id}: a written question already has that id`);
  ['section', 'sectionName', 'question', 'choices', 'answer', 'explanation', 'page']
    .forEach(f => { if (q[f] === undefined || q[f] === '') fail(`${q.id}: missing ${f}`); });
});

// The README states both counts in prose; the validator holds the question
// count to the bank, and this holds the drill count to the templates.
const readme = read('README.md');
const claimed = [...readme.matchAll(/\b(\d+) calculation drills\b/g)].map(m => Number(m[1]));
if (!claimed.length) {
  fail('README no longer states the drill count (expected "N calculation drills" somewhere)');
}
claimed.filter(n => n !== Problems.count).forEach(n =>
  fail(`README says ${n} calculation drills but there are ${Problems.count} templates`));

// index.html and the test shell both have to load the two files, and sw.js
// has to precache them, or the drills are missing from the app, from the
// browser suite, or from every offline visit.
['index.html', 'tests/test.html', 'sw.js'].forEach(file => {
  const src = read(file);
  ['data/problems.js', 'js/problems.js'].forEach(dep => {
    if (!src.includes(dep)) fail(`${file} does not load ${dep}`);
  });
});

warnings.forEach(w => fail(`engine reported: ${w}`));

if (errors.length) {
  errors.forEach(e => report('ERROR ' + e));
  process.exit(1);
}
console.log(`${Problems.count} calculation drills OK over ${SEEDS} seeds each`);
