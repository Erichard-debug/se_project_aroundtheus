class FormValidator {
  constructor(config, _formEl) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config._inactiveButtonClass;
    this._inputErrorClass = config._inputErrorClass;
    this._errorClass = config.errorClass;
    this._formEl = _formEl;
  }

  _showInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return showInputError(this._formEl, inputEl, options);
    }
    _hideInputError(this._formEl, inputEl, options);
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }
  _toggleButtonState(inputList, submitButton) {
    if (this._hasInvalidInput(inputList)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
      return;
    }

    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.disabled = false;
  }

  _setEventListeners() {
    const inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    const submitButton = this._formEl.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputEls, submitButton);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        console.log(this._checkInputValidity);
        this._checkInputValidity(this._formEl, inputEl);
        _toggleButtonState(inputEls, submitButton);
      });
    });
  }

  enableValidation(options) {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners(this._formEl, options);
  }
}

export default FormValidator;
