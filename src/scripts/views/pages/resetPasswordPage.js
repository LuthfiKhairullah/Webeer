import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';

const ResetPassword = {
  async render() {
    return `<div class="container-reset-password d-flex flex-wrap align-items-center justify-content-center" style="height:300px;">
    <img src="./asset/hero-forgot.png" style="width:200px; margin:20px;">
    <form id="reset-password" >
    <h2 class="fw-bold"> RESET PASSWORD </h2>
      <div class="input-group mb-3 password-container" style="border-bottom:1px solid black;">
      <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
        <div class="form-floating">
          <input style="border:none;" type="password" class="form-control" id="inputPassword" placeholder="Enter your password" required>
          <label for="pwdUser"> New Password</label>
        </div>
      </div>
  <div class="input-group mb-3 password-container" style="border-bottom:1px solid black;">
  <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
    <div class="form-floating">
      <input style="border:none;" type="password" class="form-control" id="inputPasswordConfirm" placeholder="Enter your password" required>
      <label for="pwdUser">Confirm Password</label>
    </div>
  </div>
    <button class="btn btn-primary">Confirm</button>
    </form>
    </div>
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
        setTimeout(() => document.location = '#/login', 1500);
      }
    });
  },
};
export default ResetPassword;