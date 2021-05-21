import EN from "./languages/en.js";
import RU from "./languages/ru.js";

export class Keyboard {
  // localStorage naming
  LS_LANG_NAME = "language";
  LS_LANG_EN = "EN";
  LS_LANG_RU = "RU";
  LS_CAPS_NAME = "isCapsLock";
  LS_CAPS_ON = "1";
  LS_CAPS_OFF = "0";

  // Class names
  insertKeyboardTo = "body";
  mainTagName = "main";
  wrapperClass = "wrapper";
  outputClass = "output";
  notesClass = "notes";
  keyboardClass = "keyboard";
  buttonClass = "keyboard-btn";
  buttonColoredClass = "keyboard-btn--colored";
  buttonActiveClass = "keyboard-btn--active";
  buttonShiftedClass = "keyboard-btn--shifted";
  buttonFirstClass = "keyboard-btn__first";
  buttonSecondClass = "keyboard-btn__second";

  // Option names
  KEY_OPTION_CODE = "code";
  KEY_OPTION_SYMBOL = "symbol";
  KEY_OPTION_ALT_SYMBOL = "symbol";
  KEY_OPTION_IS_SHOW = "isShowMore";
  KEY_OPTION_IS_COLORED = "isColored";
  KEY_OPTION_CUSTOM_CLASSES = "customClasses";
  KEY_OPTION_IS_LANG_SWITCH = "isLanguageSwitch";

  // Custom texts
  TEXT_CONSOLE_NO_REQURED_FIELD = `Keys doesn't contain requred fields (${this.KEY_OPTION_CODE}, ${this.KEY_OPTION_SYMBOL}). Please, check languages config.`;
  NOTES_TEXT =
    "Right Ctrl+Shift for language switching. Keyboard based on Windows.";

  EN_KEYBOARD = Object.create(EN.KEYBOARD_LAYOUT);
  RU_KEYBOARD = Object.create(RU.KEYBOARD_LAYOUT);
  KEYBOARD = undefined;

  languageShitchBtnsList = [];
  currentLanguage = undefined;
  isCapsLock = undefined;
  isShift = false;
  isCtrl = false;

  constructor() {
    if (!localStorage.getItem(this.LS_LANG_NAME)) {
      localStorage.setItem(this.LS_LANG_NAME, this.LS_LANG_EN);
    }

    if (!localStorage.getItem(this.LS_CAPS_NAME)) {
      localStorage.setItem(this.LS_CAPS_NAME, this.LS_CAPS_NAME_OFF);
    }

    this.isCapsLock = !!(1 * localStorage.getItem(this.LS_CAPS_NAME));
    this.currentLanguage = localStorage.getItem(this.LS_LANG_NAME);
    this.KEYBOARD = this[`${this.currentLanguage}_KEYBOARD`];
    this.KEYBOARD.forEach((btn) => {
      btn.isPressed = false;
    });
  }

  init() {
    document.querySelector(this.insertKeyboardTo).append(this.getLayout());
    this.onKeys();
  }

  getLayout() {
    let main = document.createElement(this.mainTagName);
    let wrapper = document.createElement("div");

    wrapper.classList.add(this.wrapperClass);
    wrapper.append(
      this.getGeneratedLayout("textarea", this.outputClass),
      this.getKeyboardLayout(),
      this.getGeneratedLayout("p", this.notesClass, this.NOTES_TEXT)
    );
    main.append(wrapper);

    return main;
  }

  refreshLayout() {
    this.languageShitchBtnsList = [];

    document.querySelector(`.${this.keyboardClass}`).remove();
    document
      .querySelector(`.${this.wrapperClass}`)
      .insertBefore(
        this.getKeyboardLayout(),
        document.querySelector(`.${this.notesClass}`)
      );
  }

  getGeneratedLayout(tagName, className, text) {
    let element = document.createElement(tagName);

    if (text !== undefined) {
      element.innerHTML = text;
    }

    element.classList.add(className);

    return element;
  }

  onKeys() {
    document.onkeydown = (e) => {
      this.keyEvent(e, false);
      this.onLanguageShitch();
    };

    document.onkeyup = (e) => {
      this.keyEvent(e, true);
    };
  }

