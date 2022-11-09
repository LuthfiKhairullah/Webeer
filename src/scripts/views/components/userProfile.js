import { createProfileTemplate } from '../templates/template-creator';

class UserProfile extends HTMLElement {
  constructor() {
    super();
  }

  set user(user) {
    this._user = user;
    this.render();
  }

  render() {
    this.innerHTML = createProfileTemplate(this._user);
  }
}

customElements.define('user-profile', UserProfile);