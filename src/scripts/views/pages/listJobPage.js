import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import '../components/userProfile';
import JobSource from '../../data/jobSource';
import { createCardJobCompany, createCardJobCompanySkeleton, createFormEditJob } from '../templates/template-creator';

const listJobPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken === null) {
      document.location = '/';
      localStorage.setItem('login', 'false');
      window.reload();
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      document.location = '#/list';
      localStorage.setItem('login', 'true');
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
      window.location.href();
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }
    return `
    <div class="container-company-list">
    ${createCardJobCompanySkeleton(6)}
    </div>
    <message-container></message-container>
        `;
  },
  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const container = document.querySelector('.container-company-list');
    const message = new Toast(messageContainer);
    const itemJob = await JobSource.getCompanyJob();
    container.innerHTML = '';
    itemJob.data.data.forEach((job) => {
      container.innerHTML += createCardJobCompany(job);
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

            setTimeout(() => document.location.reload(), 1000);
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
        const editJobButton = document.querySelector('#editJobButton');
        const editModalContainer = document.querySelector('#exampleModal');
        formEdit.addEventListener('submit', async (event) => {
          event.preventDefault();
          editModalContainer.classList.add('cursor-progress');
          const getLevel = level.value;
          const getTime = time.value;
          const getPlace = place.value;
          const inputCompany = document.querySelector('#company-job');
          const inputProfession = document.querySelector('#profession-job');
          const inputAddress = document.querySelector('#address-job');
          const inputDescriptionCompany = document.querySelector('#description-job');
          const inputDescriptionProfession = document.querySelector('#descriptionProfession-job');
          const inputSalary = document.querySelector('#salary-job');
          const inputSalary2 = document.querySelector('#salary-job2');
          const inputLink = document.querySelector('#link-job');
          const inputQualification = document.querySelector('#qualification-job');
          if (inputCompany.value === ''
           || inputProfession.value === ''
           || inputAddress.value === ''
           || inputDescriptionCompany.value === ''
           || inputDescriptionProfession.value === ''
           || inputSalary.value === ''
           || inputSalary2.value === ''
           || inputLink.value === ''
           || inputQualification.value === ''
          ) {
            if (inputCompany.value === '') {
              messageText.innerHTML = 'Company name can\'t null';
              inputCompany.focus();
            } else if (inputProfession.value === '') {
              messageText.innerHTML = 'Job position can\'t null';
              inputProfession.focus();
            } else if (inputAddress.value === '') {
              messageText.innerHTML = 'Company\'s address can\'t null';
              inputAddress.focus();
            } else if (inputDescriptionCompany.value === '') {
              messageText.innerHTML = 'Company description can\'t null';
              inputDescriptionCompany.focus();
            } else if (inputDescriptionProfession.value === '') {
              messageText.innerHTML = 'Job description can\'t null';
              inputDescriptionProfession.focus();
            } else if (inputSalary.value === '') {
              messageText.innerHTML = 'Range salary can\'t null';
              inputSalary.focus();
            } else if (inputSalary2.value === '') {
              messageText.innerHTML = 'Range salary can\'t null';
              inputSalary2.focus();
            } else if (inputQualification.value === '') {
              messageText.innerHTML = 'Qualification can\'t null';
              inputQualification.focus();
            } else if (inputLink.value === '') {
              messageText.innerHTML = 'Company links can\'t null';
              inputLink.focus();
            }
            editModalContainer.classList.remove('cursor-progress');
            messageText.classList.remove('text-bg-success');
            messageTitle.classList.remove('text-success');
            messageText.classList.add('text-bg-warning');
            messageTitle.classList.add('text-warning');
            messageTitle.innerHTML = 'SUCCESS';
            message.show();
          } else {
            editJobButton.setAttribute('disabled', '');
            const dataEdit = await JobSource.EditJob(btnDelete[i].value, {
              company: inputCompany.value,
              profession: inputProfession.value,
              address: inputAddress.value,
              descriptionCompany: inputDescriptionCompany.value,
              descriptionProfession: inputDescriptionProfession.value,
              level: getLevel,
              salary: inputSalary.value,
              salary2: inputSalary2.value,
              timeWork: getTime,
              workplace: getPlace,
              link: inputLink.value,
              qualification: inputQualification.value,
              image: document.querySelector('#image-job').files[0],
            });
            if (dataEdit.error) {
              editModalContainer.classList.remove('cursor-progress');
              editJobButton.removeAttribute('disabled');
              messageText.classList.remove('text-bg-success');
              messageTitle.classList.remove('text-success');
              messageText.classList.add('text-bg-warning');
              messageTitle.classList.add('text-warning');
              messageText.innerHTML = dataEdit.error;
              messageTitle.innerHTML = 'WARNING';
              message.show();
            } else {
              console.log(dataEdit.data.message);
              messageText.classList.remove('text-bg-warning');
              messageTitle.classList.remove('text-warning');
              messageText.classList.add('text-bg-success');
              messageTitle.classList.add('text-success');
              messageText.innerHTML = dataEdit.data.message;
              messageTitle.innerHTML = 'SUCCESS';
              message.show();
              setTimeout(() => document.location.reload(), 1000);
            }
          }
        });
      });
    }
  },
};

export default listJobPage;