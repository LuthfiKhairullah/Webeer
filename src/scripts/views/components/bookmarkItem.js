import { createBookmarkItemTemplate } from '../templates/template-creator';

class BookmarkItem extends HTMLElement {
  constructor() {
    super();
  }

  set bookmark(bookmark) {
    this._bookmark = bookmark;
    this.render();
  }

  render() {
    this.innerHTML += createBookmarkItemTemplate(this._bookmark);
  }
}

customElements.define('bookmark-item', BookmarkItem);
