const { default: User } = require('../../data/loginSource');
const { createNavbarTemplateAfterLogin, createNavbarTemplateBeforeLogin, createSidebarCompany } = require('../templates/template-creator');

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const getTokenStorage = localStorage.getItem('token');
    const getRoleStorage = localStorage.getItem('role').replaceAll('"', '');
    console.log(getRoleStorage);
    if (getTokenStorage === null) {
      this.innerHTML += createNavbarTemplateBeforeLogin();
    } else if (getTokenStorage != null && getRoleStorage === 'Programmer') {
      this.innerHTML += createNavbarTemplateAfterLogin();
      const logout = document.querySelector('#logout');
      logout.addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await User.Logout();
        if (response.error) {
          console.log(response.error);
        } else {
          document.location = '#/';
          window.location.reload();
        }
      });
    } else {
      this.innerHTML += createSidebarCompany();
      const logout = document.querySelector('#logout');
      logout.addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await User.Logout();
        if (response.error) {
          console.log(response.error);
        } else {
          document.location = '#/';
          window.location.reload();
        }
      });
    }
  }
}
customElements.define('app-bar', AppBar);
