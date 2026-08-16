# Calibration and dosage drills

A design for the one kind of exam question a fixed bank cannot teach: the ones
with numbers in them. Not built yet; this is the plan.

## Why a fixed question is not enough

The bank already has about fifteen worked calculations, most of them in the
core manual's appendix C and the aerial manual's chapter 5:

> Your equipment is calibrated at 40 gallons per acre and the label calls for
> 2.5 pounds of formulation per 100 gallons of water. You have 1 acre to
> treat. How much formulation belongs in that partial tank load?
> — `s12-007`, Core Manual p. 190

Answered three times, that card stops testing the method. The scheduler is
doing exactly what it should — the card is easy now — but what got easy is
recalling *1 pound, or 16 ounces*, not converting a partial load. The real exam
draws the same method with different numbers, and a nonprogrammable calculator
is allowed at the exam site, so the arithmetic itself is fair game.

Every other rule in [question-authoring.md](question-authoring.md) points the
same way. "One fact per question, one question per fact": with a calculation,
the fact is the method, and shipping six variants of `s12-007` would be six
cards for one fact, each drilling the others by accident and each inflating the
readiness projection.

## The model: the template is the card

One template, one id, one FSRS card, **new numbers every time it comes up**.

That keeps the arithmetic honest and it keeps everything else unchanged.
`js/readiness.js` treats each question as one trial whose recall probability
comes from the card's memory state; a template is one trial in exactly that
sense, so the projection needs no special case. Export, import, and the review
log are keyed by id, so they need none either.

The alternative — pre-generating N variants into `data/questions.js` — needs no
engine work at all, and should still be rejected. It multiplies cards without
multiplying facts, which is the failure mode the authoring rules exist to
prevent.

## Where the numbers come from

A new `data/problems.js`, parallel to `data/questions.js`. It is the one data
file that is code rather than JSON, because a calculation is code:

```js
{
  id: 'm12-001',
  section: 12, sectionLabel: 'app. C', sectionName: 'Calculations',
  page: '190',                       // cites the page that teaches the method
  name: 'Formulation for a partial tank load',
  // Ranges the numbers are drawn from, in the units the label uses.
  vary: { gpa: [15, 60, 5], rate: [1, 4, 0.5], acres: [0.5, 3, 0.5] },
  ask: v => `Your equipment is calibrated at ${v.gpa} gallons per acre and the
    label calls for ${v.rate} pounds of formulation per 100 gallons of water.
    You have ${v.acres} acres to treat. How much formulation belongs in that
    partial tank load?`,
  solve: v => v.gpa * v.acres * v.rate / 100,
  unit: 'pounds',
  places: 2,
  // The three classic ways to get it wrong, each named. The name is what the
  // reader is told when they pick it.
  slips: [
    { why: 'read the label rate as pounds per acre',
      value: v => v.rate * v.acres },
    { why: 'divided by the rate instead of multiplying by it',
      value: v => v.gpa * v.acres / v.rate * 100 },
    { why: 'left out the per-100-gallons divisor',
      value: v => v.gpa * v.acres * v.rate },
  ],
  teach: v => `The gallons figure is the water you will actually put in, not
    the tank's capacity: ${v.gpa} x ${v.acres} = ${v.gpa * v.acres} gallons.
    Then ${v.gpa * v.acres} x ${v.rate} / 100 = ...`,
}
```

`vary` gives `[min, max, step]` so the drawn numbers stay the kind a label
prints — 2.5 pounds, not 2.4713.

### Distractors are named mistakes, not noise

This is the part that decides whether the feature is any good. Three random
numbers around the answer make a guessable question and teach nothing. Three
*wrong methods* make a question that diagnoses:

- unit slip — ounces for pounds, per 1,000 sq ft for per acre, quarts for
  gallons
- inverted ratio — divided where you multiply
- wrong constant — 16 ounces to the gallon instead of 128, a forgotten 43,560
- a step skipped — active ingredient never converted to formulation, speed
  never converted to miles per minute
- the decimal in the wrong place

Because each wrong choice is a named slip, a wrong answer can say *what you
did*, which no static distractor in the bank does today. That wants one small,
generic engine addition: a question may carry `whyWrong[]` alongside
`explanation`, and the feedback screen shows the entry for the choice actually
picked. Plain written questions could use it too, and probably should.

## Making a generated item safe

Draw, compute, then check before showing. Reject and redraw if:

- the four values are not distinct once rounded to `places`
- the correct answer is negative, zero, or outside a sane band for its unit
- a slip happens to produce the correct value for these particular numbers
  (it will: `x / v.rate` and `x * v.rate` coincide when `rate` is 1)

Cap the redraws — twenty, then widen the rounding and try once more, then fall
back to a recorded default set of numbers so a template can never fail to
render. The fallback firing is a bug in the template's ranges, so log it.

### Determinism

Numbers come from a seeded PRNG (mulberry32, five lines, no dependency), never
`Math.random()`. The seed is drawn when the item is queued and lives in the
session object, which is already mirrored to `sessionStorage`. That gives, for
free:

