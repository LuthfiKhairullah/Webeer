class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
    <h3>Footer</h3>
    </div>`;
  }
}
customElements.define('footer-bar', Footer);
