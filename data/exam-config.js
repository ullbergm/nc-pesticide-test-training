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

// The category exams. Core licenses nobody on its own: a commercial applicator
// passes Core and then one of these per category they want to work in, and an
// aerial applicator adds Aerial Methods on top. Each is written from its own
// North Carolina category manual, which is sold in print and has no public PDF
// to cite, so none of them has questions yet.
//
// They are listed anyway, with the manual key their questions will carry, so
// the app can show what the bank does not cover yet and the gap is visible
// instead of implied. `sectionsOf` gives an empty list until the first question
// arrives, and the exam then fills in by itself. Add a `manuals` entry beside
// the key when authoring one, so its citations can name the book.
const CATEGORIES = [
  ['cat-a', 'A', 'Aquatic Pest Control'],
  ['cat-b', 'B', 'Public Health'],
  ['cat-g', 'G', 'Forestry'],
  ['cat-h', 'H', 'Right-of-Way'],
  ['cat-i', 'I', 'Regulatory'],
  ['cat-k', 'K', 'Agricultural Pest Animal - Livestock'],
  ['cat-kpu', 'K(PU)', 'Agricultural Pest Animal - Poultry'],
  ['cat-ksa', 'K(SA)', 'Agricultural Pest Animal - Small Animal'],
  ['cat-l', 'L', 'Ornamental & Turf'],
  ['cat-m', 'M', 'Seed Treatment'],
  ['cat-n', 'N', 'Demonstration & Research'],
  ['cat-o', 'O', 'Agricultural Pest Plant'],
  ['cat-s', 'S', 'Commercial Soil Fumigation'],
  ['cat-t', 'T', 'Wood Treatment'],
];
const CATEGORY_EXAMS = CATEGORIES.map(([key, code, name]) => ({
  key,
  name: `${name} (${code})`,
  sections: sectionsOf(key),
  count: 50, // every NC category exam is 50 questions at 70%
}));

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
    ...CATEGORY_EXAMS,
  ],

  // Exams -> the manual sections that cover them. The Settings picker offers
  // these, grouped by testGroups.
  tests: [
    { key: 'core', group: 'cert', name: 'Commercial Core', note: 'the 100-question first exam for every commercial applicator license', sections: CORE_SECTIONS },
    { key: 'private', group: 'cert', name: 'Private Applicator', note: 'the 50-question exam for producing an agricultural commodity on your own land', sections: CORE_SECTIONS },
    { key: 'aerial', group: 'methods', name: 'Aerial Methods', note: 'the extra exam every aerial applicator takes on top of Core and a category', sections: AERIAL_SECTIONS },
    ...CATEGORY_EXAMS.map(e => ({
      key: e.key,
      group: 'category',
      name: e.name,
      note: 'one 50-question category exam on top of Core',
      sections: e.sections,
    })),
  ],
  testGroups: [
    ['cert', 'Certification exams'],
    ['methods', 'Methods exams'],
    ['category', 'Category exams'],
  ],

  // The licenses these exams lead to, shown as a reference table in About.
  // NCDA&CS issues the licenses and is the authority; this is a summary, so
  // `source` is linked next to it and every fee or term here should be
  // rechecked against that page when it changes. Categories are listed by
  // letter and spelled out in `categories` below. Rendering is generic: any
  // exam config that omits `licenses` simply shows no such section.
  licenses: {
    source: 'https://www.ncagr.gov/divisions/structural-pest-control-and-pesticides/pesticide/licensing-and-certification/licenses',
    sourceName: 'NCDA&CS Pesticide Licenses',
    intro: `Every commercial license below is earned by passing the 100-question Core exam
      plus a 50-question exam in each category you want, at 70% each. Aerial licenses add
      the Aerial Methods exam on top of that.`,
    groups: [
      {
        name: 'Ground application',
        items: [
          { code: '026', name: 'Commercial Ground Applicator', who: 'applying pesticides on someone else\'s property for compensation, by any means other than aircraft', exams: 'Core + category', term: '5-year certification, $75 a year' },
          { code: '031', name: 'Federal/State Public Operator (Ground)', who: 'federal and state employees applying pesticides', exams: 'Core + category', term: '5-year certification, no fee' },
          { code: '032', name: 'County/City Public Operator (Ground)', who: 'county and municipal employees applying pesticides', exams: 'Core + category', term: '5-year certification, no fee' },
          { code: '033', name: 'Public Utility Ground Applicator', who: 'utility company employees treating rights-of-way', exams: 'Core + category', term: '5-year certification, $75 a year' },
        ],
      },
      {
        name: 'Aerial application',
        items: [
          { code: '027', name: 'Pilot - Aerial Pesticide Applicator', who: 'applying pesticides from an aircraft; needs FAA credentials, 1 year and 125 hours of aerial agricultural experience, and a link to an aerial contractor', exams: 'Core + category + Aerial Methods', term: '2-year certification, $75 a year' },
          { code: '028', name: 'Aerial Contractor', who: 'overseeing aerial applications; submits an FAA 137 certificate and meets the pilot requirements', exams: 'Core + category + Aerial Methods', term: '2-year certification, $75 a year' },
          { code: '029', name: 'Apprentice - Aerial Pesticide Applicator', who: 'applying pesticides from an aircraft without the year and 125 hours a pilot license needs', exams: 'Core + category + Aerial Methods', term: '2-year certification, $75 a year' },
          { code: '034', name: 'Federal/State Public Operator (Aerial)', who: 'federal and state employees applying pesticides by air', exams: 'Core + category + Aerial Methods', term: '2-year certification, no fee' },
          { code: '035', name: 'County/City Public Operator (Aerial)', who: 'county and municipal employees applying pesticides by air', exams: 'Core + category + Aerial Methods', term: '2-year certification, no fee' },
          { code: '036', name: 'Public Utility Aerial Applicator', who: 'utility employees treating rights-of-way by air, with 1 year and 125 hours of aerial agricultural experience', exams: 'Core + category + Aerial Methods', term: '2-year certification, $75 a year' },
        ],
      },
      {
        name: 'Advice, sales, and private use',
        items: [
          { code: '030', name: 'Pesticide Consultant', who: 'selling pest control advice; does not permit applications, and needs a degree with at least 30 hours of coursework in the category', exams: 'Core + category', term: '5-year certification, $75 a year' },
          { code: '037', name: 'Pesticide Dealer', who: 'making restricted-use pesticides available to certified users; one license per location', exams: 'Dealer exam (no Core)', term: '5-year certification, $75 a year' },
          { code: '038', name: 'Private Pesticide Applicator', who: 'using restricted-use pesticides to produce an agricultural commodity on land you own or rent', exams: 'Private Applicator exam', term: '3-year certification, $10 every three years' },
        ],
      },
    ],
    // The category exams a license is endorsed for. Only Core, Private, and
    // Aerial Methods are in the question bank; the rest are listed so the
    // reader knows what else the license they want will ask of them.
    categories: [
      ['A', 'Aquatic Pest Control'],
      ['B', 'Public Health'],
      ['G', 'Forestry'],
      ['H', 'Right-of-Way'],
      ['I', 'Regulatory (government employees)'],
      ['K', 'Agricultural Pest Animal - Livestock'],
      ['K(PU)', 'Agricultural Pest Animal - Poultry'],
      ['K(SA)', 'Agricultural Pest Animal - Small Animal'],
      ['L', 'Ornamental & Turf'],
      ['M', 'Seed Treatment'],
      ['N', 'Demonstration & Research'],
      ['O', 'Agricultural Pest Plant'],
      ['P', 'Aerial applications only'],
      ['S', 'Commercial Soil Fumigation'],
      ['T', 'Wood Treatment'],
      ['Z(SF)', 'Soil Fumigation (private applicators)'],
      ['Z(CF)', 'Commodity Fumigation (private applicators)'],
    ],
  },

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
