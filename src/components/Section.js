export default class Section {
  constructor({ items, renderer }, containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = containerElement;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(cardElement) {
    this._containerElement.append(cardElement);
  }

  prependItem(cardElement) {
    this._containerElement.prepend(cardElement);
  }
}
