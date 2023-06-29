// import PopupWithImage from "./PopupWithImage.js";

class Card {
  constructor(
    data,
    templateSelector,
    handleCardImageClick,
    previewImageModal,
    previewDescriptionModal
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardImageClick = handleCardImageClick;
    this._previewImageModal = previewImageModal;
    this._previewDescriptionModal = previewDescriptionModal;
  }

  _getTemplate() {
    return document
      .querySelector(`${this._templateSelector}`)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _handleCardImage = () => {
    this._previewImageModal.src = this._link;
    this._previewImageModal.alt = this._name;
    this._previewDescriptionModal.textContent = this._name;
    this._handleCardImageClick({ name: this._name, link: this._link });
  };

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImage();
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteButton());

    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());
  }

  getCardElement() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;

    return this._cardElement;
  }
}

export default Card;
