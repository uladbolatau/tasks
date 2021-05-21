/*
 * Key settings
 *  Required:
 *    - code
 *    - symbol
 *
 *  Optional
 *    - altSymbol
 *      If key has additinal value
 *    - isColored
 *      If key should be colored
 *    - isShowMore
 *      If additional value should be shown
 *    - customC1lasses
 *      Array of additional classes
 */

const KEYBOARD_LAYOUT = [
  {
    code: 'Backquote',
    symbol: '`',
    altSymbol: '~',
    isColored: true,
    isShowMore: true,
  },
  {
    code: 'Digit1',
    symbol: '1',
    altSymbol: '!',
    isShowMore: true,
  },
  {
    code: 'Digit2',
    symbol: '2',
    altSymbol: '@',
    isShowMore: true,
  },
  {
    code: 'Digit3',
    symbol: '3',
    altSymbol: '#',
    isShowMore: true,
  },
  {
    code: 'Digit4',
    symbol: '4',
    altSymbol: '$',
    isShowMore: true,
  },
  {
    code: 'Digit5',
    symbol: '5',
    altSymbol: '%',
    isShowMore: true,
  },
  {
    code: 'Digit6',
    symbol: '6',
    altSymbol: '^',
    isShowMore: true,
  },
  {
    code: 'Digit7',
    symbol: '7',
    altSymbol: '&',
    isShowMore: true,
  },
  {
    code: 'Digit8',
    symbol: '8',
    altSymbol: '*',
    isShowMore: true,
  },
  {
    code: 'Digit9',
    symbol: '9',
    altSymbol: '(',
    isShowMore: true,
  },
  {
    code: 'Digit0',
    symbol: '0',
    altSymbol: ')',
    isShowMore: true,
  },
  {
    code: 'Minus',
    symbol: '-',
    altSymbol: '_',
    isShowMore: true,
  },
  {
    code: 'Equal',
    symbol: '=',
    altSymbol: '+',
    isShowMore: true,
  },
  {
    code: 'Backspace',
    symbol: 'Backspace',
    isColored: true,
    customClasses: ['backspace', 'to-upper-case'],
  },

  {
    code: 'Tab',
    symbol: 'Tab',
    isColored: true,
    customClasses: ['to-upper-case'],
  },
  {
    code: 'KeyQ',
    symbol: 'q',
  },
  {
    code: 'KeyW',
    symbol: 'w',
  },
  {
    code: 'KeyE',
    symbol: 'e',
  },
  {
    code: 'KeyR',
    symbol: 'r',
  },
  {
    code: 'KeyT',
    symbol: 't',
  },
  {
    code: 'KeyY',
    symbol: 'y',
  },
  {
    code: 'KeyU',
    symbol: 'u',
  },
  {
    code: 'KeyI',
    symbol: 'i',
  },
  {
    code: 'KeyO',
    symbol: 'o',
  },
  {
    code: 'KeyP',
    symbol: 'p',
  },
  {
    code: 'BracketLeft',
    symbol: '[',
    altSymbol: '{',
    isShowMore: true,
  },
  {
    code: 'BracketRight',
    symbol: ']',
    altSymbol: '}',
    isShowMore: true,
  },
  {
    code: 'Backslash',
    symbol: '\\',
    altSymbol: '|',
    isShowMore: true,
  },
  {
    code: 'Delete',
    symbol: 'Delete',
    isColored: true,
    customClasses: ['to-upper-case'],
  },

  {
    code: 'CapsLock',
    symbol: 'Caps Lock',
    isColored: true,
    customClasses: ['caps-lock', 'to-upper-case'],
  },
  {
    code: 'KeyA',
    symbol: 'a',
  },
  {
    code: 'KeyS',
    symbol: 's',
  },
  {
    code: 'KeyD',
    symbol: 'd',
  },
  {
    code: 'KeyF',
    symbol: 'f',
  },
  {
    code: 'KeyG',
    symbol: 'g',
  },
  {
    code: 'KeyH',
    symbol: 'h',
  },
  {
    code: 'KeyJ',
    symbol: 'j',
  },
  {
    code: 'KeyK',
    symbol: 'k',
  },
  {
    code: 'KeyL',
    symbol: 'l',
  },
  {
    code: 'Semicolon',
    symbol: ';',
    altSymbol: ':',
    isShowMore: true,
  },
  {
    code: 'Quote',
    symbol: "'",
    altSymbol: '"',
    isShowMore: true,
  },
  {
    code: 'Enter',
    symbol: 'Enter',
    isColored: true,
    customClasses: ['enter', 'to-upper-case'],
  },
  {
    code: 'ShiftLeft',
    symbol: 'Shift',
    isColored: true,
    isLanguageSwitch: true,
    customClasses: ['left-shift', 'to-upper-case'],
  },
  {
    code: 'KeyZ',
    symbol: 'z',
  },
  {
    code: 'KeyX',
    symbol: 'x',
  },
  {
    code: 'KeyC',
    symbol: 'c',
  },
  {
    code: 'KeyV',
    symbol: 'v',
  },
  {
    code: 'KeyB',
    symbol: 'b',
  },
  {
    code: 'KeyN',
    symbol: 'n',
  },
  {
    code: 'KeyM',
    symbol: 'm',
  },
  {
    code: 'Comma',
    symbol: ',',
    altSymbol: '<',
    isShowMore: true,
  },
  {
    code: 'Period',
    symbol: '.',
    altSymbol: '>',
    isShowMore: true,
  },

  {
    code: 'Slash',
    symbol: '/',
    altSymbol: '?',
    isShowMore: true,
  },

  {
    code: 'ArrowUp',
    symbol: '↑',
    isColored: true,
  },
  {
    code: 'ShiftRight',
    symbol: 'Shift',
    isColored: true,
    customClasses: ['right-shift', 'to-upper-case'],
  },
  {
    code: 'ControlLeft',
    symbol: 'Ctrl',
    isColored: true,
    isLanguageSwitch: true,
    customClasses: ['to-upper-case'],
  },
  {
    code: 'MetaLeft',
    symbol: 'EN',
    isColored: true,
    customClasses: ['to-upper-case'],
  },
  {
    code: 'AltLeft',
    symbol: 'Alt',
    isColored: true,
    customClasses: ['to-upper-case'],
  },
  {
    code: 'Space',
    symbol: ' ',
    isColored: true,
    customClasses: ['space'],
  },
  {
    code: 'AltRight',
    symbol: 'Alt',
    isColored: true,
    customClasses: ['to-upper-case'],
  },
  {
    code: 'ControlRight',
    symbol: 'Ctrl',
    isColored: true,
    customClasses: ['to-upper-case'],
  },

  {
    code: 'ArrowLeft',
    symbol: '←',
    isColored: true,
  },

  {
    code: 'ArrowDown',
    symbol: '↓',
    isColored: true,
  },

  {
    code: 'ArrowRight',
    symbol: '→',
    isColored: true,
  },
];

export default { KEYBOARD_LAYOUT };
