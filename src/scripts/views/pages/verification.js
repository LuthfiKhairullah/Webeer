import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const verificationPage = {
  async render() {
    return `
    <div class="container-verification">
      <div class="card">
        <img src="./asset/verified.png" class="card-img-top lazyload">
        <div class="card-body text-center">
        <h5 class="fw-bold">Verification</h5>
          <p>Please check your email, if the code was not sent, please press resend</p>
          <button class =" btn btn-primary mb-5" id="resend">Resend OTP</button>
          <form id="verifikasi-user">
            <div class="mb-4">
              <input type="text" class="form-control" id="otp" placeholder="Enter your OTP code" required>
            </div>
            <button class="btn btn-primary" id="submit" style="width:100px; border-radius:30px;">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <message-container></message-container>
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
    console.log(getEmail);
    console.log('Get Item :', getId);
    // eslint-disable-next-line no-unused-expressions
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
        console.log(data);
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
        setTimeout(() => document.location = '#/login', 1500);
      }
    });
  },
};
export default verificationPage;