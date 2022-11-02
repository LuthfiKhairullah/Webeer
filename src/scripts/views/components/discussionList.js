import { createAddDiscussionTemplate } from '../templates/template-creator';
import './discussionItem';

class DiscussionList extends HTMLElement {
  constructor() {
    super();
  }

  set discussions(discussions) {
    this._discussions = discussions;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `<h2>${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    this._discussions.forEach((discussion) => {
      // const search = document.querySelector('search-bar').value;
      const discussionItemElement = document.createElement('discussion-item');
      // const discussionTitle = discussion.title.toLowerCase();
      // if (discussionTitle.includes(search))
      discussionItemElement.discussion = discussion;
      this.appendChild(discussionItemElement);
    });
    this.innerHTML += createAddDiscussionTemplate();
  }
}

customElements.define('discussion-list', DiscussionList);
