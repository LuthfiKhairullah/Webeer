import { createDiscussionReplyTemplate } from '../templates/template-creator';

class DiscussionReply extends HTMLElement {
  set replies(replies) {
    this._replies = replies;
    this.render();
  }

  render() {
    this.innerHTML += createDiscussionReplyTemplate(this._replies);
  }
}

customElements.define('discussion-reply', DiscussionReply);