import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
const formValidatorConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

/*Elements*/
const avatarEditButton = document.querySelector("#avatar-edit-button");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-form-modal");
const avatarEditModal = document.querySelector("#avatar-edit-modal");
const addNewCardButton = document.querySelector("#profile-add-button");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const avatarEditForm = avatarEditModal.querySelector(".modal__form");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddCardForm = addCardModal.querySelector(".modal__form");
const cardsWrap = document.querySelector(".cards__list");
//API and Fetch

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "155496ba-0cff-4254-891f-c46a9649a9e5",
    "Content-Type": "application/json",
  },
});

// popup Elements
const userInfo = new UserInfo({
  avatarElement: document.querySelector(".profile__image"),
  nameElement: document.querySelector(".profile__title"),
  jobElement: document.querySelector(".profile__description"),
});
const previewImagePopup = new PopupWithImage("#preview-modal");
const editPopupForm = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileSubmit
);

const addCardPopupForm = new PopupWithForm(
  "#add-form-modal",
  handleAddCardFormSubmit
);

const avatarProfilePopupForm = new PopupWithForm(
  "#avatar-edit-modal",
  handleAvatarFormSubmit
);
const deleteCardPopup = new PopupWithConfirm(
  "#delete-card-modal",
  handleDeleteCard
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

//Avatar Profile change
avatarEditButton.addEventListener("click", () => {
  avatarFormValidator.toggleButtonState();
  avatarProfilePopupForm.open();
});

/*Functions*/
/*Cards*/
function renderCard(cardData) {
  const card = new Card({
    data: cardData,
    templateSelector: "#card-template",
    handleCardImageClick,
    myUserId: userId,
    handleDeleteCard,
  });
  return card.getCardElement();
}
let cardList;
api
  .getInitialCards()
  .then((initialCards) => {
    cardList = new Section(
      {
        items: initialCards,
        renderer: (data) => {
          const newCard = renderCard(data);
          cardList.addItem(newCard);
        },
      },
      cardsWrap
    );
    cardList.renderItems();
  })
  .catch((err) => console.log(err));

let userId;
api
  .getUserInfo()
  .then((formData) => {
    userId = formData._id;
    userInfo.setProfileAvatar(formData.avatarUrl);
    userInfo.setUserInfo(formData.nameInfo, formData.jobinfo);
  })
  .catch((err) => console.log(err));

function handleEditProfileSubmit({ nameInfo, jobInfo }) {
  api
    .changeUserInfo(nameInfo, jobInfo)
    .then(() => {
      userInfo.setUserInfo(nameInfo, jobInfo);
      editPopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleAddCardFormSubmit({ name, link }) {
  api
    .addCard(name, link)
    .then((cardElement) => {
      const newCard = renderCard(cardElement);
      cardList.prependItem(newCard);
      addCardPopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
}
//Delete Card
function handleDeleteCard(cardId) {
  deleteCardPopup.open();
  deleteCardPopup.setSubmitAction(() => {
    deleteCardPopup.renderLoading(true);
    api
      .deleteCard(cardId)
      .then(() => {
        cardId.deleteCard();
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        deleteCardPopup.renderLoading(false);
      });
  });
}
//Avatar
function handleAvatarFormSubmit(data) {
  api
    .changeUserAvatar(data.avatarUrl)
    .then((formData) => {
      userInfo.setProfileAvatar(formData.avatar);
      avatarProfilePopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
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

const avatarFormValidator = new FormValidator(
  formValidatorConfig,
  avatarEditForm
);
avatarFormValidator.enableValidation();
