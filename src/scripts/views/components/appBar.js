const { createNavbarTemplateAfterLogin } = require('../templates/template-creator');

class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += createNavbarTemplateAfterLogin;
  }
}

customElements.define('app-bar', AppBar);
