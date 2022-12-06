class FooterLite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer id="footer-lite" class="footer-general" style="background-color:#f3f2ef;">
        <p class="text-muted" tabindex="0">Copyright &copy; 2022 Webeer</p>
        <a href="#/about" class="text-muted">&nbsp;• About Us</a>
      </footer>
    `;
  }
}
customElements.define('footer-lite', FooterLite);
