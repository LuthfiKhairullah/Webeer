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
              <a href="https://www.linkedin.com/in/jovitaamelinda/" class="contact-person" target="_blank"><li>Jovita Amelinda</li></a>
              <a href="https://www.linkedin.com/in/muhamad-fajar-yudhistira-herjanto-33b761249/" class="contact-person" target="_blank"><li>Muhammad Fajar Yudhistira H</li></a>
              <a href="https://www.linkedin.com/in/luthfi-khairullah-876667216/" class="contact-person" target="_blank"><li>Muhammad Luthfi Khairullah</li></a>
              <a href="#" class="contact-person" target="_blank"><li>Siti Mujadilah</li></a>
            </div>
          </div>
          <div class="my-2">
            <h3 tabindex="0">Features</h3>
            <div id="link-to">
              <a href="#/forums" class="footer-features"><li>Forums</li></a>
              <a href="#/jobs" class="footer-features"><li>Jobs</li></a>
            </div>
          </div>
          <div class="my-2">
            <h3 tabindex="0">Webeer</h3>
            <div>
              <a href="#/about" class="footer-about"><li>About</li></a>
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
          <button class="footer-features w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color: transparent; border: transparent;"><li>Forums</li></button>
        </div>
        <div class="w-100">
          <button class="footer-features w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color: transparent; border: transparent;"><li>Jobs</li></button>
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
          <button class="footer-features w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color: transparent; border: transparent;"><li>Forums</li></button>
        </div>
        <div class="w-100">
          <button class="footer-features w-100 text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color: transparent; border: transparent;"><li>Jobs</li></button>
        </div>
      `;
      localStorage.clear();
    }
  }
}
customElements.define('footer-bar', Footer);
