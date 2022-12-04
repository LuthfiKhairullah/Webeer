import '../components/login';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const AboutPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      document.location = '#/dashboard';
      localStorage.setItem('login', 'true');
      window.reload();
    }
    return `
    <login-modal></login-modal>
    <message-container></message-container>
    <div class="container-about-bg">
      <div class="container">
        <div class="container-about d-flex align-items-center justify-content-center">
          <div class="text-white text-center container-about-description">
            <h1 class="text-center fw-bold">About Us</h1>
            <p>
              Webeer is a website that accommodates developers for discussions. Webeer has features such as creating discussions and searching for jobs.
            </p>
          </div>
          <div class="container-about-img">
            <img class="w-100" src="../asset/hero-about-us.png" alt="image about us">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container-about-features">
        <div class="text-center">
          <h2 class="fw-bold">Features</h2>
          <p>Webeer has features such as :</p>
          <div class="container-about-features d-flex justify-content-center">
            <div class="container-about-forums d-flex m-4">
              <div class="container-about-forums-img">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.1665 32.9167V6.25001C4.1665 5.65973 4.3665 5.16459 4.7665 4.76459C5.16512 4.36598 5.65956 4.16667 6.24984 4.16667H33.3332C33.9234 4.16667 34.4179 4.36598 34.8165 4.76459C35.2165 5.16459 35.4165 5.65973 35.4165 6.25001V25C35.4165 25.5903 35.2165 26.0847 34.8165 26.4833C34.4179 26.8833 33.9234 27.0833 33.3332 27.0833H12.4998L5.93734 33.6458C5.62484 33.9583 5.25123 34.0361 4.8165 33.8792C4.38317 33.7236 4.1665 33.4028 4.1665 32.9167ZM14.5832 37.5C13.9929 37.5 13.4978 37.3 13.0978 36.9C12.6991 36.5014 12.4998 36.0069 12.4998 35.4167V31.25H39.5832V12.5H43.7498C44.3401 12.5 44.8346 12.6993 45.2332 13.0979C45.6332 13.4979 45.8332 13.9931 45.8332 14.5833V43.3333C45.8332 43.8194 45.6165 44.1403 45.1832 44.2958C44.7484 44.4528 44.3748 44.375 44.0623 44.0625L37.4998 37.5H14.5832Z" fill="black"/>
                </svg>
              </div>
              <h3>Forums</h3>
              <p>Ask your problem or contribute to solving problems Other Web Developers.</p>
            </div>
            <div class="container-about-jobs d-flex m-4">
              <div class="container-about-forums-img">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 3.125C17.2996 3.125 15.9086 3.70117 14.883 4.72676C13.8574 5.75235 13.2812 7.14335 13.2812 8.59375V12.5H9.375C7.7174 12.5 6.12769 13.1585 4.95558 14.3306C3.78348 15.5027 3.125 17.0924 3.125 18.75V40.625C3.125 42.2826 3.78348 43.8723 4.95558 45.0444C6.12769 46.2165 7.7174 46.875 9.375 46.875H40.625C42.2826 46.875 43.8723 46.2165 45.0444 45.0444C46.2165 43.8723 46.875 42.2826 46.875 40.625V18.75C46.875 17.0924 46.2165 15.5027 45.0444 14.3306C43.8723 13.1585 42.2826 12.5 40.625 12.5H36.7188V8.59375C36.7188 7.14335 36.1426 5.75235 35.117 4.72676C34.0914 3.70117 32.7004 3.125 31.25 3.125H18.75ZM32.0312 12.5V8.59375C32.0312 8.38655 31.9489 8.18784 31.8024 8.04132C31.6559 7.89481 31.4572 7.8125 31.25 7.8125H18.75C18.5428 7.8125 18.3441 7.89481 18.1976 8.04132C18.0511 8.18784 17.9688 8.38655 17.9688 8.59375V12.5H32.0312ZM9.375 17.1875H40.625C41.0394 17.1875 41.4368 17.3521 41.7299 17.6451C42.0229 17.9382 42.1875 18.3356 42.1875 18.75V21.875H7.8125V18.75C7.8125 18.3356 7.97712 17.9382 8.27015 17.6451C8.56317 17.3521 8.9606 17.1875 9.375 17.1875ZM7.8125 26.5625V40.625C7.8125 41.0394 7.97712 41.4368 8.27015 41.7299C8.56317 42.0229 8.9606 42.1875 9.375 42.1875H40.625C41.0394 42.1875 41.4368 42.0229 41.7299 41.7299C42.0229 41.4368 42.1875 41.0394 42.1875 40.625V26.5625H28.125V31.25H21.875V26.5625H7.8125Z" fill="black"/>
                </svg>
              </div>
              <h3>Jobs</h3>
              <p>Search for job vacancies according to your interests or create job vacancies for Web Developers Webeer.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-about-team text-center">
        <h2 class="fw-bold">Our Team</h2>
        <p>Our team members :</p>
        <div class="container-about-team-person my-4 d-flex justify-content-center">
          <div class="container-about-person m-4">
            <img src="../asset/fajar.jpeg" class="card-img-top" alt="team photo">
            <h3 class="">Muhammad Fajar Yudhistira H</h3>
            <p>Front-End Web and Back-End<br>SIB Batch 3 X Dicoding</p>
          </div>
          <div class="container-about-person m-4">
            <img src="../asset/Luthfi.jpg" class="card-img-top" alt="team photo">
            <h3 class="">Muhammad Luthfi Khairullah</h3>
            <p>Front-End Web and Back-End<br>SIB Batch 3 X Dicoding</p>
          </div>
          <div class="container-about-person m-4">
            <img src="../asset/muja.jpg" class="card-img-top" alt="team photo">
            <h3 class="">Siti Mujadilah</h3>
            <p>Front-End Web and Back-End<br>SIB Batch 3 X Dicoding</p>
          </div>
          <div class="container-about-person m-4">
            <img src="../asset/jovita.jpg" class="card-img-top" alt="team photo">
            <h3 class="">Jovita Amelinda</h3>
            <p>Front-End Web and Back-End<br>SIB Batch 3 X Dicoding</p>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
      <!--<div class="About">
        <div class="card container-about">
          <div class="card-header text-center">
            WEBEER
          </div>
          <div class="card-body fw-normal fs-4">
            <p class="card-text"> Webeer merupakan suatu website yang mewadahi para developer untuk melakukan diskusi. Webeer memiliki fitur seperti membuat diskusi dan mencari pekerjaan.
              <br></br>
              Membuka situs webeer untuk mencari jawaban penyelesaian masalah coding yang sering dihadapi para programer. Pertanyaan yang sudah ditandai dengan jenis bahasa pemrogramannya dan memberikan info jika diskusi tersebut membantu programer lain dalam hal masalah yang sama dimaksudkan untuk memudahkan user untuk mencari informasi terkait.
              Setiap user webeer memiliki profile masing-masing sehingga user perlu melakukan login terlebih dahulu. Pada profile user dapat melihat diskusi apa saja yang telah dibuat hingga nilai activity yang telah diperoleh.
              Setiap user Webeer memiliki nilai activity pada profilenya masing-masing. Nilai keaktifan tersebut didapat dari seberapa sering menjawab pertanyaan dan bertanya di dalam forum diskusi.
              <br></br>
              Contoh jika menjawab pertanyaan maka user akan mendapatkan nilai. Nilai pada activity berupa grade A sampai E dan setiap grade memiliki batas nilai yang berbeda, dimana semakin banyak menjawab dan bertanya maka grade akan meningkat.
            </p>
          </div>
        </div>
        <div class="card container-about">
          <div class="card-header text-center">
            Fitur Job
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0 ">
              <p>WEBEER memiliki fitur keunggulan lainnya yang tak kalah penting dan tentunya akan membantu para programmer dalam mencari pekerjaan yang diinginkan, <br>
              Dengan Fitur JOB dimana para programer dapat mencari job atau pekerjaan yang diinginkan dengan melihat detail dari suatu perusahaan atau pekerjaan tersebut dan dengan mengklik aplly pada halaman job atau perusahaan yang dinginkan akan mengantarkan kita ke halaman glints untuk lebih detail dari sebuah perusahan tersebut</p>
            </blockquote>
          </div>
        </div>
        <br></br>
        <div class="card container-about">
          <div class="card-body text-center">
            OUR TEAM
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4 row-cols-auto">
        <div class="col">
          <div class="card container-about h-100">
            <img src="../asset/fajar.jpeg" class="card-img-top w-auto img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Muhammad Fajar Yudhistira H</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card container-about h-100">
            <img src="../asset/Luthfi.jpg" class="card-img-top w-auto img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Muhammad Luthfi Khairullah</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card container-about h-100 ">
            <img src="../asset/muja.jpg" class="card-img-top w-auto img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Siti Mujadilah</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card container-about h-100 ">
            <img src="../asset/jovita.jpg" class="card-img-top w-auto img-thumbnail" alt="">
            <div class="card-body">
              <h5 class="card-title text-center">Jovita Amelinda</h5>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const formLogin = document.querySelector('#form-login');
    const idUser = document.querySelector('#emailUser');
    const pwUser = document.querySelector('#pwdUser');
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);

    // FORM LOGIN"
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
export default AboutPage;