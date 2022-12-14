import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const verificationPage = {
  async render() {
    return `
    <div class="container-verification">
        <h2 tabindex= "0" class="fw-bold">Verification</h2>
          <p tabindex= "0" >Please check your email, if the code was not sent, please press resend</p>
          <button class =" btn text-light mb-5" id="resend" style="background-color:#344D67;">Resend OTP</button>
          <form id="verifikasi-user">
            <div class="mb-3">
              <input type="text" class="form-control form-control-lg" id="otp" placeholder="Enter your OTP code" required>
            </div>
            <button class="btn w-100 text-light" id="submit" style="background-color:#344D67;">Submit</button>
          </form>
    </div>
    <login-modal></login-modal>
    <message-container></message-container>
    <footer-lite class="p-3 footer-lite-profile" style="background-color:#f3f2ef;"></footer-lite>
    `;
  },
  async afterRender() {
    const resend = document.querySelector('#resend');
    const getId = localStorage.getItem('idUser').replaceAll('"', '');
    const getEmail = localStorage.getItem('email').replaceAll('"', '');
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const resendButton = document.querySelector('#resend');
    const submitButton = document.querySelector('#submit');
    const verificationContainer = document.querySelector('.container-verification');
    resend.addEventListener('click', async (event) => {
      event.preventDefault();
      verificationContainer.classList.add('cursor-progress');
      resendButton.setAttribute('disabled', '');
      const data = await User.Resend({
        idUser: getId,
        email: getEmail,
      });
      if (data.error) {
        verificationContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = `${data.error}`;
        messageTitle.innerHTML = 'WARNING';
        message.show();
        resendButton.removeAttribute('disabled');
      } else {
        verificationContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = `${data.data.message}`;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        resendButton.removeAttribute('disabled');
      }
    });

    const form = document.querySelector('#verifikasi-user');
    form.addEventListener('submit', async (event) => {
      verificationContainer.classList.add('cursor-progress');
      event.preventDefault();
      const data = await User.Verification({
        idUser: getId,
        OTP: document.querySelector('#otp').value,
      });
      if (data.error) {
        verificationContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = `${data.error}`;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        submitButton.setAttribute('disabled', '');
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = `${data.data.message}`;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        localStorage.removeItem('idUser');
        localStorage.removeItem('email');
        setTimeout(() => document.location = '#/register', 1500);
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
export default verificationPage;