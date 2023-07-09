export const initialCards = [
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
// let userId;
// let cardList;

// Promise.all([Api.getInitialCards(), Api.getUserInfo()])
//   .then(([initialCards, userData]) => {
//     userId = userData._id;
//     userDataInfo.setUserInfo(userData.name, userData.about);
//     userInfo.setProfileAvatar(userData.avatar);
//     cardList = new Section(
//       {
//         items: initialCards,
//         renderer: (data) => {
//           const newCard = createCard(data);
//           cardList.addItem(newCard);
//         },
//       },
//       cardList
//     );
//     cardList.renderItems();
//   })
//   .catch(() => console.log(err));

// function handleProfileFormSubmit({ name, about }) {
//   editProfilePopup.setLoading(true);
//   Api
//     .updateUserInfo(name, about)
//     .then(() => {
//       userInfo.setUserInfo(name, about);
//       editProfilePopup.close();
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => {
//       editProfilePopup.setLoading(false, "Save");
//     });
// }

// /* -------------------------------------------------------------------------- */
// /*                           Profile Event Listeners                          */
// /* -------------------------------------------------------------------------- */

// profileEditButton.addEventListener('click', openProfilePopup);

// profileAvatarIcon.addEventListener('click', () => {
//   avatarFromValidator.toggleButtonState();
//   editAvatarPopup.open();
// })

// function handleProfileAvatarSubmit(url) {
//   editAvatarPopup.setLoading(true);
//   Api
//    .setUsereAvatar(url)
//    .then((userData) => {
//     userInfo.setProfileAvatar(userData.avatar);
//     editAvatarPopup.close();
//    })
//    .catch((err) => {
//     console.error(err);
//    })
//    .finally(() => {
//     editAvatarPopup.setLoading(false, 'Save');
//    });
// }

/* -------------------------------------------------------------------------- */
/*                               Card Functions                               */
/* -------------------------------------------------------------------------- */

// function handleSubmitCard({ title, url }) {
//   Api
//    .addCard(title, url)
//    .then((card) => {
//     const newCard = createCard(card);
//     cardList.prependItem(newCard);
//     addNewCardPopup.close();
//    })
//    .catch((err) => {
//     console.error(err);
//    })
//    .finally(() => {
//     addNewCardPopup.setLoading(false, 'Create');
//    });
// }

// function createCard(data) {
//   const newCard = new Card(
//     data,
//     userId,
//     cardTemplateElement,
//     function handleCardClick() {
//       previewImagePopup.open(data);
//     },
//     function handleCardDelete() {
//       deleteImagePopup.setSubmitAction(() => {
//         deleteImagePopup.setLoading(true);
//         Api
//           .deleteCard(data._id)
//           .then((res) => {
//             newCard.remove(res._id);
//             deleteImagePopup.close();
//           })
//           .catch((err) => {
//             console.error(err);
//           })
//           .finally(() => {
//             deleteImagePopup.setLoading(false, "Yes");
//           });
//       });
//       deleteImagePopup.open(data._id);
//     },
//     function handleCardLikeClick(data) {
//       Api
//         .changeLikeCardStatus(data._id, newCard.isLiked())
//         .then((res) => {
//           const likes = res.likes || [];
//           newCard.setLikes(likes);
//           newCard.toggleLikes();
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }
//   );
//   return newCard.generateCard();
// }
