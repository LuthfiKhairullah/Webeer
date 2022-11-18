import { createProfileEditTemplate } from '../templates/template-creator';

class UserProfile extends HTMLElement {
  constructor() {
    super();
  }

  set user(user) {
    this._user = user;
    this.render();
  }

  render() {
    this.innerHTML = createProfileEditTemplate(this._user);
  }
}

customElements.define('user-profile-edit', UserProfile);