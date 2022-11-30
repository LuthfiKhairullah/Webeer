import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import { changePasswordTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/urlParser';
import User from '../../data/loginSource';

const PasswordEditPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }
    return `
        ${changePasswordTemplate}
        <message-container></message-container>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const editButton = document.querySelector('#editButton');
    console.log(url);
    const form = document.querySelector('#form-changepwd');
    console.log(form);
    const changePasswordContainer = document.querySelector('.container-change-page');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      changePasswordContainer.classList.add('cursor-progress');
      const data = await User.changePwdUser(url.id, {
        oldPassword: document.querySelector('#oldPwd').value,
        newPassword: document.querySelector('#newPwd').value,
        confirmPassword: document.querySelector('#confirmPwd').value,
      });
      if (data.error) {
        console.log(data.error);
        changePasswordContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerText = `${data.error}`;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        console.log(data);
        editButton.setAttribute('disabled', '');
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerText = `${data.message}`;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        setTimeout(() => document.location = '#/profile', 1000);
      }
    });
  },
};
export default PasswordEditPage;