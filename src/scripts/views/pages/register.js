import User from '../../data/loginSource';

const Register = {
  async render() {
    return `
    <modal-otp></modal-otp>
         <div id="container-register">
          <div class ="card">
          <img src="./asset/hero-login.png">
            <form id="form-login">
            <p>Kamu sudah memiliki akun? <span> <a href="#/login">Login Sekarang</a> </span> </p>
              <div class="mb-4">
                <input type="text" class="form-control" id="Username" placeholder="Masukkan Username Anda" required>
              </div>
              <div class="mb-4">
                <input type="email" class="form-control" id="emailUser" placeholder="Masukkan Email Anda" required>
              </div>
              <div class="mb-4 password-container">
                <input type="password" class="form-control" id="pwdUser" placeholder="Masukkan Password Anda" required>
                    <div class="pwdProgress hide">
                            <p class="textProgress"></p>
                    </div>
              </div>
              
            <p>Mendaftar sebagai</p>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="role-user" >
            <option value="1">Programmer</option>
            <option value="2">Company</option>
            </select>
            <button type="submit" class="btn btn-primary mb-3"data-bs-toggle="modal" data-bs-target="#exampleModal" id="submit">Register</button>
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
  async afterRender() {
    // const progress = document.querySelector('.pwdProgress');

    const getPwd = document.querySelector('#pwdUser');
    // const messageText = document.querySelector('.message-text');
    // getPwd.addEventListener('input', () => {
    //   const valuePwd = getPwd.value;
    //   if (valuePwd.length <= 0) {
    //     progress.classList.add('hide');
    //   } else if (valuePwd.length > 0 && valuePwd.length <= 6) {
    //     progress.classList.remove('hide');
    //     progressText.innerHTML = 'Weak';
    //     progress.style.background = 'red';
    //     progress.style.width = '30%';
    //   } else if (valuePwd.length >= 7 && valuePwd.length <= 12) {
    //     progress.classList.remove('hide');
    //     progressText.innerHTML = 'Medium';
    //     progress.style.background = 'orange';
    //     progress.style.width = '60%';
    //   } else {
    //     progress.classList.remove('hide');
    //     progressText.innerHTML = 'Strong';
    //     progress.style.background = 'green';
    //     progress.style.width = '100%';
    //   }
    // });

    // Submit Register
    const form = document.querySelector('#form-login');
    const Username = document.querySelector('#Username');
    const email = document.querySelector('#emailUser');
    const selected = document.getElementById('role-user');
    const title = document.querySelector('.modal-title');
    const message = document.querySelector('.modal-body');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { text } = selected.options[selected.selectedIndex];
      const data = await User.Register({
        username: Username.value,
        email: email.value,
        password: getPwd.value,
        role: text,
      });
      if (data.error) {
        console.log(data.error);
        title.innerText = 'WARNING';
        message.innerText = data.error;
        title.classList.add('text-warning');
      } else {
        console.log(data);
        title.innerText = 'SUCCESS';
        message.innerText = 'Selamat registrasi anda berhasil, silahkan verifikasi';
        title.classList.add('text-success');
        localStorage.setItem('email', JSON.stringify(data.email));
        localStorage.setItem('idUser', JSON.stringify(data.idUser));
        document.location = '#/verification';
        window.location.reload();
      }
    });
    // const modal = document.querySelector('.modal-otp');

    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   SendEmail();
    //   modal.classList.toggle('hide');
    //   const minute = 5;
    //   let time = minute * 60;
    //   const count = document.querySelector('.count');
    //   let timer;
    //   clearInterval(timer);
    //   timer = setInterval(Countdown, 1000);

    //   function Countdown() {
    //     const minutes = Math.floor(time / 60);
    //     let seconds = time % 60;

    //     seconds = seconds < 10 ? `0${seconds}` : seconds;

    //     count.innerHTML = `${minutes}:${seconds}`;
    //     time--;
    //   }

    //   console.log(modal);
    // });

    // const inputs = document.querySelectorAll('.otp input');

    // inputs.forEach((input, index) => {
    //   input.dataset.index = index;
    //   input.addEventListener('paste', handleOnPasteOtp);
    //   input.addEventListener('keyup', handleOtp);
    // });

    // function handleOnPasteOtp(e) {
    //   const data = e.clipboardData.getData('text');
    //   const value = data.split('');

    //   if (value.length === inputs.length) {
    //     inputs.forEach((input, index) => (input.value = value[index]));
    //     submit();
    //   }
    // }

    // function handleOtp(e) {
    //   const input = e.target;
    //   const { value } = input;
    //   input.value = '';
    //   input.value = value ? value[0] : '';

    //   const fieldIndex = input.dataset.index;
    //   if (value.length > 0 && fieldIndex < inputs.length - 1) {
    //     input.nextElementSibling.focus();
    //   }

    //   if (e.key === 'Backspace' && fieldIndex > 0) {
    //     input.perviousElementSibling.focus();
    //   }

    //   if (fieldIndex == inputs.length - 1) {
    //     submit();
    //   }
    // }

    // function submit() {
    //   let otp = '';
    //   inputs.forEach((input) => {
    //     otp += input.value;
    //     input.disabled = true;
    //     input.classList.add('disable');
    //   });
    //   if (otp === data) {
    //     message.classList.add('success');
    //     messageText.innerHTML = 'Sukses';
    //     const intervalModal = setInterval(() => {
    //       modal.classList.toggle('hide');
    //     }, 3000);
    //     setTimeout(() => {
    //       clearInterval(intervalModal);
    //       modal.classList.add('hide');
    //       message.classList.toggle('success');
    //     }, 1000);
    //   } else {
    //     alert('salah');
    //   }
    // }
  },
};

export default Register;