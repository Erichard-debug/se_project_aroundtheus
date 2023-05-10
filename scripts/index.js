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
/*Elements*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-form-modal");
const previewModal = document.querySelector("#preview-modal");
const addNewCardButton = document.querySelector("#profile-add-button");
const profileCloseButton = profileEditModal.querySelector(
  "#profile-close-button"
);
const addCardprofileCloseButton = addCardModal.querySelector(
  "#add-card-close-button"
);
const previewModalCloseButton = previewModal.querySelector(
  "#preview-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddCardForm = addCardModal.querySelector(".modal__form");
//const profilePreview = previewModal.querySelector()
const cardsWrap = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = profileAddCardForm.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = profileAddCardForm.querySelector(".modal__input_type_url");
const previewImageModal = previewModal.querySelector(".modal__preview-image");
const previewDescriptionModal = previewModal.querySelector(
  ".modal__preview-description"
);

/*Functions*/
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImage.addEventListener("click", () => {
    previewImageModal.src = cardData.link;
    previewDescriptionModal.textContent = cardData.name;
    openModal(previewModal);
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}
function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
}

/*Event Handlers*/
function handleEditProfileSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  closePopup(addCardModal);
}

/*Event Listeners*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
profileCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

profileEditForm.addEventListener("submit", handleEditProfileSubmit);
profileAddCardForm.addEventListener("submit", handleAddCardFormSubmit);

/*Add New card*/
addNewCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});
addCardprofileCloseButton.addEventListener("click", () => {
  closePopup(addCardModal);
});
previewModalCloseButton.addEventListener("click", () => {
  closePopup(previewModal);
});

/*Cards*/
initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
