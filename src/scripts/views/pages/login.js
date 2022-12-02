import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const Login = {
  async render() {
    return `
    <modal-not-login></modal-not-login>
       <div id="container-login">
        <div class ="container-login-main" id="card-login">
          <div>
            <img class="lazyload" src="./asset/hero-login.png">
          </div>
        <div>
          <form id="form-login">
          <h2 class="fw-bolder">LOGIN</h2>
            <div class="input-group mb-3" style="border-bottom:1px solid black;">
              <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
              <div class="form-floating">
                <input style="border:none;" type="email" class="form-control" id="emailUser" placeholder="Enter your email" required>
                <label for="emailUser">Email Address</label>
              </div>
            </div>
            <div class="input-group mb-3" style="border-bottom:1px solid black;">
              <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
                  <div class="form-floating">
                    <input style="border:none;" type="password" class="form-control" id="pwdUser" placeholder="Enter your password">
                    <label for="pwdUser">Password</label>
                  </div>
            </div>
                <p>You don't have an account yet? <span> <a href="#/register">Sign Up</a> </span> </p>
                <button type="submit" class="btn btn-primary mb-3">Login</button>
          </form>
        </div>
      </div>
    </div>
        <message-container></message-container>
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
        setTimeout(() => {
          document.location = '#/profile';
          document.location.reload();
        }, 1500);
      }
    });
  },
};
export default Login;
