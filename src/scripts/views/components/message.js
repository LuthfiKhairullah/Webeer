class message extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="message">
    <p> Register <span class="message-text"></span> </p>
    </div>`;
  }
}
customElements.define('message-container', message);
