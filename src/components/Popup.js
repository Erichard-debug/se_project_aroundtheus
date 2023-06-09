export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeByEscape = this._closeByEscape.bind(this);
    this._closeByMouseDown = this._closeByMouseDown.bind(this);
  }

  open() {
    // opens popup
    this._popupElement.classList.add("modal_opened");
    this._setEventListeners();
  }

  close() {
    // closes popup
    this._popupElement.classList.remove("modal_opened");
    this._popupElement.removeEventListener("click", this._closeByMouseDown);
    document.removeEventListener("keydown", this._closeByEscape);
  }

  _closeByEscape = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  _closeByMouseDown = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      this.close();
    }
  };

  _setEventListeners() {
    document.addEventListener("keydown", this._closeByEscape);
    this._popupElement.addEventListener("click", this._closeByMouseDown);
  }
}
