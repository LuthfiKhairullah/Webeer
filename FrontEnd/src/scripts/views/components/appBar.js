const { default: User } = require('../../data/loginSource');
const { default: UrlParser } = require('../../routes/urlParser');
const { createNavbarTemplateAfterLogin, createNavbarTemplateBeforeLogin, createSidebarCompany } = require('../templates/template-creator');

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const getTokenStorage = localStorage.getItem('token');
    let getRoleStorage = localStorage.getItem('role');
    if (getRoleStorage !== null) {
      getRoleStorage = localStorage.getItem('role').replaceAll('"', '');
    }
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
          localStorage.remove('role');
          localStorage.remove('token');
          document.location = '#/';
          window.location.reload();
        }
      });
      const navItem = document.querySelectorAll('.nav-link');
      const url = UrlParser.parseActiveUrlWithCombiner();
      for (let i = 0; i < navItem.length; i++) {
        if (navItem[i].getAttribute('href') === `#${url}`) {
          navItem[i].classList.add('actived');
        } else {
          navItem[i].classList.remove('actived');
        }
        navItem[i].addEventListener('click', () => {
          for (let j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('actived');
            navItem[i].classList.add('actived');
          }
        });
      }
    } else {
      this.innerHTML += createSidebarCompany();
      const logout = document.querySelector('#logout');
      logout.addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await User.Logout();
        if (response.error) {
          console.log(response.error);
        } else {
          localStorage.remove('role');
          localStorage.remove('token');
          document.location = '#/';
          document.location.reload();
        }
      });
      const navItem = document.querySelectorAll('.nav-link');
      const url = UrlParser.parseActiveUrlWithCombiner();
      for (let i = 0; i < navItem.length; i++) {
        if (navItem[i].getAttribute('href') === `#${url}`) {
          navItem[i].classList.add('active');
        } else {
          navItem[i].classList.remove('active');
        }
        navItem[i].addEventListener('click', () => {
          for (let j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('active');
            navItem[i].classList.add('active');
          }
        });
      }
    }
  }
}
customElements.define('app-bar', AppBar);
