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
    symbol: 'ё',
    isColored: true,
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
    altSymbol: '"',
    isShowMore: true,
  },
  {
    code: 'Digit3',
    symbol: '3',
    altSymbol: '№',
    isShowMore: true,
  },
  {
    code: 'Digit4',
    symbol: '4',
    altSymbol: ';',
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
    altSymbol: ':',
    isShowMore: true,
  },
  {
    code: 'Digit7',
    symbol: '7',
    altSymbol: '?',
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
    symbol: 'й',
  },
  {
    code: 'KeyW',
    symbol: 'ц',
  },
  {
    code: 'KeyE',
    symbol: 'у',
  },
  {
    code: 'KeyR',
    symbol: 'к',
  },
  {
    code: 'KeyT',
    symbol: 'е',
  },
  {
    code: 'KeyY',
    symbol: 'н',
  },
  {
    code: 'KeyU',
    symbol: 'г',
  },
  {
    code: 'KeyI',
    symbol: 'ш',
  },
  {
    code: 'KeyO',
    symbol: 'щ',
  },
  {
    code: 'KeyP',
    symbol: 'з',
  },
  {
    code: 'BracketLeft',
    symbol: 'х',
  },
  {
    code: 'BracketRight',
    symbol: 'ъ',
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
    symbol: 'ф',
  },
  {
    code: 'KeyS',
    symbol: 'ы',
  },
  {
    code: 'KeyD',
    symbol: 'в',
  },
  {
    code: 'KeyF',
    symbol: 'а',
  },
  {
    code: 'KeyG',
    symbol: 'п',
  },
  {
    code: 'KeyH',
    symbol: 'р',
  },
  {
    code: 'KeyJ',
    symbol: 'о',
  },
  {
    code: 'KeyK',
    symbol: 'л',
  },
  {
    code: 'KeyL',
    symbol: 'д',
  },
  {
    code: 'Semicolon',
    symbol: 'ж',
  },
  {
    code: 'Quote',
    symbol: 'э',
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
    symbol: 'я',
  },
  {
    code: 'KeyX',
    symbol: 'ч',
  },
  {
    code: 'KeyC',
    symbol: 'с',
  },
  {
    code: 'KeyV',
    symbol: 'м',
  },
  {
    code: 'KeyB',
    symbol: 'и',
  },
  {
    code: 'KeyN',
    symbol: 'т',
  },
  {
    code: 'KeyM',
    symbol: 'ь',
  },
  {
    code: 'Comma',
    symbol: 'б',
  },
  {
    code: 'Period',
    symbol: 'ю',
  },

  {
    code: 'Slash',
    symbol: '.',
    altSymbol: ',',
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
    symbol: 'РУ',
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
