class modalNotLogin extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="modal-error">
    <div class="container-error">
    <p>Maaf Anda Harus Login Terlebih Dahulu</p>
    </div>
    </div>`;
  }
}

customElements.define('modal-not-login', modalNotLogin);