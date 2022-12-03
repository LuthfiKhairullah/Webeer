import JobSource from '../../data/jobSource';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';
import '../components/detailCompany';
import { createBodyOtherCompany, createDetailCompanySkeletonTemplate, createItemJobCompanyOther } from '../templates/template-creator';

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
    const bodyContainer = document.querySelector('.body-profile-company-other');
    const btnJob = document.querySelector('#jobs-other-company');
    const btnAbout = document.querySelector('#about-other-company');
    const job = await JobSource.getCompanyJobOther(url.id);
    console.log(job);

    btnJob.addEventListener('click', async (event) => {
      event.preventDefault();
      btnAbout.classList.remove('activated');
      btnJob.classList.add('activated');
      bodyContainer.innerHTML = '';
      job.forEach((jobs) => {
        bodyContainer.innerHTML += createItemJobCompanyOther(jobs);
      });
    });
    btnAbout.addEventListener('click', async (event) => {
      event.preventDefault();
      btnAbout.classList.add('activated');
      btnJob.classList.remove('activated');
      bodyContainer.innerHTML = '';
      bodyContainer.innerHTML = createBodyOtherCompany(company);
    });
  },
};
export default profileCompanyOther;