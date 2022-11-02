const Register = {
  async render() {
    return `
    <modal-otp></modal-otp>
         <div id="container-register">
          <div class ="card">
          <img src="./asset/hero-login.png">
            <form id="form-login">
              <div class="mb-4">
                <input type="email" class="form-control" id="emailUser" placeholder="Masukkan Email Anda">
              </div>
              <div class="mb-4 password-container">
                <input type="password" class="form-control" id="pwdUser" placeholder="Masukkan Password Anda">
                    <div class="pwdProgress hide">
                            <p class="textProgress"></p>
                    </div>
              </div>
              <div class="mb-4">
              <input type="password" class="form-control" id="RepwdUser" placeholder="Masukkan Password Ulang Anda">
            </div>
              <p>Kamu sudah memiliki akun? <span> <a href="#/login">Login Sekarang</a> </span> </p>
              <button type="submit" class="btn btn-primary mb-3" id="submit">Register</button>
            </form>
          </div>
          </div>
          <message-container></message-container>
          `;
  },
  async afterRender() {
    const getPwd = document.querySelector('#pwdUser');
    const progress = document.querySelector('.pwdProgress');
    const progressText = document.querySelector('.textProgress');
    const email = document.querySelector('#emailUser');
    const getEmail = email.value;
    const form = document.querySelector('#submit');
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
    function generatePassword() {
      const length = 5;
      const charset = '0123456789';
      let retVal = '';
      for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    const data = generatePassword();
    console.log(data);
    function SendEmail() {
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'webeerid@gmail.com',
        Password: '04FF56911EF483E93000C9ED024FAAE0092A',
        To: document.querySelector('#emailUser').value,
        From: 'webeerid@gmail.com',
        Subject: 'Sending Email using javascript',
        Body: `Kode OTP :${data}`,
      })
        .then(
          (message) => console.log(message),
        );
    }
    const modal = document.querySelector('.modal-otp');

    form.addEventListener('click', () => {
      // SendEmail();
      modal.classList.toggle('hide');
      const minute = 5;
    let time = minute * 60;
    const count = document.querySelector('.count');
    let timer;
    clearInterval(timer)
    timer = setInterval(Countdown,1000)
    
    function Countdown(){
      
      const minutes = Math.floor(time/60);
      let seconds = time % 60;

      seconds = seconds <10 ? '0'+seconds:seconds;

      count.innerHTML=`${minutes}:${seconds}`;
      time--;
    }
    
    console.log(modal)
  });
  
    
    const inputs = document.querySelectorAll('.otp input');

    inputs.forEach((input, index) => {
      input.dataset.index = index;
      input.addEventListener('paste', handleOnPasteOtp);
      input.addEventListener('keyup', handleOtp);
    });

    function handleOnPasteOtp(e) {
      const data = e.clipboardData.getData('text');
      const value = data.split('');

      if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
      }
    }

    function handleOtp(e) {
      const input = e.target;
      const { value } = input;
      input.value = '';
      input.value = value ? value[0] : '';

      const fieldIndex = input.dataset.index;
      if (value.length > 0 && fieldIndex < inputs.length - 1) {
        input.nextElementSibling.focus();
      }

      if (e.key === 'Backspace' && fieldIndex > 0) {
        input.perviousElementSibling.focus();
      }

      if (fieldIndex == inputs.length - 1) {
        submit();
      }
    }
    const message = document.querySelector('.message');
    const messageText = document.querySelector('.message-text');
    function submit() {
      let otp = '';
      inputs.forEach((input) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add('disable');
      });
<<<<<<< HEAD
      if (otp === data) {
        alert('berhasil');
        const intervalModal = setInterval(() => {
=======
      if(otp === data){
        message.classList.add('success');
        messageText.innerHTML="Sukses";
        let intervalModal = setInterval(()=>{
>>>>>>> 1693edef273f54946ff4aa3bf8b749c8f5d6c97d
          modal.classList.toggle('hide');
        }, 3000);
        setTimeout(() => {
          clearInterval(intervalModal);
          modal.classList.add('hide');
<<<<<<< HEAD
        }, 1000);
      } else {
        alert('salah');
=======
          message.classList.toggle('success');
          location.reload();
        },1000)
        
      }
      else{
        alert('salah')
>>>>>>> 1693edef273f54946ff4aa3bf8b749c8f5d6c97d
      }
    }
  },
};

export default Register;
