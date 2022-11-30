import UrlParser from '../../routes/urlParser';
import JobSource from '../../data/jobSource';
import '../components/detailJob';

const DetailJobPage = {
  async render() {
    return `
        <detail-job></detail-job>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jobs = await JobSource.getJobsDetail(url.id);
    console.log(jobs.data);
    const container = document.querySelector('detail-job');
    container.jobs = jobs.data.data;
  },
};
export default DetailJobPage;