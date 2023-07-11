export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", { headers: this._headers }).then(
      (res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      }
    );
  }
  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", { headers: this._headers }).then(
      (res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      }
    );
  }
  changeUserInfo(name, about) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  setUsereAvatar(avatarLink) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addCard(name, link) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // deleteCard(cardId) {
  //   return fetch(`${this._baseUrl}/cards/${cardId}`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //   }).then(this._checkResponse);
  // }

  // addLike(cardId) {
  //   return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
  //     method: "PUT",
  //     headers: this._headers,
  //   }).then(this._checkResponse);
  // }

  // removeLike(cardId) {
  //   return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //   }).then(this._checkResponse);
  // }
}
