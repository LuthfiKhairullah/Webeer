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
              <a href="#" class="contact-person"><li>Jovita Amelinda</li></a>
              <a href="#" class="contact-person"><li>Muhammad Fajar Yudhistira H</li></a>
              <a href="#" class="contact-person"><li>Muhammad Luthfi Khairullah</li></a>
              <a href="#" class="contact-person"><li>Siti Mujadilah</li></a>
            </div>
          </div>
          <div class="my-2">
            <h3>Features</h3>
            <div>
              <a href="#/forums" class="footer-features"><li>Forums</li></a>
              <a href="#/jobs" class="footer-features"><li>Jobs</li></a>
            </div>
          </div>
        </div>
        <p class="text-center fw-bold">Copyright &copy; 2022 Webeer</p>
      </footer>
    `;
  }
}
customElements.define('footer-bar', Footer);
