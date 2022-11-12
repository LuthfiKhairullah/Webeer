import User from '../../data/loginSource';

const Login = {
  async render() {
    return `
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
        `;
  },
  afterRender() {
    const formLogin = document.querySelector('#form-login');
    const idUser = document.querySelector('#emailUser');
    const pwUser = document.querySelector('#pwdUser');
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = await User.Login({
        email: idUser.value,
        password: pwUser.value,
      });
    });
  },
};
export default Login;
