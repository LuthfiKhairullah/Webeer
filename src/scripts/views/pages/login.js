import User from '../../data/loginSource';

const Login = {
  async render() {
    return `
    <modal-not-login></modal-not-login>
       <div id="container-login">
        <div class ="card">
        <img src="./asset/hero-login.png">
          <form id="form-login">
            <div class="mb-3">
              <input type="email" class="form-control" id="emailUser" placeholder="Enter your email">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="pwdUser" placeholder="Enter your password">
            </div>
            <p>You don't have an account yet? <span> <a href="#/register">Sign Up</a> </span> </p>
            <button type="submit" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
          </form>
        </div>
        </div>
        <message-container></message-container>
        `;
  },
  afterRender() {
    const formLogin = document.querySelector('#form-login');
    const idUser = document.querySelector('#emailUser');
    const pwUser = document.querySelector('#pwdUser');
    const messageText = document.querySelector('.modal-body');
    const message = document.querySelector('.modal-title');

    // FORM LOGIN
    console.log(message);
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = await User.Login({
        email: idUser.value,
        password: pwUser.value,
      });
      if (data.error) {
        message.classList.remove('text-success');
        messageText.classList.remove('bg-success');
        messageText.innerHTML = `${data.error}`;
        message.innerHTML = 'WARNING';
        message.classList.add('text-warning');
        messageText.classList.add('bg-warning');
      } else {
        message.classList.remove('text-warning');
        messageText.classList.remove('bg-warning');
        messageText.innerHTML = `${data.data.message}`;
        message.innerHTML = 'SUCCESS';
        message.classList.add('text-success');
        messageText.classList.add('bg-success');
        setTimeout(() => {
          document.location = '#/profile';
          window.location.reload();
        }, 1500);
      }
    });
  },
};
export default Login;
