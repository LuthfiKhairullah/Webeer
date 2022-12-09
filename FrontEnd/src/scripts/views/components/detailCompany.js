import { createDetailCompanyTemplate } from '../templates/template-creator';

class DetailCompany extends HTMLElement {
  constructor() {
    super();
  }

  set company(company) {
    this._company = company;
    this.render();
  }

  render() {
    this.innerHTML += createDetailCompanyTemplate(this._company);
  }
}

customElements.define('detail-company', DetailCompany);