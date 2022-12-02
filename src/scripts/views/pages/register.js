import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const Register = {
  async render() {
    return `
         <div id="container-register">
          <div class ="container-login-main" id="card-login">
              <div>
                <img  class="lazyload hero-register" src="./asset/hero-login.png">
              </div>
            <div>  
              <form id="form-login">
              <h2 class="fw-bolder">REGISTER</h2>
                <p>You already have an account? <span> <a href="#/login">Sign in</a> </span> </p>
                  <div class="input-group mb-3" style="border-bottom:1px solid black;">
                    <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                    <div class="form-floating">
                      <input style="border:none;" type="text" class="form-control form" id="Username" placeholder="Enter your username" required>
                      <label for="Username">Username</label>
                    </div>
                  </div>
                  <div class="input-group mb-3" style="border-bottom:1px solid black;">
                    <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                      <div class="form-floating">
                        <input style="border:none;" type="email" class="form-control" id="emailUser" placeholder="Enter your email" required>
                        <label for="emailUser">Email Address</label>
                      </div>
                  </div>
                  <div class="input-group mb-3 password-container" style="border-bottom:1px solid black;">
                      <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <div class="form-floating">
                          <input style="border:none;" type="password" class="form-control" id="pwdUser" placeholder="Enter your password" required>
                          <label for="pwdUser">Password</label>
                        </div>
                  </div>
                    <p>Register as</p>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="role-user" >
                      <option value="1">Programmer</option>
                      <option value="2">Company</option>
                    </select>
                    <button type="submit" class="btn btn-primary mb-3" id="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
         <message-container></message-container>
          `;
  },
  async afterRender() {
    const getPwd = document.querySelector('#pwdUser');
    const form = document.querySelector('#form-login');
    const Username = document.querySelector('#Username');
    const email = document.querySelector('#emailUser');
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
  },
};

export default Register;