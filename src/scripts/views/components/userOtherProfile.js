import { createProfileOtherTemplate } from '../templates/template-creator';

class UserProfileOther extends HTMLElement {
  constructor() {
    super();
  }

  set user(user) {
    this._user = user;
    this.render();
  }

  render() {
    this.innerHTML = createProfileOtherTemplate(this._user);
  }
}

customElements.define('user-profile-other', UserProfileOther);