import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../utils/constants.js";

const formValidatorConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

/*Elements*/
const previewModal = document.querySelector("#preview-modal");
const previewImageModal = previewModal.querySelector(".modal__preview-image");
const previewDescriptionModal = previewModal.querySelector(
  ".modal__preview-description"
);
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-form-modal");
const addNewCardButton = document.querySelector("#profile-add-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddCardForm = addCardModal.querySelector(".modal__form");
const cardsWrap = document.querySelector(".cards__list");
const cardTitleInput = profileAddCardForm.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = profileAddCardForm.querySelector(".modal__input_type_url");

// popup
const userInfo = new UserInfo(
  document.getElementById("profile-title-input"),
  document.getElementById("profile-description-input")
);
const editPopupForm = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileSubmit
);
const addCardPopupForm = new PopupWithForm(
  "#add-form-modal",
  handleAddCardFormSubmit
);

// Image modal event

function handleCardImageClick({ name, link }) {
  const previewImagePopup = new PopupWithImage("#preview-modal");
  previewImagePopup.open();
}

// /*Add New card Button*/
addNewCardButton.addEventListener("click", () => {
  addCardPopupForm.open();
});
/*Edit profile */
profileEditButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  profileTitleInput.value = currentUserInfo.profileName;
  profileDescriptionInput.value = currentUserInfo.description;
  editPopupForm.open();
});

/*Functions*/
/*Cards*/
function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardImageClick);
  section.addItem(card.getCardElement());
}
4;
editPopupForm.setEventListeners(handleEditProfileSubmit);

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardsWrap
);

section.renderItems();

// Handlers/

function handleEditProfileSubmit(formData) {
  const { nameInfo, jobInfo } = formData;
  userInfo.setUserInfo(nameInfo, jobInfo);
  editPopupForm.close();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  addCardPopupForm.close();
  profileAddCardForm.reset();
}

profileEditForm.addEventListener("submit", handleEditProfileSubmit);
profileAddCardForm.addEventListener("submit", handleAddCardFormSubmit);

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
