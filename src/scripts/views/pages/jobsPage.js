import { DetailJobsSkeleton, createItemJob, createDetailJob } from '../templates/template-creator';
import JobSource from '../../data/jobSource';
import UrlParser from '../../routes/urlParser';

const jobsPage = {
  async render() {
    return `
        <div id="container-page-jobs">
            <search-bar></search-bar>
            <div class="container-jobs">
                <div class="item-jobs">
                    ${DetailJobsSkeleton(10)}
                </div>
                <div class="detail-jobs" id="detail">
                    <div class="card">
                        <img src="./asset/hero-jobsDetail.png">
                        <p> Temukan pekerjaan sesuai dengan passion kamu </p>
                    </div>
                </div>
            </div>
        </div>
        `;
  },
  async afterRender() {
    const job = await JobSource.getJobs();
    const jobItemContainer = document.querySelector('.item-jobs');
    jobItemContainer.innerHTML = '';
    job.data.data.forEach((jobs) => {
      jobItemContainer.innerHTML += createItemJob(jobs);
    });
    const btn = document.querySelectorAll('.btn-detail');
    console.log(btn);
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', async () => {
        const test = btn[i].value;
        console.log(test);
        const detail = await JobSource.getJobsDetail(test);
        console.log(detail);
        const jobDetailContainer = document.querySelector('.card');
        jobDetailContainer.innerHTML = createDetailJob(detail.data.data);
      });
    }

    console.log(job.data.data);
  },
};
export default jobsPage;
