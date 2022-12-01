class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer id="footer">
    <p>Copyright &copy; 2022 Webeer</p>
    </footer>`;
  }
}
customElements.define('footer-bar', Footer);
