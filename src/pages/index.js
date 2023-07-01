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

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-form-modal");
const addNewCardButton = document.querySelector("#profile-add-button");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddCardForm = addCardModal.querySelector(".modal__form");
const cardsWrap = document.querySelector(".cards__list");

// popup Elements
const userInfo = new UserInfo(
  document.querySelector(".profile__title"),
  document.querySelector(".profile__description")
);
const previewImagePopup = new PopupWithImage("#preview-modal");
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
  previewImagePopup.open(name, link);
}

// /*Add New card Button*/
addNewCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  addCardPopupForm.open();
});
/*Edit profile */
profileEditButton.addEventListener("click", () => {
  const { profileName, description } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = description;
  editFormValidator.toggleButtonState();
  editPopupForm.open();
});

/*Functions*/
/*Cards*/
function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardImageClick);
  section.addItem(card.getCardElement());
}

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

function handleAddCardFormSubmit(inputValues) {
  const { name, link } = inputValues;
  renderCard({ name, link });
  addCardPopupForm.close();
}
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
