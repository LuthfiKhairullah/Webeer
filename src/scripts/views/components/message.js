class Message extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <strong class="me-auto toast-title"></strong>
        </div>
        <div class="toast-body">
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define('message-container', Message);
