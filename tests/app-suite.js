/* App-specific browser tests, run after the synced engine suite: calculation
 * drills and the on-screen calculator, the #drill route, and the license
 * page. Runs through TestSuite so results land in the same RESULTS:: line. */
TestSuite.run(() => {
  const { t, q, qa, nav } = TestSuite;

  // --- calculation drills ---
  // A drill is an ordinary card whose numbers are drawn when it is about to be
  // shown, so what the app has to get right is holding one draw still: Undo
  // re-asks the problem that was on screen, and a card that comes back later in
  // the session comes back as a new problem rather than the one just worked
  // through. The seed is read off the session mirror, since two draws can
  // coincide on their numbers but never on their seed.
  const mathCard = QUESTION_BANK.find(x => x.drill);
  if (mathCard) {
    const seedOf = () => (JSON.parse(sessionStorage.getItem(EXAM_CONFIG.sessionKey))
      || { draws: {} }).draws[mathCard.id];
    // One card due and no new cards allowed, so the drill is the whole queue.
    Store.importJSON(JSON.stringify({
      cards: {
        [mathCard.id]: { stability: 1, difficulty: 5, lastReview: 1, due: 1, reps: 1,
                      lapses: 0, state: 'review', wrong: 0, right: 1, streak: 2 },
      },
      settings: { newPerDay: 0 },
    }));
    nav('study');
    t('a drill is scheduled like any other card', q('.qtext').textContent === mathCard.question);
    t('a drill offers four numeric choices',
      qa('.choice').length === 4 && qa('.choice').every(b => /\d/.test(b.textContent)));
    const asked = q('.qtext').textContent;
    const seed = seedOf();
    t('the drawn numbers are kept with the session', typeof seed === 'number');

    // --- the calculator the exam site allows ---
    t('a drill offers a calculator', !!q('#calctoggle') && !!q('#calc'));
    const calcOpen = () => !q('#calc').hidden;
    const wasOpen = calcOpen();
    q('#calctoggle').click();
    t('the calculator toggles', calcOpen() === !wasOpen);
    t('the calculator remembers being opened', Store.load().settings.calcOpen === calcOpen());
    if (!calcOpen()) q('#calctoggle').click(); // work the keypad with it open
    const tap = label => qa('.calckey').find(b => b.textContent === label).click();
    ['4', '0', '×', '2', '.', '5', '='].forEach(tap);
    t('the keypad computes in the order it is pressed', q('#calcout').textContent === '100');
    ['÷', '1', '0', '0', '='].forEach(tap);
    t('an operator chains onto the running total', q('#calcout').textContent === '1');
    tap('M+');
    t('memory shows once something is in it', !q('#calcmem').hidden);
    ['AC'].forEach(tap);
    t('all clear resets the display', q('#calcout').textContent === '0');
    tap('MR');
    t('memory recalls what was stored', q('#calcout').textContent === '1');
    ['AC', '2', '+', '3', '=', '='].forEach(tap);
    t('a second equals repeats the last operation', q('#calcout').textContent === '8');
    ['AC', '8', '÷', '0', '='].forEach(tap);
    t('dividing by zero says Error rather than a number', q('#calcout').textContent === 'Error');
    tap('AC');
    t('all clear recovers from Error', q('#calcout').textContent === '0');
    // A digit typed at the keypad is a digit, not answer number 3.
    qa('.calckey').find(b => b.textContent === '7').focus();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '3', bubbles: true }));
    t('typing at the calculator does not answer the question', !!q('.choice:not(:disabled)'));

    qa('.choice').find(b => Number(b.dataset.i) !== mathCard.answer).click();
    // --- the feedback says what you did, not only what is right ---
    t('a wrong drill choice names the mistake behind it', !!q('.explain .slip')
      && /^You .+\.$/.test(q('.explain .slip').textContent));
    q('#undo').click();
    t('undo re-asks the same drill problem',
      q('.qtext').textContent === asked && seedOf() === seed);
    qa('.choice').find(b => Number(b.dataset.i) !== mathCard.answer).click();
    q('#next').click();
    t('a missed drill comes back as a new problem', seedOf() !== seed);
    t('the requeued drill is still the same card', q('.qtext').textContent === mathCard.question);
  }

  // --- the #drill route ---
  // A linkable way to drill the calculations on purpose. It is not a nav tab
  // and it must not touch the schedule, so what is asserted is that it renders
  // a drill and that answering one leaves the review log alone.
  if (mathCard) {
    const logBefore = Store.load().log.length;
    location.hash = 'drill';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    const drilled = QUESTION_BANK.find(x => x.question === (q('.qtext') || {}).textContent);
    t('#drill renders a calculation drill', !!drilled && drilled.drill === true);
    t('#drill offers the calculator', !!q('#calc'));
    t('#drill is not a nav tab', !q('nav a[data-view="drill"]'));
    qa('.choice').find(b => Number(b.dataset.i) === drilled.answer).click();
    t('#drill does not schedule reviews',
      Store.load().log.length === logBefore && !q('.grades button'));
    t('#drill still counts the answer', Store.load().cards[drilled.id].right > 0);
    q('#next').click();
    t('#drill moves on to the next drill', !!q('.qtext'));
  }

  // --- license page ---
  // The lookup itself needs the NC search, so what is driven here is the half
  // that does not: two cached licenses render as two cards, each credit
  // bucket gets the target AG-714 sets for it, and Forget removes one card
  // without disturbing the other. The cache is seeded directly, which is the
  // same shape License.saved() reads.
  {
    const seeded = [
      { input: { number: '87690', typeId: '026' },
        record: { name: 'Test Applicator', number: '87690', licenseType: 'Commercial',
          licenseTypeId: '026', county: 'WAKE', status: 'Active', expire: '12/31/2026',
          recertBy: '6/30/2028', creditTotals: 'L [4.0] A [1.0] E [0]', courses: [] },
        fetchedAt: Date.now() },
      { input: { number: '11111', typeId: '027' },
        record: { name: 'Test Pilot', number: '11111', licenseType: 'Aerial Pilot',
          licenseTypeId: '027', county: 'PITT', status: 'Active', expire: '12/31/2026',
          recertBy: '6/30/2027', creditTotals: 'P [1.0] G [3.0]', courses: [] },
        fetchedAt: Date.now() },
    ];
    localStorage.setItem('ncagr-licenses', JSON.stringify({ v: 1, list: seeded }));
    nav('license');
    t('license page renders every saved license', qa('.liccard').length === 2);
    t('the add form is offered beside the saved cards', !!q('#liclookup') && !!q('#licnum'));

    const creditNums = card =>
      [...card.querySelectorAll('.credit .crnum')]
        .map(e => e.textContent.replace(/\s+/g, ' ').trim());
    const first = qa('.liccard')[0];
    const nums = creditNums(first);
    // Ornamental & Turf is the highest requirement held, so it is earned in
    // full at ten and Aquatic drops to three; Core carries no target at all.
    t('the highest category is shown against its full requirement',
      nums.some(s => s === '4 of 10'));
    t('an additional category is shown against three', nums.some(s => s === '1 of 3'));
    t('the Core bucket is shown without a target', nums.some(s => s === '0'));
    t('a credit bucket with a target draws a meter',
      first.querySelectorAll('.credit .crbar').length === 2);
    t('the shortfall for the cycle is totalled',
      /8 short/.test(first.querySelector('.crsum').textContent));

    // The aerial license renews under different rules from the ground one, and
    // its card is scored on its own rather than on the first card's letters.
    const aerial = qa('.liccard')[1];
    const anums = creditNums(aerial);
    t('an aerial first category is scored at three, not its ground requirement',
      anums.some(s => s === '3 of 3'));
    t('the aerial methods hour is scored at one', anums.some(s => s === '1 of 1'));
    t('a fully earned cycle says so', !!aerial.querySelector('.crsum.met'));
    // .done is the session-complete screen's class, which centers and pads
    // whatever carries it; a credit row must not pick it up.
    t('a met credit row does not borrow the session-complete style',
      !aerial.querySelector('.credit.done'));

    qa('[data-licforget]')[0].click();
    t('forgetting one license leaves the other on the page', qa('.liccard').length === 1);
    t('the card left is the one that was not forgotten',
      q('.licname').textContent === 'Test Pilot');
    qa('[data-licforget]')[0].click();
    t('forgetting the last license empties the list', qa('.liccard').length === 0);
    t('the form is still there with nothing saved', !!q('#liclookup'));
  }
});