- **Undo** re-asks the same numbers rather than a new problem
- a **mock exam review screen** shows what was actually asked
- **tests** that can sweep seed 0..9999 and assert properties

Card state in `localStorage` does not store the seed. A card that comes due
tomorrow should be a fresh problem.

## Fitting into the app

Templates should not be a fifth mode. A separate "Math" tab gets practised by
people who already like arithmetic; the point is that a calibration problem
turns up in the ordinary Study queue, scheduled by the same FSRS, counted in
the same readiness projection.

The engine makes this cheap. Every list operation in `js/app.js` — section
counts, Browse, Stats, exam pools, the Settings picker — reads `QUESTION_BANK`
as a plain list, and there is exactly one lookup by id:

```js
const BY_ID = {};
QUESTION_BANK.forEach(q => { BY_ID[q.id] = q; });   // js/app.js:119
```

So:

1. `js/problems.js` materializes each template into an ordinary question object
   — `{id, section, sectionName, manual, page, question, choices, answer,
   explanation}` — and appends them to the bank at boot. Nothing downstream can
   tell the difference.
2. The two places that are about to *show* a card (`renderQuestion`,
   `renderExamQuestion`) call `Problems.reroll(id, seed)` first, which
   regenerates that object in place. Two lines each.
3. Browse rerolls on render too, so the example shown is fresh.

`data/exam-config.js` needs nothing: a template carries `section` and `manual`
like any question, so it joins whichever exams already draw on that section.

## Families worth covering

Roughly in the order the manuals teach them. Each is one or a few templates,
not one per number.

| Family | Templates | Source already in the bank |
| --- | --- | --- |
| Area: square feet to acres, swath x distance | 2 | Core app. C |
| Spray volume: tank loads for an area, partial loads | 3 | Core app. C |
| Product for a job: rate per acre x acres, in label units | 3 | Core app. C |
| Active ingredient to formulation, and back | 2 | Core app. C |
| Dilution: per 100 gallons, percent solutions, small tanks | 3 | Core app. C |
| Calibration, 1/128 acre method: ounces collected = GPA | 2 | Core ch. 11 |
| Boom output: speed, nozzle flow, spacing (the 5940 constant) | 2 | Core ch. 11 |
| Granular: pounds per 1,000 sq ft to pounds per acre | 2 | Core app. C |
| Aerial: GPM, airspeed, and swath to gallons per acre | 3 | Aerial ch. 5 |
| Aerial: gallons per mile, and per-minute conversions | 2 | Aerial ch. 5 |

About 24 templates. The fifteen static calculations they replace should be
retired as they are covered — not left alongside, or the template and the old
fixed question are two cards for one method again. Keep the ones that ask
*which* formula applies rather than asking for a number; those are recall and
belong in the written bank.

## Tests

A new `tests/problems-test.js`, run by `npm test`. For every template, over
several thousand seeds:

- exactly four choices, all distinct after rounding
- the marked answer equals `solve()` computed independently of the choice
  builder
- the answer is inside the template's declared band, and its unit is the
  declared unit
- no slip ever equals the correct value
- the fallback never fires

And the numeric analogue of the answer-length rule the bank validator already
prints. If the correct answer is systematically the largest of the four, or
always the second smallest, the drill is gameable without doing the arithmetic:

- assert the correct answer's **rank** among the four sorted values is
  near-uniform across seeds (roughly 25% in each position, warn past 35%)

That check is the reason to compute slips as fractions and multiples of the
answer in both directions, rather than always as "the answer times something
bigger than one".

## Phasing

1. `js/problems.js` with the PRNG, the draw-and-validate loop, and the
   materialize/reroll pair. One family — product for an area — as three
   templates. Study mode only. Tests. This proves the shape end to end and is
   the point to stop and look at whether the generated questions actually read
   like exam questions.
2. The remaining families. Browse and mock exams. Retire the static
   calculations family by family.
3. `whyWrong[]` in the engine and the named-slip feedback. Worth doing last
   because it is the piece that can be added to written questions too, and its
   design is better decided once there are real templates to look at.

## Open questions

- **Counting.** "1133 questions" in the README and the badge is validated
  against the bank length. Templates are not questions in that sense — one
  template is unboundedly many questions. Count them separately: "1133
  questions and 24 calculation drills".
- **Which exams.** Core and Private ask calibration and dosage arithmetic;
  Aerial Methods asks its own. The Pesticide Dealer exam almost certainly asks
  none — a dealer sells rather than mixes. Templates carry a section, so this
  falls out of where they are placed, but placement should be deliberate.
- **Rounding conventions.** The manuals round differently in different places
  (`a5-018` gives 11.25 from a 0.833 intermediate). A template should round only
  at the end and declare `places`, and its `teach` text should show the
  intermediate the manual shows, even where that intermediate is itself
  rounded.
- **Free entry instead of four choices.** Tempting, and it is how the real
  work goes. It would break the engine's one hard assumption (every question
  offers exactly four choices) and it drags in answer-tolerance questions that
  multiple choice sidesteps. Not for the first version.
