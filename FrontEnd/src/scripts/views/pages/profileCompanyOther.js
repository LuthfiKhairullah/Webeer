import JobSource from '../../data/jobSource';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';
import '../components/detailCompany';
import { createBodyOtherCompany, createDetailCompanySkeletonTemplate, createItemJobCompanyOther } from '../templates/template-creator';

const profileCompanyOther = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken === null) {
      document.location = '/';
      localStorage.setItem('login', 'false');
      window.reload();
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      window.location.href();
      localStorage.setItem('login', 'true');
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
      document.location = `#/profilecompany/${url.id}`;
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }
    return `<div class="container-company-profile-other">
    ${createDetailCompanySkeletonTemplate()}
        </div>
        <div class="p-3" style="background-color:#f3f2ef;">
          <footer-lite></footer-lite>
        </div>
      `;
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