import { createDiscussionItemTemplate } from '../templates/template-creator';

class DiscussionItem extends HTMLElement {
  constructor() {
    super();
  }

  set discussion(discussion) {
    this._discussion = discussion;
    this.render();
  }

  render() {
    this.innerHTML += createDiscussionItemTemplate(this._discussion);
  }
}

customElements.define('discussion-item', DiscussionItem);
