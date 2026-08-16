/* Maps the headings of NC State Extension AG-714 to the anchors the
   publication puts on them, so a citation can deep link to the heading the
   fact is printed under.

   The other page maps in this directory translate a printed page number into
   a physical PDF page for a "#page=" link. This source is a web page rather
   than a PDF: it has no pages, its parts are named rather than numbered, and
   it is deep linked by the id on the heading. So the same map shape carries
   heading -> anchor, and the manual's `fragment` in data/exam-config.js is
   empty rather than "page=", which makes the citation link
   ".../pesticide-applicator-certification-and-licensing#section_heading_21033".

   Written by hand, not generated: the anchors are database ids assigned by
   the Extension publishing system, so there is no local copy to derive them
   from. Recheck them if the publication is revised; a heading that has been
   renumbered will still link, but to the wrong part of the page.
   Last checked against the November 6, 2025 revision. */
const NCSU_ANCHORS = {
  'Classification of Pesticides': 'section_heading_13860',
  'Certification (Training and Testing)': 'section_heading_13861',
  'Private Pesticide Applicators': 'section_heading_13862',
  'Commercial Pesticide Applicators': 'section_heading_21028',
  'License Types': 'section_heading_21030',
  'Aerial Applicator Licensing': 'section_heading_21031',
  'Noncertified Applicator (nCA)': 'section_heading_21032',
  Reciprocity: 'section_heading_21033',
  'Commercial Applicator Certification and Licensing Summary': 'section_heading_21034',
  'Recertification Course Approval': 'section_heading_21035',
};
