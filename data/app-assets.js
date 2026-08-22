/* The app's own files beyond the engine core, loaded into sw.js via
   importScripts and spread into its CORE precache list. Every entry must
   exist in the deploy (tests/validate-bank.js enforces it). */
const APP_ASSETS = [
  'js/problems.js',
  'js/calculator.js',
  'js/license.js',
  'js/license-view.js',
  'data/problems.js',
  'data/manual-pages.js',
  'data/aerial-pages.js',
  'data/law-pages.js',
  'data/rules-pages.js',
  'data/ncsu-anchors.js',
  'data/recert-credits.js',
];
