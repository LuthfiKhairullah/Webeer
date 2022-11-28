import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import JobSource from '../../data/jobSource';

const addJobPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }
    return `
    <div class="container-company">
        <div class="container-add-job">
        <form id="job-form">
        <h3>Post a Job to Webeer</h3>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-form-label"><small>Company name</small></label>
                <div class="col-sm-6">
                <input type="text" class="form-control  form-control-md" id="company-job" placeholder="Enter your company name" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class=" col-form-label"><small>Job position</small></label>
                <div class="col-sm-6">
                <input type="text" class="form-control  form-control-md" id="profession-job" placeholder="Enter the job position">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class=" col-form-label"><small>Company's address</small></label>
                <div class="col-sm-6">
                <input type="text" class="form-control  form-control-md" id="address-job" placeholder="Enter the company address">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class=" col-form-label"><small>Company description</small></label>
                    <div class="col-sm-6">
                        <textarea class="form-control" id="description-job" rows="4" placeholder="Enter a company description"></textarea>
                    </div>
             </div>
             <div class="mb-3 row">
             <label for="exampleInputEmail1" class="col-form-label"><small>Job description</small></label>
                 <div class="col-sm-6">
                     <textarea class="form-control" id="descriptionProfession-job" rows="4" placeholder="Enter a job description"></textarea>
                 </div>
            </div>
             <div class="mb-3 row">
                 <label for="exampleInputEmail1" class="col-form-label"><small>Level</small></label>
                    <div class="col-sm-2">
                        <select class="form-select form-select-md" aria-label="Default select example"  id="level-job">
                            <option value="Entry">Entry</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>
                 <label for="exampleInputEmail1" class="col-form-label"><small>Work from</small></label>
                    <div class="col-sm-2">
                        <select class="form-select form-select-md" aria-label="Default select example"  id="place-job">
                            <option value="Onsite">Onsite</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                 <label for="exampleInputEmail1" class="col-form-label"><small>Time</small></label>
                    <div class="col-sm-2">
                    <select class="form-select form-select-md" aria-label="Default select example"  id="time-job">
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>
                    </div>
            </div>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class=" col-form-label"><small>Range Salary</small></label>
                <div class="col-sm-2">
                    <input type="text" class="form-control  form-control-md" id="salary-job" placeholder="Rp 0.000.000" >
                </div> -
                <div class="col-sm-2">
                <input type="text" class="form-control  form-control-md" id="salary-job2" placeholder="Rp 0.000.000">
                </div>  
           </div>
           <div class="mb-3 row">
            <label for="exampleInputEmail1" class="col-form-label"><small>Qualification</small></label>
                <div class="col-sm-6">
                    <textarea class="form-control" id="qualification-job" rows="4" placeholder="Enter the required qualifications"></textarea>
                </div>
            </div>
            <div class="mb-3 row">
                    <label for="exampleInputEmail1" class="col-form-label"><small>Company Links</small></label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control  form-control-md" id="link-job" placeholder="https://" >
                    </div>
           </div>
           <div class="mb-3 row">
                <label for="exampleInputEmail1" class=" col-form-label"><small>Company logo</small></label>
                <div class="col-sm-6">
                <input type="file" class="form-control  form-control-md" id="image-job" >
                </div>
             </div>
           <button class="btn btn-primary"> Submit </button>
        </form>
    </div>
    </div>
    <message-container></message-container>
    `;
  },

  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const form = document.querySelector('#job-form');
    const level = document.querySelector('#level-job');
    const time = document.querySelector('#time-job');
    const place = document.querySelector('#place-job');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const getLevel = level.value;
      const getTime = time.value;
      const getPlace = place.value;
      const data = await JobSource.addJobs({
        company: document.querySelector('#company-job').value,
        profession: document.querySelector('#profession-job').value,
        address: document.querySelector('#address-job').value,
        descriptionCompany: document.querySelector('#description-job').value,
        descriptionProfession: document.querySelector('#descriptionProfession-job').value,
        level: getLevel,
        salary: document.querySelector('#salary-job').value,
        salary2: document.querySelector('#salary-job2').value,
        timeWork: getTime,
        workplace: getPlace,
        link: document.querySelector('#link-job').value,
        qualification: document.querySelector('#qualification-job').value,
        image: document.querySelector('#image-job').files[0],
      });
      console.log(data);
      if (data.error) {
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = data.error;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = data.data.message;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
      }
    });
  },

};
export default addJobPage;