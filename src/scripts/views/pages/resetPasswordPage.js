import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';

const ResetPassword = {
  async render() {
    return `<div class="container-reset-password" style="padding:10px;">
    <form id="reset-password" >
    <h2 class="fw-bold" style="border-bottom:3px solid gray; margin-bottom:20px;"> RESET PASSWORD </h2>
      <div class="input-group mb-3 password-container">
      <span class="input-group-text text-light" style="background-color:#344D67;"><i class="fa fa-lock" aria-hidden="true"></i></span>
        <div class="form-floating">
          <input type="password"  minlength="8" maxlength="16" class="form-control" id="inputPassword" placeholder="Enter your password" required>
          <label for="pwdUser"> New Password</label>
        </div>
      </div>
  <div class="input-group mb-3 password-container">
  <span class="input-group-text text-light" style="background-color:#344D67;"><i class="fa fa-lock" aria-hidden="true"></i></span>
    <div class="form-floating">
      <input type="password"  minlength="8" maxlength="16" class="form-control" id="inputPasswordConfirm" placeholder="Enter your password" required>
      <label for="pwdUser">Confirm Password</label>
    </div>
  </div>
    <button class="btn w-100 text-light p-3" style="background-color:#344D67;">Confirm</button>
    </form>
    </div>
    <footer-lite class="p-3 footer-lite-profile" style="background-color:#f3f2ef;"></footer-lite>
    <login-modal></login-modal>
    <message-container></message-container>`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const form = document.getElementById('reset-password');
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reset = await User.ForgetPwd(url.id, {
        newPassword: document.getElementById('inputPassword').value,
        confirmPassword: document.getElementById('inputPasswordConfirm').value,
      });
      if (reset.error) {
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = reset.error;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = reset.message;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        setTimeout(() => document.location = '#/', 1500);
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
export default ResetPassword;