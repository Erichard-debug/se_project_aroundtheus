import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  open() {
    super.open();
    this._setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
    this._popupElement.removeEventListener("submit", this._handleFormSubmit);
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupForm.querySelector(".modal__button").textContent = "Saving...";
    } else {
      this._popupForm.querySelector(".modal__button").textContent = "Save";
    }
  }

  _getInputValues() {
    const inputsObject = {};
    const inputList = this._popupForm.querySelectorAll(".modal__input");
    inputList.forEach((input) => {
      if (input.value !== "") {
        inputsObject[input.name] = input.value;
      }
    });
    return inputsObject;
  }

  _submitForm = (event) => {
    event.preventDefault();
    const inputValues = this._getInputValues();
    this._handleFormSubmit(inputValues);
  };

  _setEventListeners() {
    super._setEventListeners();
    this._popupElement.addEventListener("submit", this._submitForm);
  }
}
