const { default: User } = require('../../data/loginSource');
const { createNavbarTemplateAfterLogin, createNavbarTemplateBeforeLogin, createSidebarCompany } = require('../templates/template-creator');

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    /* this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Webeer</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
            </li>
        <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
            </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/forums">Forums</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/jobs">Jobs</a>
          </li>
          <li class="nav-item">
          <button class="button btn-primary ms-lg-3">
            <a class="nav-link" href="#/login">Login</a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        `; */
    const getTokenStorage = localStorage.getItem('token');
    let getRoleStorage = localStorage.getItem('role');
    console.log(getRoleStorage);
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
          localStorage.clear();
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
