class Card {
  constructor({
    data,
    templateSelector,
    handleCardImageClick,
    myUserId,
    handleDeleteCard,
    handleLikeButton,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner._id;
    this._myUserId = myUserId;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButton = handleLikeButton;
    this._templateSelector = templateSelector;
    this._handleCardImageClick = handleCardImageClick;
  }

  _getTemplate() {
    return document
      .querySelector(`${this._templateSelector}`)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  deleteConfirmClick() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _checkIdForDelete() {
    if (this._owner === this._myUserId) {
      this.addTrash();
    } else {
      this.removeTrash();
    }
  }

  addTrash() {
    this.cardTrashButton.classList.remove("card__delete-button_hidden");
  }

  removeTrash() {
    this.cardTrashButton.classList.add("card__delete-button_hidden");
  }

  updateLikes(likes) {
    this._likes = likes;
    this.renderLikes();
  }
  renderLikes() {
    this._cardLikes.textContent = this._likes.length;
    const isLiked = this.isLiked();
    if (isLiked) {
      this.likeButton.classList.add("card__like-button_active");
    } else {
      this.likeButton.classList.remove("card__like-button_active");
    }
  }

  isLiked() {
    return this._likes.some((like) => like._id === this._myUserId);
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImageClick({ name: this._name, link: this._link });
      });

    this.likeButton.addEventListener("click", () =>
      this._handleLikeButton(this._id)
    );

    this.cardTrashButton.addEventListener("click", () => {
      this._handleDeleteCard(this._id);
    });
  }

  getCardElement() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this.likeButton = this._cardElement.querySelector(".card__like-button");
    this.cardTrashButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardLikes = this._cardElement.querySelector(".card__like-amount");
    this.updateLikes(this._likes);
    this._setEventListeners();
    this._checkIdForDelete();

    return this._cardElement;
  }
}

export default Card;
