import { createAddDiscussionButtonTemplate } from '../templates/template-creator';
import './bookmarkItem';

class BookmarkList extends HTMLElement {
  constructor() {
    super();
  }

  set bookmarks(bookmarks) {
    this._bookmarks = bookmarks;
    this.render();
  }

  renderError() {
    this.innerHTML = '<h2>Gagal</h2>';
  }

  render() {
    this.innerHTML = '';
    console.log(this._bookmarks);
    this._bookmarks.forEach((bookmark) => {
      console.log(bookmark);
      const bookmarkItemElement = document.createElement('bookmark-item');
      bookmarkItemElement.bookmark = bookmark;
      this.appendChild(bookmarkItemElement);
    });
    this.innerHTML += createAddDiscussionButtonTemplate();
  }
}

customElements.define('bookmark-list', BookmarkList);
