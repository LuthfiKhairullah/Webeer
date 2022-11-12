class message extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="message">
      <span class="message-text"></span>
      <div id="container-bar" class="container-bar">
        <div id="progress-bar"></div>
      </div>
    </div>`;
  }
}
customElements.define('message-container', message);
