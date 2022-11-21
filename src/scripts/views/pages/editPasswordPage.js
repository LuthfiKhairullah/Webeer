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
    const messageText = document.querySelector('.modal-body');
    const message = document.querySelector('.modal-title');
    console.log(url);
    const form = document.querySelector('#form-changepwd');
    console.log(form);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = await User.changePwdUser(url.id, {
        oldPassword: document.querySelector('#oldPwd').value,
        newPassword: document.querySelector('#newPwd').value,
        confirmPassword: document.querySelector('#confirmPwd').value,
      });
      if (data.error) {
        messageText.innerHTML = `${data.error}`;
        message.innerHTML = 'WARNING';
        message.classList.add('text-warning');
      }
      messageText.innerHTML = `${data.message}`;
      message.innerHTML = 'SUCCESS';
      message.classList.add('text-success');
    });
  },
};
export default PasswordEditPage;