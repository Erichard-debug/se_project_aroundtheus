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

export { closeByEscapeKeyHandler, openModal, closePopup };
