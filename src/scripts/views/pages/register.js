import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const Register = {
  async render() {
    return `
    <login-modal></login-modal>
         <div id="container-register">
          <div class ="container-login-main" id="card-login">
              <div>
              <picture>
              <source media="(max-width:600px)" srcset="./assetpng/hero-login-small.png">
                <img  class="lazyload hero-register" src="./assetpng/hero-login-large.png" alt="hero register">
              </picture>
                </div>
            <div>  
              <form id="form-register">
              <h2 class="fw-bolder">REGISTER</h2>
                <p>You already have an account? <span> <a href="#/login">Sign in</a> </span> </p>
                  <div class="input-group mb-3">
                    <span class="input-group-text text-light" style="background-color:#344D67; border:none;"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                    <div class="form-floating">
                      <input style="border:none;" type="text" class="form-control form" id="UsernameRegister" placeholder="Enter your username" required>
                      <label for="Username">Username</label>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text text-light" style="background-color:#344D67; border:none;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                      <div class="form-floating">
                        <input style="border:none;" type="email" class="form-control" id="emailUserRegister" placeholder="Enter your email" required>
                        <label for="emailUser">Email Address</label>
                      </div>
                  </div>
                  <div class="input-group mb-3 password-container">
                      <span class="input-group-text text-light" style="background-color:#344D67; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <div class="form-floating">
                          <input style="border:none;" type="password" class="form-control" id="pwdUserRegister" placeholder="Enter your password" required>
                          <label for="pwdUser">Password</label>
                        </div>
                  </div>
                    <p>Register as</p>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="role-user" >
                      <option value="1">Programmer</option>
                      <option value="2">Company</option>
                    </select>
                    <button type="submit" class="btn mb-3 w-100 text-light p-3" style="background-color:#344D67;" id="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
         <message-container></message-container>
         <footer-lite class="p-3 footer-lite-profile" style="background-color:#f3f2ef;"></footer-lite>
          `;
  },
  async afterRender() {
    const getPwd = document.querySelector('#pwdUserRegister');
    const form = document.querySelector('#form-register');
    const Username = document.querySelector('#UsernameRegister');
    const email = document.querySelector('#emailUserRegister');
    const selected = document.getElementById('role-user');
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const submitButton = document.querySelector('#submit');
    form.addEventListener('submit', async (event) => {
      const registerContainer = document.querySelector('#container-register');
      registerContainer.classList.add('cursor-progress');
      event.preventDefault();
      const { text } = selected.options[selected.selectedIndex];
      submitButton.setAttribute('disabled', '');
      const data = await User.Register({
        username: Username.value,
        email: email.value,
        password: getPwd.value,
        role: text,
      });
      if (data.error) {
        console.log(data.error);
        registerContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = data.error;
        messageTitle.innerHTML = 'WARNING';
        message.show();
        submitButton.removeAttribute('disabled');
      } else {
        console.log(data);
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = 'Selamat registrasi anda berhasil, silahkan verifikasi';
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        localStorage.setItem('email', JSON.stringify(data.email));
        localStorage.setItem('idUser', JSON.stringify(data.idUser));
        setTimeout(() => document.location = '#/verification', 1500);
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

export default Register;