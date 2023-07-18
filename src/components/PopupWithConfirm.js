import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._confirmButton = document.querySelector("#delete-confirm");
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit);
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._confirmButton.textContent = "Saving...";
    } else {
      this._confirmButton.textContent = "yes";
    }
  }

  setSubmitAction(action) {
    this._handleDeleteSubmit = action;
  }

  close() {
    super.close();
    this._popupForm.removeEventlistener("submit", this._handleSubmit());
  }
  _handleSubmit = (e) => {
    e.preventDefault();
    this._handleDeleteSubmit();
  };
}
