import User from '../../data/loginSource';

const verificationPage = {
  async render() {
    return `
    <div class="container-verification">
    <div class="card">
    <img src="./asset/verified.png" class="card-img-top">
    <div class="card-body text-center">
    <p>Silahkan cek email anda, jika kode tidak terkirim silahkan tekan kirim ulang</p>
    <button class =" btn btn-primary mb-5"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="resend">Kirim Ulang </button>
    <form id="verifikasi-user">
    <div class="mb-4">
                <input type="text" class="form-control" id="otp" placeholder="Masukkan Kode OTP Anda" required>
              </div>
              <button class =" btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" ">Submit</button>
    </form>
    </div>
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
    </div>`;
  },
  async afterRender() {
    const resend = document.querySelector('#resend');
    const getId = localStorage.getItem('idUser').replaceAll('"', '');
    const getEmail = localStorage.getItem('email').replaceAll('"', '');
    const title = document.querySelector('.modal-title');
    const message = document.querySelector('.modal-body');
    console.log(getEmail);
    console.log('Get Item :', getId);
    // eslint-disable-next-line no-unused-expressions
    resend.addEventListener('click', async (event) => {
      event.preventDefault();
      const data = await User.Resend({
        idUser: getId,
        email: getEmail,
      });
      if (data.error) {
        title.innerText = 'WARNING';
        message.innerText = `${data.error}`;
        title.classList.add('text-warning');
      } else {
        console.log(data);
        title.innerText = 'SUCCESS';
        message.innerText = `${data.data.message}`;
        title.classList.add('text-success');
      }
    });

    const form = document.querySelector('#verifikasi-user');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = await User.Verification({
        idUser: getId,
        OTP: document.querySelector('#otp').value,
      });
      if (data.error) {
        title.innerText = 'WARNING';
        message.innerText = `${data.error}`;
        title.classList.add('text-warning');
      } else {
        title.innerText = 'SUCCESS';
        message.innerText = `${data.data.message}`;
        title.classList.add('text-success');
        localStorage.removeItem('idUser');
        localStorage.removeItem('email');
        document.location = ('#/login');
      }
    });
  },
};
export default verificationPage;