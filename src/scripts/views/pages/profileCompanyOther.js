import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';
import '../components/detailCompany';
import { createDetailCompanySkeletonTemplate } from '../templates/template-creator';

const profileCompanyOther = {
  async render() {
    return `<div class="container-company-profile-other">
    ${createDetailCompanySkeletonTemplate()}
        </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const company = await User.getDetailUser(url.id);
    const container = document.querySelector('.container-company-profile-other');
    container.innerHTML = '<detail-company></detail-company>';
    const containerDetail = document.querySelector('detail-company');
    containerDetail.company = company;
    console.log(company);
  },
};
export default profileCompanyOther;