class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="search">
        <form class="d-flex searchBar">
          <input class="form-control me-2" id="searchInput" type="search" placeholder="Search by job" aria-label="Search">
          <button class="btn btn-secondary" type="submit" style="background-color: #344D67">Search</button>
        </form>
      </div>
    `;
  }
}
customElements.define('search-bar', searchBar);
