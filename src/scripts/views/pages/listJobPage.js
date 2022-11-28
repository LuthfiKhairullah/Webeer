import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';
import '../components/userProfile';
import JobSource from '../../data/jobSource';
import { createCardJobCompany, createFormEditJob } from '../templates/template-creator';

const listJobPage = {
  async render() {
    return `
    <div class="container-company"></div>
    <message-container></message-container>
        `;
  },
  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const user = await User.getUser();
    console.log(user);
    const itemJob = await JobSource.getCompanyJob();
    itemJob.data.data.forEach((job) => {
      document.querySelector('.container-company').innerHTML += createCardJobCompany(job);
    });
    const btnDelete = document.querySelectorAll('#delete-job');
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click', (event) => {
        event.preventDefault();
        console.log(btnDelete[i].value);
        const btnConfirmDelete = document.querySelector('#delete-this-job');
        btnConfirmDelete.addEventListener('click', async (event) => {
          event.preventDefault();
          const data = await JobSource.DeleteJob(btnDelete[i].value);
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
            messageText.innerHTML = data.message;
            messageTitle.innerHTML = 'SUCCESS';
            message.show();

            setTimeout(() => document.location = '#/list', 1000);
          }
        });
      });
    }
    const btnEdit = document.querySelectorAll('#edit-job');
    const containerEdit = document.querySelector('#container-edit');
    console.log(btnEdit);
    for (let i = 0; i < btnDelete.length; i++) {
      btnEdit[i].addEventListener('click', async (event) => {
        event.preventDefault();
        const data = await JobSource.getJobsDetail(btnDelete[i].value);
        containerEdit.innerHTML = createFormEditJob(data.data.data);
        const formEdit = document.querySelector('#form-edit-job');
        const level = document.querySelector('#level-job');
        const time = document.querySelector('#time-job');
        const place = document.querySelector('#place-job');
        formEdit.addEventListener('submit', async (event) => {
          event.preventDefault();
          const getLevel = level.value;
          const getTime = time.value;
          const getPlace = place.value;
          const dataEdit = await JobSource.EditJob(btnDelete[i].value, {
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
          if (dataEdit.error) {
            messageText.classList.remove('text-bg-success');
            messageTitle.classList.remove('text-success');
            messageText.classList.add('text-bg-warning');
            messageTitle.classList.add('text-warning');
            messageText.innerHTML = dataEdit.error;
            messageTitle.innerHTML = 'WARNING';
            message.show();
          } else {
            console.log(dataEdit.data.message)
            messageText.classList.remove('text-bg-warning');
            messageTitle.classList.remove('text-warning');
            messageText.classList.add('text-bg-success');
            messageTitle.classList.add('text-success');
            messageText.innerHTML = dataEdit.data.message;
            messageTitle.innerHTML = 'SUCCESS';
            message.show();
          }
        });
      });
    }
  },
};

export default listJobPage;