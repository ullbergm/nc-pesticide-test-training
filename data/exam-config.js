/* Everything that names the exam this trainer studies for: the tests and the
   manual chapters behind them, the pass mark, the manual PDF links, and the
   prose that mentions the pesticide exams. The engine under js/ reads only
   this file and data/questions.js, so a trainer for a different exam is built
   by replacing the data/ directory and the page shell (index.html,
   manifest.webmanifest, icons, CNAME); js/ carries no knowledge of any
   particular exam.
   Loads after data/questions.js and data/manual-pages.js and may read both. */
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
      url: 'https://www.epa.gov/system/files/documents/2022-09/national-pesticide-applicator-cert-core-manual-2014.pdf',
      pages: MANUAL_PAGES,
    },
  },

  // Mock exams: how many questions the real test asks, drawn from which
  // chapters. Both NC exams draw on the whole core material, so both lists
  // should grow to [1..11] as the bank's chapter coverage grows; a chapter
  // listed here without questions in the bank hides the exam from the app.
  exams: [
    { key: 'core', name: 'Commercial Core', sections: [1], count: 100 },
    { key: 'private', name: 'Private Applicator', sections: [1], count: 50 },
  ],

  // Certification exams -> the manual chapters that cover them.
  // The Settings picker offers these, grouped by testGroups. Same deal as
  // exams: extend the section lists as chapters are authored.
  tests: [
    { key: 'core', group: 'cert', name: 'Commercial Core', note: 'the 100-question first exam for every commercial applicator license', sections: [1] },
    { key: 'private', group: 'cert', name: 'Private Applicator', note: 'the 50-question exam for producing an agricultural commodity on your own land', sections: [1] },
  ],
  testGroups: [
    ['cert', 'Certification exams'],
  ],

  // Prose that names the exam, injected as HTML into the matching views.
  homeSubtitle: `${QUESTION_BANK.length} questions from the National Pesticide Applicator Certification Core Manual`,
  disclaimerHTML: `Questions were extracted from the
    <a href="https://www.epa.gov/system/files/documents/2022-09/national-pesticide-applicator-cert-core-manual-2014.pdf"
       target="_blank" rel="noopener">National Pesticide Applicator Certification Core Manual</a>;
    accuracy is not guaranteed. Each question links to its manual page, so verify
    anything important against the source. North Carolina's exams are written from the
    NC Core Manual, which covers the same core material plus NC law, and the actual
    exam questions are not public; no claim is made that these match or resemble them.
    All progress is stored locally in your browser and never sent to a server.`,
  aboutIntroHTML: `<p>NC Pesticide Trainer is a free, open-source study tool for the North Carolina
    pesticide applicator certification exams. Its ${QUESTION_BANK.length} questions were written from the
    <a href="https://www.epa.gov/system/files/documents/2022-09/national-pesticide-applicator-cert-core-manual-2014.pdf"
       target="_blank" rel="noopener">National Pesticide Applicator Certification
    Core Manual</a>, and every question cites the manual page it came from. The
    citation is a link, so it opens the PDF at that page and you can check
    anything important against the source.</p>`,
  aboutCaveatHTML: `<p>Questions were extracted from the manual by a language model and reviewed for
    accuracy, but mistakes are possible and accuracy is not guaranteed. North
    Carolina's official study text is the NC Pesticide Applicator Certification
    Core Manual, sold by the NC State Pesticide Safety Education Program; it is
    adapted from the national manual these questions cite and adds North
    Carolina's pesticide law and rules, which this bank does not yet cover. The
    actual exam questions are not public, and no claim is made that these match
    or resemble them.</p>`,
};
