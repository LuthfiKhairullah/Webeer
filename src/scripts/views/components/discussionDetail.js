import { createDiscussionDetailTemplate } from '../templates/template-creator';

class DiscussionDetail extends HTMLElement {
  set discussion(discussion) {
    this._discussion = discussion;
    this.render();
  }

  render() {
    this.innerHTML = createDiscussionDetailTemplate(this._discussion);
  }
}

customElements.define('discussion-detail', DiscussionDetail);