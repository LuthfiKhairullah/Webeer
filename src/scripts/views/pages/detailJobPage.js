import UrlParser from '../../routes/urlParser';
import JobSource from '../../data/jobSource';
import '../components/detailJob';
import { createDetailJobPageSkeleton } from '../templates/template-creator';

const DetailJobPage = {
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
      document.location = `#/detailjob/${url.id}`;
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }
    return `
        <div class="container-detail-job-page">
        ${createDetailJobPageSkeleton()}
        </div>
        <div class="p-3" style="background-color:#f3f2ef;">
        <footer-lite></footer-lite>
      </div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jobs = await JobSource.getJobsDetail(url.id);
    const containerDetail = document.querySelector('.container-detail-job-page');
    containerDetail.innerHTML = '<detail-job></detail-job>';
    const container = document.querySelector('detail-job');
    container.jobs = jobs.data.data;
  },
};
export default DetailJobPage;