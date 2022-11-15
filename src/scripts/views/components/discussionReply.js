import { createDiscussionReplyTemplate } from '../templates/template-creator';

class DiscussionReply extends HTMLElement {
  set replies(replies) {
    this._replies = replies;
    this.render();
  }

  render() {
    console.log(this._replies);
    this.innerHTML = createDiscussionReplyTemplate(this._replies);
  }
}

customElements.define('discussion-reply', DiscussionReply);