  getKeyboardLayout() {
    let keyboardLayout = document.createElement("div");
    keyboardLayout.classList.add(this.keyboardClass);

    this.KEYBOARD.forEach((btn, index) => {
      if (
        !btn.hasOwnProperty(this.KEY_OPTION_CODE) ||
        !btn.hasOwnProperty(this.KEY_OPTION_SYMBOL)
      ) {
        throw new Error(this.TEXT_CONSOLE_NO_REQURED_FIELD);
      }

      let newButton = document.createElement("button");
      let newButtonClass = `${this.buttonClass}--${index}`;

      this.btnCaseSwitch(btn);
      newButton.type = "button";
      newButton.classList.add(this.buttonClass, newButtonClass);
      newButton.onclick = () => {
        this.onCustomClick(btn);
      };

      if (this.isShift) {
        newButton.classList.add(this.buttonShiftedClass);
      }

      if (btn.hasOwnProperty(this.KEY_OPTION_IS_COLORED)) {
        newButton.classList.add(this.buttonColoredClass);
      }

      if (btn.hasOwnProperty(this.KEY_OPTION_IS_SHOW)) {
        newButton.append(
          this.getGeneratedLayout("span", this.buttonSecondClass, btn.altSymbol)
        );
      }

      if (btn.hasOwnProperty(this.KEY_OPTION_IS_LANG_SWITCH)) {
        this.languageShitchBtnsList.push(index);
      }

      if (btn.hasOwnProperty(this.KEY_OPTION_CUSTOM_CLASSES)) {
        newButton.classList.add(...btn[this.KEY_OPTION_CUSTOM_CLASSES]);
      }

      newButton.append(
        this.getGeneratedLayout("span", this.buttonFirstClass, btn.symbol)
      );

      // Custom states for some keys
      switch (btn.code) {
        case "CapsLock":
          if (this.isCapsLock) {
            newButton.classList.add(this.buttonActiveClass);
          }
          break;

        case "ShiftLeft":
        case "ShiftRight":
          if (this.isShift) {
            newButton.classList.add(this.buttonActiveClass);
          }
          break;

        case "ControlLeft":
        case "ControlRight":
          if (this.isCtrl) {
            newButton.classList.add(this.buttonActiveClass);
          }
          break;
      }

      keyboardLayout.append(newButton);
    });

    return keyboardLayout;
  }

  btnCaseSwitch(btn) {
    if (
      (this.isCapsLock && !this.isShift) ||
      (!this.isCapsLock && this.isShift)
    ) {
      btn.symbol = btn.symbol.toUpperCase();
    } else {
      btn.symbol = btn.symbol.toLowerCase();
    }
  }

  keyEvent(e, isKeyUp) {
    let btnIndex = this.KEYBOARD.findIndex((btn) => {
      return btn.code === e.code;
    });
    let btnSettings = this.KEYBOARD[btnIndex];

    if (!e.repeat && isKeyUp) {
      this.KEYBOARD[btnIndex].isPressed = false;
      document
        .querySelector(`.${this.buttonClass}--${btnIndex}`)
        .classList.remove(this.buttonActiveClass);

      switch (this.KEYBOARD[btnIndex].code) {
        case "CapsLock":
          this.KEYBOARD[btnIndex].isPressed = true;
          this.isShift = false;
          this.onCustomClick(this.KEYBOARD[btnIndex]);
          break;

        case "ShiftLeft":
        case "ShiftRight":
          document
            .querySelector(`.${this.buttonClass}--${btnIndex}`)
            .classList.remove(this.buttonActiveClass);

          this.onCustomClick(this.KEYBOARD[btnIndex]);
          break;
      }
    } else {
      this.KEYBOARD[btnIndex].isPressed = true;
      document
        .querySelector(`.${this.buttonClass}--${btnIndex}`)
        .classList.add(this.buttonActiveClass);

      switch (this.KEYBOARD[btnIndex].code) {
        case "ShiftLeft":
        case "ShiftRight":
          this.isShift = false;
          this.onCustomClick(this.KEYBOARD[btnIndex]);
          break;
      }
    }
  }

