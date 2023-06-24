import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector(
      ".modal__preview-image-container"
    );
  }
  open() {}
  close() {
    this._popupImage.reset();
    super.close();
  }
}
