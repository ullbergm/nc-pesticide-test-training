/* On-screen calculator, offered on the questions that ask for arithmetic.
 *
 * North Carolina allows a nonprogrammable calculator at the exam site, so the
 * arithmetic in a calibration or dosage question is fair game and doing it in
 * your head is not what is being tested. This is that calculator: the four
 * functions, a sign key, a backspace, and one memory, which is what a handheld
 * allows and no more. Nothing stores a formula, because the exam room would
 * not allow one that did.
 *
 * It runs on immediate execution, like the handheld it stands in for: an
 * operator key finishes the pending operation and shows the running total, so
 * 40 x 2.5 / 100 = reads out at every step. Chained equals repeats the last
 * operation, which is how those keypads behave.
 *
 * Self-contained: the module owns its state and its markup, reads nothing, and
 * tells the caller only when it opens or closes (so the preference can be
 * remembered). js/app.js mounts one inside the quiz screen.
 */
const Calculator = (() => {
  const DIGITS = 12;             // what a pocket calculator shows before it gives up

  // Keypad layout, row by row: [label, kind, value, aria-label]. `kind` is
  // what the key does; the label is what is printed on it.
  const KEYS = [
    [['MC', 'mem', 'clear', 'memory clear'], ['MR', 'mem', 'recall', 'memory recall'],
      ['M+', 'mem', 'add', 'memory add'], ['AC', 'clear', 'all', 'all clear']],
    [['7', 'digit', '7'], ['8', 'digit', '8'], ['9', 'digit', '9'],
      ['÷', 'op', '/', 'divide']],
    [['4', 'digit', '4'], ['5', 'digit', '5'], ['6', 'digit', '6'],
      ['×', 'op', '*', 'multiply']],
    [['1', 'digit', '1'], ['2', 'digit', '2'], ['3', 'digit', '3'],
      ['−', 'op', '-', 'minus']],
    [['0', 'digit', '0'], ['.', 'dot', '.', 'decimal point'],
      ['±', 'sign', '-', 'change sign'], ['+', 'op', '+', 'plus']],
    [['←', 'back', '', 'backspace'], ['C', 'clear', 'entry', 'clear entry'],
      ['=', 'equals', '=', 'equals']],
  ];

  // Keyboard equivalents, live only while the focus is inside the calculator.
  const FROM_KEY = {
    '/': ['op', '/'], '*': ['op', '*'], x: ['op', '*'], X: ['op', '*'],
    '-': ['op', '-'], '+': ['op', '+'],
    '=': ['equals', '='], Enter: ['equals', '='],
    '.': ['dot', '.'], ',': ['dot', '.'],
    Backspace: ['back', ''], Delete: ['clear', 'entry'], Escape: ['clear', 'all'],
  };

  let entry = '0';        // what is being typed, as text, so "1." and "1.0" survive
  let acc = null;         // the running total a pending operator is waiting on
  let pending = null;     // the operator itself
  let repeat = null;      // {op, rhs} so a second = repeats the last operation
  let fresh = true;       // the display holds a result, so a digit starts over
  let memory = 0;
  let onToggle = null;

  const NUM = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b, '/': (a, b) => a / b };

  // A result back to text: full precision where it fits, and a plain decimal
  // rather than exponent notation, which no pocket calculator prints.
  function show(x) {
    if (!Number.isFinite(x)) return 'Error';
    const rounded = Number(x.toPrecision(DIGITS));
    const text = String(rounded);
    if (!/e/i.test(text)) return text;
    return rounded.toFixed(Math.max(0, DIGITS - 1 - Math.floor(Math.log10(Math.abs(rounded)))))
      .replace(/\.?0+$/, '');
  }

  const value = () => (entry === 'Error' ? NaN : Number(entry));

  function press(kind, val) {
    if (entry === 'Error' && kind !== 'clear') return;
    switch (kind) {
      case 'digit':
        entry = fresh || entry === '0' ? val : (entry.replace('-', '').length < DIGITS ? entry + val : entry);
        if (fresh) fresh = false;
        break;
      case 'dot':
        if (fresh) { entry = '0.'; fresh = false; }
        else if (!entry.includes('.')) entry += '.';
        break;
      case 'sign':
        entry = entry.startsWith('-') ? entry.slice(1) : '-' + entry;
        break;
      case 'back':
        if (fresh) break;
        entry = entry.length > 1 && !(entry.length === 2 && entry.startsWith('-'))
          ? entry.slice(0, -1) : '0';
        break;
      case 'op': {
        // An operator finishes what is pending, so the display shows the
        // running total before the next number is typed.
        const x = value();
        acc = pending !== null && !fresh ? NUM[pending](acc, x) : (acc === null || !fresh ? x : acc);
        entry = show(acc);
        pending = val;
        repeat = null;
        fresh = true;
        break;
      }
      case 'equals': {
        if (pending !== null) {
          repeat = { op: pending, rhs: value() };
          acc = NUM[pending](acc, repeat.rhs);
          pending = null;
        } else if (repeat) {
          acc = NUM[repeat.op](value(), repeat.rhs);
        } else {
          acc = value();
        }
        entry = show(acc);
        fresh = true;
        break;
      }
      case 'mem':
        if (val === 'clear') memory = 0;
        else if (val === 'recall') { entry = show(memory); fresh = true; }
        else { memory += value(); fresh = true; }
        break;
      case 'clear':
        entry = '0';
        fresh = true;
        if (val === 'all') { acc = null; pending = null; repeat = null; }
        break;
    }
    paint();
  }

  function paint() {
    const el = document.getElementById('calcout');
    if (el) el.textContent = entry;
    const m = document.getElementById('calcmem');
    if (m) m.hidden = memory === 0;
  }

  /* Fresh state for a fresh problem: every mount starts from zero, memory and
     all, the way picking a calculator up off the desk does. */
  function reset() {
    entry = '0';
    acc = null;
    pending = null;
    repeat = null;
    fresh = true;
    memory = 0;
  }

  const key = ([label, kind, val, aria]) =>
    `<button type="button" class="calckey k-${kind}" data-kind="${kind}" data-val="${val}"
      ${aria ? `aria-label="${aria}"` : ''}>${label}</button>`;

  /* The markup, closed or open as asked. `open` is the caller's remembered
     preference: having opened the calculator once, a reader should not have to
     open it again on the next question that offers one. */
  function html(open) {
    return `<div class="calcwrap">
      <button type="button" id="calctoggle" class="calctoggle" aria-expanded="${open}"
        aria-controls="calc">${open ? 'Hide' : 'Show'} calculator</button>
      <div id="calc" class="calc" ${open ? '' : 'hidden'}>
        <div class="calcdisplay">
          <span id="calcmem" class="calcmem" aria-label="memory holds a value"
            ${memory === 0 ? 'hidden' : ''}>M</span>
          <output id="calcout" aria-live="polite" aria-label="calculator display">${entry}</output>
        </div>
        <div class="calckeys">${KEYS.map(row => row.map(key).join('')).join('')}</div>
        <p class="hint">A nonprogrammable calculator like this one is allowed at the exam.</p>
      </div>
    </div>`;
  }

  /* Wire the markup up inside `root`. Keyboard input is deliberately confined
     to the calculator: the quiz screen binds 1-4 to the answers, so a digit
     may only mean a digit while the focus is inside these keys, which is what
     `Calculator.owns()` lets the app's own handler check. */
  function wire(root, notify) {
    onToggle = notify;
    const box = root.querySelector('#calc');
    const toggle = root.querySelector('#calctoggle');
    if (!box || !toggle) return;
    toggle.addEventListener('click', () => {
      const open = box.hidden;
      box.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = `${open ? 'Hide' : 'Show'} calculator`;
      if (open) box.querySelector('.calckey').focus();
      if (typeof onToggle === 'function') onToggle(open);
    });
    box.querySelectorAll('.calckey').forEach(b =>
      b.addEventListener('click', () => press(b.dataset.kind, b.dataset.val)));
    box.addEventListener('keydown', e => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const mapped = /^[0-9]$/.test(e.key) ? ['digit', e.key] : FROM_KEY[e.key];
      if (!mapped) return;
      e.preventDefault();
      e.stopPropagation();
      press(mapped[0], mapped[1]);
    });
  }

  // True while the event came from inside the calculator, so the quiz screen's
  // own shortcuts can stand aside.
  const owns = target => !!(target && target.closest && target.closest('#calc'));

  return { html, wire, reset, owns, press, display: () => entry };
})();
