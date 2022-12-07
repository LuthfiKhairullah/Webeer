class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer id="footer">
        <div class="container-footer">
          <div class="my-2">
            <h3 tabindex="0">Contact Us</h3>
            <div>
              <a href="https://www.linkedin.com/in/jovitaamelinda/" class="d-block" target="_blank"><button tabindex="-1" class="btn w-100 contact-person"><li>Jovita Amelinda</li></button></a>
              <a href="https://www.linkedin.com/in/muhamad-fajar-yudhistira-herjanto-33b761249/" class="d-block" target="_blank"><button tabindex="-1" class="btn w-100 contact-person"><li>Muhammad Fajar Yudhistira H</li></button></a>
              <a href="https://www.linkedin.com/in/luthfi-khairullah-876667216/" class="d-block" target="_blank"><button tabindex="-1" class="btn w-100 contact-person"><li>Muhammad Luthfi Khairullah</li></button></a>
              <a href="#" class="d-block" target="_blank"><button tabindex="-1" class="btn w-100 contact-person"><li>Siti Mujadilah</li></button></a>
            </div>
          </div>
          <div class="my-2">
            <h3 tabindex="0">Features</h3>
            <div id="link-to">
              <a href="#/forums" class="d-block"><button tabindex="-1" class="btn w-100 footer-features"><li>Forums</li></button></a>
              <a href="#/jobs" class="d-block"><button tabindex="-1" class="btn w-100 footer-features"><li>Jobs</li></button></a>
            </div>
          </div>
          <div class="my-2">
            <h3 tabindex="0">Webeer</h3>
            <div>
              <a href="#/about" class="d-block"><button tabindex="-1" class="btn w-100 footer-about"><li>About</li></button></a>
            </div>
          </div>
        </div>
        <p class="text-center fw-bold" tabindex="0">Copyright &copy; 2022 Webeer</p>
      </footer>
      <login-modal></login-modal>
    `;
    const linkto = document.querySelector('#link-to');
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken === null) {
      linkto.innerHTML = `
        <div class="w-100">
          <a class="d-block"><button class="btn footer-features w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal"><li>Forums</li></button></a>
        </div>
        <div class="w-100">
          <a class="d-block"><button class="btn footer-features w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal"><li>Jobs</li></button></a>
        </div>
      `;
      localStorage.setItem('login', 'false');
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      window.location.href();
      localStorage.setItem('login', 'true');
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
      document.location = '#/forums';
      localStorage.setItem('login', 'true');
    } else {
      linkto.innerHTML = `
        <div class="w-100">
          <a class="d-block"><button class="footer-features w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"><li>Forums</li></button></a>
        </div>
        <div class="w-100">
          <a class="d-block"><button class="footer-features w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"><li>Jobs</li></button></a>
        </div>
      `;
      localStorage.clear();
    }
  }
}
customElements.define('footer-bar', Footer);
