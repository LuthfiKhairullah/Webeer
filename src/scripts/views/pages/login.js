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
              <input type="email" class="form-control" id="emailUser" placeholder="Masukkan Email Anda">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="pwdUser" placeholder="Masukkan Password Anda">
            </div>
            <p>Kamu belum memiliki akun? <span> <a href="#/register">Daftar Sekarang</a> </span> </p>
            <button type="submit" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
          </form>
        </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        </div>
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
        messageText.innerHTML = `${data.error}`;
        message.innerHTML = 'WARNING';
        message.classList.add('text-warning');
      } else {
        messageText.innerHTML = `${data.data.message}`;
        message.innerHTML = 'SUCCESS';
        message.classList.add('text-success');
        setTimeout(() => {
          document.location = '#/profile';
          window.location.reload();
        }, 1500);
      }
    });
  },
};
export default Login;
