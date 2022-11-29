import { createDetailJobPageTemplate } from '../templates/template-creator';

class DetailJob extends HTMLElement {
  constructor() {
    super();
  }

  set jobs(jobs) {
    this._jobs = jobs;
    this.render();
  }

  render() {
    this.innerHTML += createDetailJobPageTemplate(this._jobs);
  }
}

customElements.define('detail-job', DetailJob);