import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImageElement = document.querySelector(".modal__preview-image");
    this._previewImageCaption = document.querySelector(
      ".modal__preview-description"
    );
  }

  open({ name, link }) {
    this._previewImageElement.alt = name;
    this._previewImageDescription.textContent = name;
    this._previewImageElement.src = link;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector(".card__image");
  }
}
