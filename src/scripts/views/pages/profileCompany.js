import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';
import { createDetailCompanySkeletonTemplate, createProfileCompany } from '../templates/template-creator';

const profileCompany = {

  async render() {
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
      const dataPwd = await User.changePwdUser(btnPwd, {
        oldPassword: document.querySelector('#old-password').value,
        newPassword: document.querySelector('#new-password').value,
        confirmPassword: document.querySelector('#confirm-password').value,
      });
      if (dataPwd.error) {
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

        setTimeout(() => document.location = '#/company', 1000);
      }
    });
    const btnEditCompany = document.querySelector('#btn-edit-company').value;
    const formEditProfile = document.querySelector('#edit-profile-company');
    formEditProfile.addEventListener('submit', async (event) => {
      event.preventDefault();
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

        setTimeout(() => document.location = '#/company', 1000);
      }
    });
  },

};

export default profileCompany;