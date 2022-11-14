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
            <button type="submit" class="btn btn-primary mb-3">Login</button>
          </form>
        </div>
        </div>
        <message-container></message-container>
        `;
  },
  afterRender() {
    // modal
    const modal = document.querySelector('.modal-error');
    const verify = localStorage.getItem('login');
    console.log(verify);
    if (verify != null) {
      modal.classList.add('show');
      setTimeout(() => {
        modal.classList.toggle('show');
        localStorage.removeItem('login');
      }, 3000);
    }
    const formLogin = document.querySelector('#form-login');
    const idUser = document.querySelector('#emailUser');
    const pwUser = document.querySelector('#pwdUser');
    const messageText = document.querySelector('.message-text');
    const message = document.querySelector('.message');
    const bar = document.querySelector('.container-bar');
    let i = 0;

    // BAR
    const move = () => {
      if (i == 0) {
        i = 1;
        const elem = document.getElementById('progress-bar');
        let width = 100;
        const id = setInterval(frame, 10);
        // eslint-disable-next-line no-inner-declarations
        function frame() {
          if (width <= 0) {
            clearInterval(id);
            i = 0;
          } else {
            width--;
            elem.style.width = `${width}%`;
          }
        }
      }
    };

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
        message.classList.add('error');
        bar.classList.add('hide');
        setTimeout(() => {
          message.classList.toggle('error');
          bar.classList.toggle('hide');
        }, 1500);
      } else {
        messageText.innerHTML = `${data.data.message}`;
        message.classList.add('success');
        move();
        setTimeout(() => {
          message.classList.toggle('success');
          document.location = '#/profile';
          window.location.reload();
        }, 1500);
      }
    });
  },
};
export default Login;
