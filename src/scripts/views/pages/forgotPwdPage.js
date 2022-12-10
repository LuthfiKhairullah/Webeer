import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const resetPwdPage = {
  async render() {
    return `<div class="container-resetpwd">
    <h2>Forgot Password</h2>
    <form id="reset-password-user">
    <div class="input-group mb-3" style="border:1px solid black">
        <span class="input-group-text text-light" style="background-color:#344D67; border:none; border-radius:0px;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
          <div class="form-floating">
            <input style="border:none;" type="email" class="form-control form-control-lg" id="email-reset-password" placeholder="Enter your email" required>
          <label for="emailUser">Email Address</label>
          </div>
      </div>
        <button type="submit" class="btn w-100 text-light p-3" style="background-color:#344D67;">Submit</button>
      </form>
    </div>
    <message-container></message-container>
    <login-modal></login-modal>
    <footer-lite class="p-3 footer-lite-profile" style="background-color:#f3f2ef;"></footer-lite>`;
  },
  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const formReset = document.getElementById('reset-password-user');
    formReset.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = await User.EmailResetPassword({
        email: document.getElementById('email-reset-password').value,
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
      }
    });
    const formLogin = document.querySelector('#form-login');
    const idUser = document.querySelector('#emailUser');
    const pwUser = document.querySelector('#pwdUser');
    formLogin.addEventListener('submit', async (event) => {
      const loginContainer = document.querySelector('#container-login');
      loginContainer.classList.add('cursor-progress');
      event.preventDefault();
      const data = await User.Login({
        email: idUser.value,
        password: pwUser.value,
      });
      if (data.error) {
        loginContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = `${data.error}`;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = `${data.data.message}`;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        const getToken = localStorage.getItem('token');
        const getRole = localStorage.getItem('role');
        if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
          setTimeout(() => {
            document.location = '#/dashboard';
            document.location.reload();
          }, 2000);
          localStorage.setItem('login', 'true');
        } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
          setTimeout(() => {
            document.location = '#/profile';
            document.location.reload();
          }, 2000);
          localStorage.setItem('login', 'true');
        }
      }
    });
  },
};
export default resetPwdPage;