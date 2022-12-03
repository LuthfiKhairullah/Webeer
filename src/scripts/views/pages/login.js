import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const Login = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      document.location = '#/dashboard';
      localStorage.setItem('login', 'true');
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
      document.location = '#/profile';
      localStorage.setItem('login', 'true');
    } else {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
    }
    return `
    <modal-not-login></modal-not-login>
       <div id="container-login" style="text-align:center;">
        <div class ="container-login-main" id="card-login">
          <div>
            <img class="lazyload" src="./asset/hero-login.png">
          </div>
        <div>
          <form id="form-login">
          <h2 class="fw-bolder">LOGIN</h2>
          <p>You don't have an account yet? <span> <a href="#/register">Sign Up</a> </span> </p>
            <div class="input-group mb-3" style="border-bottom:1px solid black;">
              <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
              <div class="form-floating">
                <input style="border:none;" type="email" class="form-control form-control-lg" id="emailUser" placeholder="Enter your email" required>
                <label for="emailUser">Email Address</label>
              </div>
            </div>
            <div class="input-group mb-3" style="border-bottom:1px solid black;">
              <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
                  <div class="form-floating">
                    <input style="border:none;" type="password" class="form-control form-control-lg" id="pwdUser" placeholder="Enter your password">
                    <label for="pwdUser">Password</label>
                  </div>
            </div>
            <button type="submit" class="btn btn-primary mb-3">Login</button>
          </form>
          <p>Forgot password? <span> <button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Forget Password</button> </span> </p>
        </div>
      </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fw-bold" id="exampleModalLabel">FORGET PASSWORD</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id="reset-password-user">
      <div class="input-group mb-3" style="border:1px solid black">
          <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
            <div class="form-floating">
              <input style="border:none;" type="email" class="form-control form-control-lg" id="email-reset-password" placeholder="Enter your email" required>
            <label for="emailUser">Email Address</label>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
      </div>
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

    // FORM LOGIN"
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
    const formReset = document.getElementById('reset-password-user');
    formReset.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log(document.getElementById('email-reset-password').value);
      const data = await User.EmailResetPassword({
        email: document.getElementById('email-reset-password').value,
      });
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.message);
      }
    });
  },
};
export default Login;
