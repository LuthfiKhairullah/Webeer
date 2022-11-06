class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="search">
        <form class="d-flex searchBar">
          <input class="form-control me-2" id="searchInput" type="search" placeholder="Masukkan pekerjaan yang sedang kamu cari" aria-label="Search">
          <button class="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    `;
  }
}
customElements.define('search-bar', searchBar);
