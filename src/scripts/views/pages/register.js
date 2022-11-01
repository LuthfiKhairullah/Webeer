const Register = {
  async render() {
    return `
         <div id="container-login">
          <div class ="card">
            <form id="form-login">
              <div class="mb-4">
                <input type="email" class="form-control" id="emailUser" placeholder="Masukkan Email Anda">
              </div>
              <div class="mb-4">
                <input type="password" class="form-control" id="pwdUser" placeholder="Masukkan Password Anda">
                    <div class="pwdProgress hide">
                            <p class="textProgress"></p>
                    </div>
              </div>
              <div class="mb-4">
              <input type="password" class="form-control" id="RepwdUser" placeholder="Masukkan Password Ulang Anda">
            </div>
              <p>Kamu sudah memiliki akun? <span> <a href="#/login">Login Sekarang</a> </span> </p>
              <button type="submit" class="btn btn-primary mb-3">Register</button>
            </form>
  
          </div>
         </div>
         
          `;
  },
  async afterRender() {
    const getPwd = document.querySelector('#pwdUser');
    const progress = document.querySelector('.pwdProgress');
    const progressText = document.querySelector('.textProgress');
    getPwd.addEventListener('input', () => {
      const valuePwd = getPwd.value;
      if (valuePwd.length <= 0) {
        progress.classList.add('hide');
      } else if (valuePwd.length > 0 && valuePwd.length <= 6) {
        progress.classList.remove('hide');
        progressText.innerHTML = 'Weak';
        progress.style.background = 'red';
        progress.style.width = '30%';
      } else if (valuePwd.length >= 7 && valuePwd.length <= 12) {
        progress.classList.remove('hide');
        progressText.innerHTML = 'Medium';
        progress.style.background = 'orange';
        progress.style.width = '60%';
      } else {
        progress.classList.remove('hide');
        progressText.innerHTML = 'Strong';
        progress.style.background = 'green';
        progress.style.width = '100%';
      }
    });
  },
};

export default Register;
