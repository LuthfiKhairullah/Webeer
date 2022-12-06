import {
  DetailJobsSkeleton,
  createItemJob,
  createDetailJob,
} from '../templates/template-creator';
import JobSource from '../../data/jobSource';

const jobsPage = {
  async render() {
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
      document.location = '#/jobs';
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
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
                    <picture>
                        <source media="(max-width:600px)" srcset="./assetpng/hero-jobsDetail.png-small">
                        <img tabindex= "0" class="lazyload hero-job" src="./assetpng/hero-jobsDetail-large.png" alt="hero jobdetail">
                        <p  tabindex= "0" class="fw-bold text-muted"> Find a job according to your passion </p>
                    </picture>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-3" style="background-color:#f3f2ef;">
        <footer-lite></footer-lite>
      </div
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
      if (getInputSearch.length > 0) {
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
      } else {
        jobItemContainer.innerHTML = '';
        job.data.data.forEach((jobs) => {
          jobItemContainer.innerHTML += createItemJob(jobs);
        });
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
