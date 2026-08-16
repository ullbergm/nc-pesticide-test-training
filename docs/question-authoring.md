# Writing the question bank

This is the recipe the question bank was written with.

## How a question is used

Knowing where each field surfaces explains most of the rules below:

- The app shuffles the choices every time a question is shown, so the
  position of the correct answer in the data does not matter. The length and
  wording of the choices show every time, so patterns there matter a lot.
- Choices phrased like "All of the above" are detected (any choice starting
  with all/none/any/both "of the above" or "of these") and kept below the
  choices they refer to, whatever the shuffle does.
- The explanation is shown after a wrong answer, in Browse, and in the mock
  exam review. It has to teach the rule on its own.
- Each question is a spaced-repetition flashcard. Two questions about the
  same fact are scheduled independently, so drilling one silently answers
  the other and inflates the readiness projection.
- The page citation becomes a deep link into the manual PDF. It is how a
  reader verifies a question, and the correction workflow depends on it.

## The schema

`data/questions.js` is a JSON array behind a `const`. One entry:

```json
{
  "id": "s1-012",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 1,
  "explanation": "...",
  "page": "7"
}
```

The same entry from the aerial manual's chapter 1 carries a `manual`, which
picks the manual its `page` is printed in and separates its chapter 1 from the
core manual's:

```json
{
  "id": "a1-004",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 2,
  "explanation": "...",
  "page": "10",
  "manual": "aerial"
}
```

A question from a document that is cited by section rather than by page, such
as a statute or an administrative rule, adds a `ref`:

```json
{
  "id": "l4-014",
  "section": 4,
  "sectionName": "Pesticide Applicators and Consultants",
  "sectionLabel": "pt. 4",
  "manual": "law",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 0,
  "explanation": "...",
  "page": "14",
  "ref": "§ 143-453(a)"
}
```

- `id`: a per-source letter (`s` for the core manual, `a` for the aerial one,
  `l` for the NC Pesticide Law, `r` for the NC pesticide rules, `n` for NC
  State Extension's AG-714)
  + section number + `-` + a three-digit counter, unique in the bank.
- `section`: the chapter number **within its own manual**, counting from 1, so
  the core manual's chapter 1 and the aerial manual's chapter 1 are both
  `"section": 1` and the `manual` field is what tells them apart. Every entry
  in a chapter uses the same `sectionName`. A chapter is keyed
  `"<manual>:<section>"` in the exam config and in saved settings.
- `choices`: exactly four, all distinct.
- `answer`: 0-based index into `choices`.
- `page`: the page number printed on the manual page the fact came from. Add
  `pdfPage` when the same label is printed on more than one PDF page, and a
  `manual` key when the exam config lists more than one manual. An exam whose
  config does not set `requireCitations` may omit citations entirely. A source
  the config marks `web` is a web publication with no pages, so its `page` is
  the heading the fact is printed under; the citation reads as that heading and
  the link is the anchor on it, which the source's map supplies.
- `ref`: what the citation reads as, for a source that is cited by section
  rather than by page ("§ 143-452(a)", ".0503"). The `page` still decides
  which page the link opens, so both are needed. A manual whose config entry
  sets `citeByRef` must have a `ref` on every one of its questions; the
  validator enforces that, because a law question that forgets its ref renders
  as "NC Pesticide Law p. 12", which is right about the PDF and useless to a
  reader looking for the section.

`npm test` runs `tests/validate-bank.js`, which enforces the schema,
uniqueness, and citation resolution, checks the question count stated in the
README, and prints the answer-length statistics described below.

## Rules for writing questions

These are the lessons this bank was rebalanced and deduplicated to learn.

1. **Do not let the correct answer be the longest choice.** Correct answers
   accumulate qualifiers because they have to be exactly right, while
   casually written distractors stay short, and a test-savvy reader will
   pick the longest choice without knowing the material. Give distractors
   equally detailed but wrong qualifiers, or trim the correct answer. By
   chance the correct answer is the uniquely longest about 25% of the time;
   the validator prints the actual rate and warns above 35%.
2. **Make distractors plausible.** Same units, same order of magnitude,
   believable policy. Wrong numbers should be neighboring values from the
   same context (24 / 48 / 72 hours), not absurd ones. An
   obviously wrong distractor turns a four-choice question into a
   three-choice question.
3. **One fact per question, one question per fact.** The manual repeats
   itself across sections; the bank must not. The validator catches
   identical wording, not identical substance, so spotting the same rule
   asked twice in different words is on the author.
4. **Paraphrase, never copy the manual's sentences.** The manual is
   copyrighted text; the questions are original writing about the same
   facts, and the citation points the reader at the source. This also keeps
   a choice from being right merely because it sounds like the book.
5. **The explanation states the rule, not a pointer.** Write what the cited
   page says, in your own words and with the specifics: never "see page
   7", and never general knowledge the page does not support. A reader who
   answered wrong should come away knowing the rule.
6. **Use "All of the above" sparingly and exactly.** When used, start the
   choice with all/none/any/both "of the above" or "of these" so the
   renderer keeps it in place, and make sure the other choices really are
   all true (or all false).
7. **Keep numbers, units and thresholds exactly as the manual states them.**
   Do not round, convert, or update them to current regulations; the exam
   tests the manual.
8. **Ask about the material, not the document.** Nothing like "what does
   section 5 cover" or "how many steps does the manual list"; test what the
   license holder has to know and do.
9. **Write self-contained stems.** Each question must stand alone as a
   specific, complete sentence. Avoid negative stems ("Which is NOT...")
   unless the negation is the point, and capitalize the NOT when it is.
10. **Cite as you write, not afterwards.** Attach the page label while the
    page is in front of you. Citations added from memory afterwards are
    where wrong citations come from.

## Coverage

Work one section at a time, page by page. Every rule, number, procedure and
exception a test could ask about deserves a question, and a thin section
gets full coverage before a dense section gets padding. As a yardstick, this
bank averages three questions per labeled manual page, denser where the
material is dense.

A statute or a rule set is read the same way, but skip what is not law to
follow: repealed and expired rules, history notes, and the internal
housekeeping of the agency. Ask what the license holder has to do, and write
the numbers exactly: fees, deadlines, setbacks, and credit counts are what
these sources exist to fix, and they are what the exam asks about. Because
they can be amended, cite the section rather than the page, so a reader who
finds a question stale can see immediately which section to check.

A source that explains a system the bank already covers from the law — AG-714
is the one here — needs a subtraction before it needs coverage. Read it against
what the rules already say and write only what it adds: the exam formats and
procedures the rules leave to practice, and the parts of the system no rule
states. Where it restates a rule, the rule's question already exists and a
second one for the same fact would be scheduled separately and drill the same
thing twice. Where it *contradicts* a rule, the rule wins and the question does
not get written; note the conflict instead, since the reader who meets it on
the real exam needs to know which source the Board is bound by.

## The loop

1. Read the section's pages in the manual.
2. Draft the section's questions with citations inline, following the rules
   above.
3. Run `npm test`. Fix every error and look at the answer-length line.
4. Review each question against its cited page. For model-drafted questions
   this pass is not optional.
5. Update the question count stated in the README; the validator holds the
   two in sync.

When the manual is revised, regenerate `data/manual-pages.js` with
`tools/gen-manual-pages.js` and spot-check citations near the changed pages.
