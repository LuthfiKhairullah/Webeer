import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const Login = {
  async render() {
    return `
    <modal-not-login></modal-not-login>
       <div id="container-login">
        <div class ="card">
        <img class="lazyload" src="./asset/hero-login.png">
          <form id="form-login">
            <div class="mb-3">
              <input type="email" class="form-control" id="emailUser" placeholder="Enter your email">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="pwdUser" placeholder="Enter your password">
            </div>
            <p>You don't have an account yet? <span> <a href="#/register">Sign Up</a> </span> </p>
            <button type="submit" class="btn btn-primary mb-3">Login</button>
          </form>
        </div>
        </div>
        <message-container></message-container>
        <div class="test"></div>
        `;
  },
  afterRender() {
    const formLogin = document.querySelector('#form-login');
    const idUser = document.querySelector('#emailUser');
    const pwUser = document.querySelector('#pwdUser');
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);

    // FORM LOGIN
    console.log(message);
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = await User.Login({
        email: idUser.value,
        password: pwUser.value,
      });
      if (data.error) {
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
        setTimeout(() => {
          document.location = '#/profile';
          window.location.reload();
        }, 1500);
      }
    });
  },
};
export default Login;
