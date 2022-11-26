import User from '../../data/loginSource';
import '../components/userProfile';
import JobSource from '../../data/jobSource';
import { createCardJobCompany } from '../templates/template-creator';
import { async } from 'regenerator-runtime';


const listJobPage = {
  async render() {
    return `
    <user-profile></user-profile>
    <div class="container-company"></div>
        `;
  },
  async afterRender() {
    const user = await User.getUser();
    console.log(user);
    const itemJob = await JobSource.getCompanyJob();
    itemJob.data.data.forEach((job) => {
      document.querySelector('.container-company').innerHTML += createCardJobCompany(job);
    });
    console.log(itemJob.data.data);
    console.log(itemJob.length);
    const btnDelete = document.querySelectorAll('#delete-job');
    console.log(btnDelete)
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click',(event) => {
        event.preventDefault();
        console.log(btnDelete[i].value);
        const btnConfirmDelete = document.querySelector('#delete-this-job');
        btnConfirmDelete.addEventListener('click', async(event)=>{
          event.preventDefault();
          const data = await JobSource.DeleteJob(btnDelete[i].value);
          console.log(data)
        })
      });
    }
  },
};

export default listJobPage;