// api
//   .getAppInfo()
//   .then(([userData, cardData]) => {
//     currentUserId = userData._id;
//     userInfoEl.setUserInfo({ name: userData.name, job: userData.about });
//     userInfoEl.setAvatarInfo(userData.avatar);
//     sectionEl = new Section(
//       {
//         items: cardData,

//         renderer: (data) => {
//           const card = createCard(data);
//           sectionEl.addItem(card);
//         },
//       },
//       ".cards__list"
//     );
//     sectionEl.renderItems();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   //
//   getAppInfo() {
//     return Promise.all([this.getUserInfo(), this.initialCards()]);
//   }
