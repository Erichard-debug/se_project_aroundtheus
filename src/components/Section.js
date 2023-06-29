export default class Section {
  constructor({ items, renderer }, containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = containerElement;
  }

  renderItems() {
    this._items.forEach(this._renderer);
  }

  addItem(cardElement) {
    this._containerElement.append(cardElement);
  }

  prependItem(cardElement) {
    this._containerElement.prepend(cardElement);
  }
}