  onLanguageShitch(isCustomSwitch = false) {
    let isBtnPressed =
      this.languageShitchBtnsList.every((index) => {
        let btnObj = this.KEYBOARD[index];
        return (
          btnObj.hasOwnProperty(this.KEY_OPTION_IS_LANG_SWITCH) &&
          btnObj.isPressed
        );
      }) || isCustomSwitch;

    if (isBtnPressed) {
      if (this.currentLanguage === this.LS_LANG_EN) {
        this.currentLanguage = this.LS_LANG_RU;
      } else {
        this.currentLanguage = this.LS_LANG_EN;
      }

      localStorage.setItem(this.LS_LANG_NAME, this.currentLanguage);
      this.KEYBOARD = this[`${this.currentLanguage}_KEYBOARD`];
      this.KEYBOARD.forEach((btn) => {
        btn.isPressed = false;
      });
      this.refreshLayout();
    }
  }

  onCustomClick(btn) {
    let output = document.querySelector(`.${this.outputClass}`);
    let btnType = btn.code;
    let cursorPosition = output.selectionStart;
    let value = output.value;

    switch (btnType) {
      case "ArrowRight":
        output.selectionStart += 1;
        this.refreshShiftCtrlStates();
        break;

      case "ArrowLeft":
        if (output.selectionStart > 0) {
          output.selectionStart -= 1;
          output.selectionEnd -= 1;
        }
        this.refreshShiftCtrlStates();
        break;

      case "Enter":
        value = `${value.slice(0, cursorPosition)}\n${value.slice(
          cursorPosition
        )}`;

        output.value = value;
        output.selectionStart = cursorPosition + 1;
        output.selectionEnd = cursorPosition + 1;
        this.refreshShiftCtrlStates();
        break;

      case "Backspace":
        value =
          value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);

        output.value = value;
        output.selectionStart = cursorPosition - 1;
        output.selectionEnd = cursorPosition - 1;
        this.refreshShiftCtrlStates();
        break;

      case "Delete":
        value =
          value.slice(0, cursorPosition) + value.slice(cursorPosition + 1);

        output.value = value;
        output.selectionStart = cursorPosition;
        output.selectionEnd = cursorPosition;
        this.refreshShiftCtrlStates();
        break;

      case "Tab":
        value = `${value.slice(0, cursorPosition)}  ${value.slice(
          cursorPosition
        )}`;

        output.value = value;
        output.selectionStart = cursorPosition + 2;
        output.selectionEnd = cursorPosition + 2;
        this.refreshShiftCtrlStates();
        break;

      case "CapsLock":
        this.isCapsLock = !this.isCapsLock;
        localStorage.setItem(this.LS_CAPS_NAME, 1 * this.isCapsLock);
        this.refreshLayout();
        this.refreshShiftCtrlStates();
        break;

      case "MetaLeft":
        this.onLanguageShitch(true);
        this.refreshShiftCtrlStates();
        break;

      case "AltLeft":
      case "AltRight":
        console.log("Alt");
        break;

      case "ShiftLeft":
      case "ShiftRight":
        this.isShift = !this.isShift;

        if (this.isShift && this.isCtrl) {
          this.isCtrl = false;
          this.isShift = false;
          this.onLanguageShitch(true);
        } else {
          this.refreshLayout();
        }
        break;

      case "ControlLeft":
      case "ControlRight":
        this.isCtrl = !this.isCtrl;

        if (this.isShift && this.isCtrl) {
          this.isShift = false;
          this.isCtrl = false;
          this.onLanguageShitch(true);
        } else {
          this.refreshLayout();
        }
        break;

      default:
        let inputValue = btn.symbol;

        if (this.isShift && btn.hasOwnProperty("altSymbol")) {
          inputValue = btn.altSymbol;
        }

        value =
          value.slice(0, cursorPosition) +
          inputValue +
          value.slice(cursorPosition);

        output.value = value;
        output.selectionStart = cursorPosition + 1;
        output.selectionEnd = cursorPosition + 1;
        this.refreshShiftCtrlStates();
    }

    output.focus();
  }

  refreshShiftCtrlStates() {
    if (this.isShift || this.isCtrl) {
      this.isShift = false;
      this.isCtrl = false;
      this.refreshLayout();
    }
  }
}

export default { Keyboard };
