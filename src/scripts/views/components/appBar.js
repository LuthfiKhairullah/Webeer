class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Webeer</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/homepage">Homepage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/jobs">Jobs</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
        `;
  }
}

customElements.define('app-bar', AppBar);
