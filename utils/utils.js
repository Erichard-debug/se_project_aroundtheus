const previewModal = document.querySelector("#preview-modal");
const previewImageModal = previewModal.querySelector(".modal__preview-image");
const previewDescriptionModal = previewModal.querySelector(
  ".modal__preview-description"
);

function closeByEscapeKeyHandler(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}
function closeByMouseDown(e) {
  if (
    e.target.classList.contains("modal__close") ||
    e.target.classList.contains("modal")
  ) {
    closePopup(e.target.closest(".modal"));
  }
}

// event handler for the add modal submit event listener
// function handleAddCardFormSubmit(e) {
//   e.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardsWrap);
//   console.log(newCardSubmitButton);

//   closePopup(addCardModal);
//   profileAddCardForm.reset();
//   toggleButtonState(
//     [cardTitleInput, cardUrlInput],
//     newCardSubmitButton,
//     config
//   );
// }

// function handlepreviewImageModal(e) {
//   document.querySelector(".modal__image").src = e.target.src;
//   document.querySelector(".modal__image").alt = e.target.alt;
//   document.querySelector(".modal__preview-description").textContent =
//     e.target.alt;
//   openModal(document.querySelector(".modal__preview-image"));
// }

// function handleDeleteButtonClick(evt) {
//   evt.target.closest(".card").replaceWith();
// }

// function handleLikeButtonClick(evt) {
//   evt.target.classList.toggle("card__like-button_clicked");
// }

// open and close modal functions
function openModal(modal) {
  document.addEventListener("keydown", closeByEscapeKeyHandler);
  modal.addEventListener("mousedown", closeByMouseDown);
  modal.classList.add("modal_opened");
}
// event handler for closing add and edit modals on form submission

function closePopup(modal) {
  document.removeEventListener("keydown", closeByEscapeKeyHandler);
  modal.removeEventListener("mousedown", closeByMouseDown);
  modal.classList.remove("modal_opened");
}

export {
  closeByEscapeKeyHandler,
  // handleAddCardFormSubmit,
  // handlepreviewImageModal,
  // handleDeleteButtonClick,
  // handleLikeButtonClick,
  openModal,
  closePopup,
  previewDescriptionModal,
  previewImageModal,
  previewModal,
};
