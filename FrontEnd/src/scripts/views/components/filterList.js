import { createFilterListTemplate } from '../templates/template-creator';

class FilterList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = createFilterListTemplate();
  }
}

customElements.define('filter-list', FilterList);
