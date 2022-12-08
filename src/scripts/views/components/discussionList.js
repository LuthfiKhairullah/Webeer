import { createAddDiscussionButtonTemplate } from '../templates/template-creator';
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
      const discussionItemElement = document.createElement('discussion-item');
      discussionItemElement.discussion = discussion;
      this.appendChild(discussionItemElement);
    });
    this.innerHTML += createAddDiscussionButtonTemplate();
  }
}

customElements.define('discussion-list', DiscussionList);
