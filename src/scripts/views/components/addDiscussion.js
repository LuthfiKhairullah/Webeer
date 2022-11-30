const { createAddDiscussionTemplate } = require('../templates/template-creator');

class AddDiscussion extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = createAddDiscussionTemplate();
  }
}

customElements.define('add-discussion', AddDiscussion);