import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';
import { createDetailCompanySkeletonTemplate, createProfileCompany } from '../templates/template-creator';

const profileCompany = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken === null) {
      document.location = '/';
      localStorage.setItem('login', 'false');
      window.reload();
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      document.location = '#/company';
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
        <div class="container-company-profile">
        ${createDetailCompanySkeletonTemplate()}
        </div>
        <message-container></message-container>
        `;
  },

  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const data = await User.getUser();
    const container = document.querySelector('.container-company-profile');
    container.innerHTML = createProfileCompany(data);
    const formPwd = document.querySelector('#edit-password-company');
    const btnPwd = document.querySelector('#btn-edit-pwd').value;
    formPwd.addEventListener('submit', async (event) => {
      event.preventDefault();
      const staticBackdropModal = document.querySelector('#staticBackdrop');
      staticBackdropModal.classList.add('cursor-progress');
      const editPwdButton = document.querySelector('#editPwdButton');
      editPwdButton.setAttribute('disabled', '');
      const dataPwd = await User.changePwdUser(btnPwd, {
        oldPassword: document.querySelector('#old-password').value,
        newPassword: document.querySelector('#new-password').value,
        confirmPassword: document.querySelector('#confirm-password').value,
      });
      if (dataPwd.error) {
        editPwdButton.removeAttribute('disabled');
        staticBackdropModal.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = dataPwd.error;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = dataPwd.message;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        setTimeout(() => document.location.reload(), 1000);
      }
    });
    const btnEditCompany = document.querySelector('#btn-edit-company').value;
    const inputUsername = document.querySelector('#edit-username');
    const inputBio = document.querySelector('#edit-about');
    const inputAddress = document.querySelector('#edit-address');
    const inputIndustry = document.querySelector('#edit-industry');
    const inputEmploye = document.querySelector('#edit-employee');
    const inputEmploye2 = document.querySelector('#edit-employee2');
    const inputFounded = document.querySelector('#edit-founded');
    const inputWebsite = document.querySelector('#edit-website');
    const inputSpecialities = document.querySelector('#edit-specialities');
    inputUsername.value = data.username;
    inputBio.value = data.bio;
    inputAddress.value = data.address;
    inputIndustry.value = data.industry;
    inputEmploye.value = data.employee;
    inputEmploye2.value = data.employee2;
    inputFounded.value = data.founded;
    inputWebsite.value = data.website;
    inputSpecialities.value = data.specialities;
    const formEditProfile = document.querySelector('#edit-profile-company');
    formEditProfile.addEventListener('submit', async (event) => {
      event.preventDefault();
      const editSaveButton = document.querySelector('#editSaveButton');
      if (inputUsername.value === ''
      || inputBio.value === ''
      || inputAddress.value === ''
      || inputIndustry.value === ''
      || inputEmploye.value === ''
      || inputEmploye2.value === ''
      || inputFounded.value === ''
      || inputWebsite.value === ''
      || inputSpecialities.value === '') {
        if (inputUsername.value === '') {
          messageText.innerHTML = 'Username can\'t null';
          inputUsername.focus();
        } else if (inputBio.value === '') {
          messageText.innerHTML = 'Overview can\'t null';
          inputBio.focus();
        } else if (inputAddress.value === '') {
          messageText.innerHTML = 'Overview can\'t null';
          inputAddress.focus();
        } else if (inputEmploye.value === '') {
          messageText.innerHTML = 'Employe range can\'t null';
          inputEmploye.focus();
        } else if (inputEmploye2.value === '') {
          messageText.innerHTML = 'Employe range can\'t null';
          inputEmploye2.focus();
        } else if (inputFounded.value === '') {
          messageText.innerHTML = 'Date Founded can\'t null';
          inputFounded.focus();
        } else if (inputWebsite.value === '') {
          messageText.innerHTML = 'Website company can\'t null';
          inputWebsite.focus();
        } else if (inputSpecialities.value === '') {
          messageText.innerHTML = 'Specialities company can\'t null';
          inputSpecialities.focus();
        }
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
      } else {
        const staticBackdropModal = document.querySelector('#staticBackdrop2');
        staticBackdropModal.classList.add('cursor-progress');
        editSaveButton.setAttribute('disabled', '');
        const data = await User.Edit(btnEditCompany, {
          username: document.querySelector('#edit-username').value,
          bio: document.querySelector('#edit-about').value,
          address: document.querySelector('#edit-address').value,
          industry: document.querySelector('#edit-industry').value,
          employee: document.querySelector('#edit-employee').value,
          employee2: document.querySelector('#edit-employee2').value,
          founded: document.querySelector('#edit-founded').value,
          website: document.querySelector('#edit-website').value,
          specialities: document.querySelector('#edit-specialities').value,
          image: document.querySelector('#edit-logo-company').files[0],
        });
        if (data.error) {
          editModalContainer.classList.remove('cursor-progress');
          messageText.classList.remove('text-bg-success');
          messageTitle.classList.remove('text-success');
          messageText.classList.add('text-bg-warning');
          messageTitle.classList.add('text-warning');
          messageText.innerHTML = 'Username can\'t null';
          messageTitle.innerHTML = 'WARNING';
          message.show();
          console.log(data.error);
        } else {
          messageText.classList.remove('text-bg-warning');
          messageTitle.classList.remove('text-warning');
          messageText.classList.add('text-bg-success');
          messageTitle.classList.add('text-success');
          messageText.innerHTML = data.data.message;
          messageTitle.innerHTML = 'SUCCESS';
          message.show();
          console.log(data);
          setTimeout(() => document.location.reload(), 1000);
        }
      }
    });
  },

};

export default profileCompany;