/* Everything that names the exam this trainer studies for: the tests and the
   manual chapters behind them, the pass mark, the manual PDF links, and the
   prose that mentions the pesticide exams. The engine under js/ reads only
   this file and data/questions.js, so a trainer for a different exam is built
   by replacing the data/ directory and the page shell (index.html,
   manifest.webmanifest, icons, CNAME); js/ carries no knowledge of any
   particular exam.
   Loads after data/questions.js and data/manual-pages.js and may read both. */
// Which chapters belong to which manual, and so to which exams. Each manual
// numbers its own chapters from 1, exactly as the printed book does, so a
// chapter is identified by the pair (manual, number) and never by the number
// alone: "1" is Pest Management in the core manual and Laws and Regulations
// for the Aerial Applicator Pilot in the aerial one. `chapters()` writes that
// pair the way the app keys it, "<manual>:<number>", and a question belongs to
// the chapter matching its own `manual` field (`default` when it has none).
// Back matter counts as a section too, numbered on after the last chapter for
// ordering; what it calls itself ("app. C") comes from the questions'
// `sectionLabel`, since an appendix's designation is not its position.
//
// The lists are read off the bank rather than written out, because an exam
// listing a section the bank has no questions for is hidden from the app
// entirely: spelling out chapters ahead of authoring them would silently take
// the whole exam away. So a manual's exam covers exactly the sections of that
// manual that exist, and authoring a new one adds it to the exam by itself.
const sectionsOf = manual => [...new Set(
  QUESTION_BANK
    .filter(q => (q.manual || 'default') === manual)
    .map(q => `${manual}:${q.section}`))];
const CORE_SECTIONS = sectionsOf('default');   // chapters 1-11 and appendices
const AERIAL_SECTIONS = sectionsOf('aerial');  // chapters 1-6 and appendices

const EXAM_CONFIG = {
  storageKey: 'nc-pesticide-trainer-v1',      // localStorage; changing it orphans saved progress
  sessionKey: 'nc-pesticide-trainer-session', // sessionStorage mirror of the active session
  exportPrefix: 'pesticide-progress',         // backup filename: <prefix>-YYYY-MM-DD.json
  repo: 'https://github.com/ullbergm/nc-pesticide-test-training',
  passMark: 0.7, // NC requires 70% on the core and category exams

  // Manuals the questions cite. A question picks one with its `manual` field
  // and uses `default` when it has none. `pages` maps the manual's printed
  // page numbers to physical PDF pages for #page= deep links. The questions
  // are written from the national core manual, which is freely published by
  // EPA; North Carolina's own Core Manual is sold in print by the NC State
  // Pesticide Safety Education Program and has no public PDF to link.
  requireCitations: true, // the bank validator rejects a question without a page
  manuals: {
    default: {
      title: 'National Pesticide Applicator Certification Core Manual',
      cite: 'Core Manual', // prefix on the "p. 14" citation
      short: 'Core',       // prefix on a chapter label, "Core ch. 3"
      url: 'https://www.epa.gov/system/files/documents/2022-09/national-pesticide-applicator-cert-core-manual-2014.pdf',
      pages: MANUAL_PAGES,
    },
    // The aerial manual's own chapters 1-6; a question there carries
    // `"manual": "aerial"`, which both picks this manual for its citation and
    // keeps its chapter 1 distinct from the core manual's chapter 1.
    aerial: {
      title: "National Aerial Applicator's Manual",
      cite: 'Aerial Manual',
      short: 'Aerial', // chapter labels: "Aerial ch. 3 Preventing Pesticide Drift"
      url: 'https://www.epa.gov/system/files/documents/2023-11/national-aerial-applicator-manual-2014.pdf',
      pages: AERIAL_PAGES,
    },
  },

  // Mock exams: how many questions the real test asks, drawn from which
  // sections. The core manual's sections feed the two core-material exams and
  // the aerial manual's feed Aerial Methods, so an aerial question never turns
  // up in a Core mock exam and vice versa.
  exams: [
    { key: 'core', name: 'Commercial Core', sections: CORE_SECTIONS, count: 100 },
    { key: 'private', name: 'Private Applicator', sections: CORE_SECTIONS, count: 50 },
    { key: 'aerial', name: 'Aerial Methods', sections: AERIAL_SECTIONS, count: 50 },
  ],

  // Exams -> the manual sections that cover them. The Settings picker offers
  // these, grouped by testGroups.
  tests: [
    { key: 'core', group: 'cert', name: 'Commercial Core', note: 'the 100-question first exam for every commercial applicator license', sections: CORE_SECTIONS },
    { key: 'private', group: 'cert', name: 'Private Applicator', note: 'the 50-question exam for producing an agricultural commodity on your own land', sections: CORE_SECTIONS },
    { key: 'aerial', group: 'methods', name: 'Aerial Methods', note: 'the extra exam every aerial applicator takes on top of Core and a category', sections: AERIAL_SECTIONS },
  ],
  testGroups: [
    ['cert', 'Certification exams'],
    ['methods', 'Methods exams'],
  ],

  // Prose that names the exam, injected as HTML into the matching views.
  homeSubtitle: `${QUESTION_BANK.length} questions from the national pesticide applicator core and aerial manuals`,
  disclaimerHTML: `Questions were extracted from the national
    <a href="https://www.epa.gov/system/files/documents/2022-09/national-pesticide-applicator-cert-core-manual-2014.pdf"
       target="_blank" rel="noopener">core</a> and
    <a href="https://www.epa.gov/system/files/documents/2023-11/national-aerial-applicator-manual-2014.pdf"
       target="_blank" rel="noopener">aerial</a> applicator manuals;
    accuracy is not guaranteed. Each question links to its manual page, so verify
    anything important against the source. North Carolina's exams are written from the
    NC manuals, which cover the same material plus NC law, and the actual
    exam questions are not public; no claim is made that these match or resemble them.
    All progress is stored locally in your browser and never sent to a server.`,
  aboutIntroHTML: `<p>NC Pesticide Trainer is a free, open-source study tool for the North Carolina
    pesticide applicator certification exams. Its ${QUESTION_BANK.length} questions were written from the
    <a href="https://www.epa.gov/system/files/documents/2022-09/national-pesticide-applicator-cert-core-manual-2014.pdf"
       target="_blank" rel="noopener">National Pesticide Applicator Certification
    Core Manual</a>, which covers the Core exam, and the
    <a href="https://www.epa.gov/system/files/documents/2023-11/national-aerial-applicator-manual-2014.pdf"
       target="_blank" rel="noopener">National Aerial Applicator's Manual</a>, which
    covers the Aerial Methods exam. Every question cites the manual page it came
    from. The citation is a link, so it opens the PDF at that page and you can check
    anything important against the source.</p>`,
  aboutCaveatHTML: `<p><strong>Every question here comes from a national manual, not from a North
    Carolina one.</strong> The national manuals are published by the NASDA Research Foundation,
    hosted by EPA, and free to read, which is why this bank can cite them page by page.
    North Carolina's own study texts, the NC Pesticide Applicator Certification Core Manual
    and the category manuals, are sold in print by the
    <a href="https://go.ncsu.edu/psep" target="_blank" rel="noopener">NC State Pesticide Safety
    Education Program</a>. They are adapted from these national manuals and add North
    Carolina's pesticide law and rules, which this bank does not cover yet; questions
    sourced from them are planned, and each will cite its own manual the same way.</p>
    <p>Questions were extracted from the manuals by a language model and reviewed for
    accuracy, but mistakes are possible and accuracy is not guaranteed. The
    actual exam questions are not public, and no claim is made that these match
    or resemble them.</p>`,
};
