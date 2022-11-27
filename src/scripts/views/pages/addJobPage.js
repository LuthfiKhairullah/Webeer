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
    <div class="container-add-job">
        <form id="job-form">
        <h5>Job Vacancy Details</h5>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Company name</label>
                <div class="col-sm-6">
                <input type="text" class="form-control  form-control-sm" id="company-job" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Job position</label>
                <div class="col-sm-6">
                <input type="text" class="form-control  form-control-sm" id="profession-job" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Company's addressn</label>
                <div class="col-sm-6">
                <input type="text" class="form-control  form-control-sm" id="address-job" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Company logo</label>
                <div class="col-sm-6">
                <input type="file" class="form-control  form-control-sm" id="image-job" >
                </div>
             </div>
            <h5>Rincian Kualifikasi Pekerja</h5>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Company description</label>
                    <div class="col-sm-6">
                        <textarea class="form-control" id="description-job" rows="4"></textarea>
                    </div>
             </div>
             <div class="mb-3 row">
             <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Job description</label>
                 <div class="col-sm-6">
                     <textarea class="form-control" id="descriptionProfession-job" rows="4"></textarea>
                 </div>
            </div>
             <div class="mb-3 row">
                 <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Level</label>
                    <div class="col-sm-2">
                        <select class="form-select" aria-label="Default select example"  id="level-job">
                            <option value="Entry">Entry</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>
                 <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Work from</label>
                    <div class="col-sm-2">
                        <select class="form-select" aria-label="Default select example"  id="place-job">
                            <option value="Onsite">Onsite</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                 <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Time</label>
                    <div class="col-sm-2">
                    <select class="form-select" aria-label="Default select example"  id="time-job">
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>
                    </div>
            </div>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Salary</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control  form-control-sm" id="salary-job" >
                </div>
           </div>
           <div class="mb-3 row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Qualification</label>
                <div class="col-sm-6">
                    <textarea class="form-control" id="qualification-job" rows="4"></textarea>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Company Links</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control  form-control-sm" id="link-job" >
                    </div>
           </div>
           <button class="btn btn-primary"> Submit </button>
        </form>
    </div>`;
  },

  async afterRender() {
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
        timeWork: getTime,
        workplace: getPlace,
        link: document.querySelector('#link-job').value,
        qualification: document.querySelector('#qualification-job').value,
        image: document.querySelector('#image-job').files[0],
      });
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  },

};
export default addJobPage;