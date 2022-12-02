import UrlParser from '../../routes/urlParser';
import JobSource from '../../data/jobSource';
import '../components/detailJob';
import { createDetailJobPageSkeleton } from '../templates/template-creator';

const DetailJobPage = {
  async render() {
    return `
        <div class="container-detail-job-page">
        ${createDetailJobPageSkeleton()}
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