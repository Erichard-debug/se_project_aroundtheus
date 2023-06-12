import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openModal, closePopup } from "../utils/utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
const formValidatorConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const card = new Card(initialCards, "#card-template");
card.getCardElement();

/*Elements*/
export const previewModal = document.querySelector("#preview-modal");
export const previewImageModal = previewModal.querySelector(
  ".modal__preview-image"
);
export const previewDescriptionModal = previewModal.querySelector(
  ".modal__preview-description"
);
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-form-modal");
// const previewModal = document.querySelector("#preview-modal");
const addNewCardButton = document.querySelector("#profile-add-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddCardForm = addCardModal.querySelector(".modal__form");
// const newCardSubmitButton = profileAddCardForm.querySelector(
//   config.submitButtonSelector
// );
const cardsWrap = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = profileAddCardForm.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = profileAddCardForm.querySelector(".modal__input_type_url");

/*Functions*/

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.getCardElement();
  // card._setEventListeners();
  cardsWrap.prepend(cardElement);
}

/*Event Handlers*/
function handleEditProfileSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
  profileEditForm.reset();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);

  closePopup(addCardModal);
  profileAddCardForm.reset();
  // toggleButtonState(
  //   [cardTitleInput, cardUrlInput],
  //   // newCardSubmitButton,
  //   config
  // );
}

/*Event Listeners*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleEditProfileSubmit);
profileAddCardForm.addEventListener("submit", handleAddCardFormSubmit);

// /*Add New card*/
addNewCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

/*Cards*/
initialCards.forEach((data) => {
  renderCard(data);
});
// Validation

const addFormValidator = new FormValidator(
  formValidatorConfig,
  profileAddCardForm
);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(
  formValidatorConfig,
  profileEditForm
);
editFormValidator.enableValidation();
