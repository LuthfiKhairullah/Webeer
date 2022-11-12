const { createNavbarTemplateAfterLogin, createNavbarTemplateBeforeLogin } = require('../templates/template-creator');

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const getTokenStorage = localStorage.getItem('token');
    if (getTokenStorage === null) {
      this.innerHTML += createNavbarTemplateBeforeLogin();
    } else {
      this.innerHTML += createNavbarTemplateAfterLogin();
    }
  }
}

customElements.define('app-bar', AppBar);
