class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer id="footer">
        <div class="container-footer">
          <div class="my-2">
            <h3>Contact Us</h3>
            <div>
              <a href="https://www.linkedin.com/in/jovitaamelinda/" class="contact-person" target="_blank"><li>Jovita Amelinda</li></a>
              <a href="https://www.linkedin.com/in/muhamad-fajar-yudhistira-herjanto-33b761249/" class="contact-person" target="_blank"><li>Muhammad Fajar Yudhistira H</li></a>
              <a href="https://www.linkedin.com/in/luthfi-khairullah-876667216/" class="contact-person" target="_blank"><li>Muhammad Luthfi Khairullah</li></a>
              <a href="#" class="contact-person" target="_blank"><li>Siti Mujadilah</li></a>
            </div>
          </div>
          <div class="my-2">
            <h3>Features</h3>
            <div>
              <a href="#/forums" class="footer-features"><li>Forums</li></a>
              <a href="#/jobs" class="footer-features"><li>Jobs</li></a>
            </div>
          </div>
          <div class="my-2">
            <h3>Webeer</h3>
            <div>
              <a href="#/about" class="footer-about"><li>About</li></a>
            </div>
          </div>
        </div>
        <p class="text-center fw-bold">Copyright &copy; 2022 Webeer</p>
      </footer>
    `;
  }
}
customElements.define('footer-bar', Footer);
