import {
  DetailJobsSkeleton,
  createItemJob,
  createDetailJob,
} from '../templates/template-creator';
import JobSource from '../../data/jobSource';

const jobsPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }
    return `
        <div id="container-page-jobs">
            <search-bar></search-bar>
            <div class="container-jobs">
                <div class="item-jobs scroll-item">
                    ${DetailJobsSkeleton(10)}
                </div>
                <div class="detail-jobs" id="detail">
                    <div class="card">
                        <img class="lazyload hero-job" src="./asset/hero-jobsDetail.png">
                        <p class="fw-bold text-muted"> Find a job according to your passion </p>
                    </div>
                </div>
            </div>
        </div>
        `;
  },
  async afterRender() {
    // Get data from API
    const job = await JobSource.getJobs();
    const jobItemContainer = document.querySelector('.item-jobs');
    jobItemContainer.innerHTML = '';
    job.data.data.forEach((jobs) => {
      jobItemContainer.innerHTML += createItemJob(jobs);
    });
    // Search
    const search = document.querySelector('.searchBar');
    const inputSearch = document.querySelector('#searchInput');
    search.addEventListener('submit', async (event) => {
      event.preventDefault();
      const getInputSearch = inputSearch.value;
      const getSearch = await JobSource.getJobsSearch(getInputSearch);
      jobItemContainer.innerHTML = '';
      console.log(getSearch.data.data.length);
      if (getSearch.data.data.length > 0) {
        getSearch.data.data.forEach((jobs) => {
          jobItemContainer.innerHTML += createItemJob(jobs);
          const btn = document.querySelectorAll('.btn-detail');
          console.log(btn);
          for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', async () => {
              event.preventDefault();
              const getBtnValue = btn[i].value;
              const detail = await JobSource.getJobsDetail(getBtnValue);
              const jobDetailContainer = document.querySelector('#detail');
              jobDetailContainer.innerHTML = createDetailJob(detail.data.data);
            });
          }
        });
      } else {
        jobItemContainer.innerHTML = `<div class = "card-item text-center">
        <i class="fa fa-exclamation-triangle fa-4x my-5 text-secondary" aria-hidden="true"></i>
        <p class="fw-bold fs-6 text-secondary"> Not Found </p>
        </div>`;
      }
    });
    // Detail Click
    const btn = document.querySelectorAll('.btn-detail');
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', async (event) => {
        event.preventDefault();
        const getBtnValue = btn[i].value;
        const detail = await JobSource.getJobsDetail(getBtnValue);
        const jobDetailContainer = document.querySelector('#detail');
        jobDetailContainer.innerHTML = createDetailJob(detail.data.data);
      });
    }
  },
};
export default jobsPage;
