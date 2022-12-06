import '../components/login';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';

const HomePage = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      document.location = '#/dashboard';
      localStorage.setItem('login', 'true');
      window.reload();
    } else {
      document.location = '#';
      localStorage.setItem('login', 'false');
    }
    return `
        <login-modal></login-modal>
          <div class="container-homepage">
            <div class="container-main-homepage">
              <div class="container-main-text-homepage">
                <h2 tabindex= "0" class="text-dark fw-bold">Welcome to Webeer!
                </h2><p tabindex= "0" class="fs-5">
                Discussion Platform
                Indonesian Web Developer<br>
                Join to interact with each other
                fellow web developers in Indonesia
                </p>
                <button class="btn text-light fw-bold" style="border-radius:30px; background-color:#344D67;" data-bs-toggle="modal" data-bs-target="#exampleModal" id="buttonHomePage">Get Started</button>
              </div>
              <picture>
              <source media ="(max-width:600px)" srcset="./assetpng/hero-img-small.png">
              <img tabindex= "0" src="./assetpng/hero-img-large.png" class="main-image-homepage" alt="hero homepage" >
              </picture>
            </div>
            <div class="container-about-homepage">
              <div class="container-about-card-homepage">
                <div class="card" style="width: 18rem;">
                <picture>
                  <source media ="(max-width:600px)" srcset="./assetpns/fordis-small.png">
                  <img tabindex= "0" src="./assetpng/fordis-large.png"  style="width:200px;  height:200px; padding:20px; margin:0 auto;" alt="picture forum">
                 </picture> 
                  <h3 tabindex= "0" class="fw-bolder">Discussion Forum</h3>
                </div>
                <div class="card" style="width: 18rem;">
                  <picture>
                  <source media ="(max-width:600px)" srcset="./assetpng/loker-small.png">
                  <img tabindex= "0" src="./assetpng/loker-large.png" style="width:200px; height:200px; padding:20px;  margin:0 auto;" alt="picture job">
                  </picture>
                  <h3 tabindex= "0" class="fw-bolder">Job Vacancy</h3>
                </div>
              </div>
              <h2 tabindex= "0" class="text-light fw-bold"> Why does it have to be Webeer?</h2>
              <p  tabindex= "0" class="text-light">Webeer is a website designed for
              Web Developer Indonesia to be able to interact with each other
              and also looking for jobs.</p>
            </div>
            <div class="container-end-homepage">
            <picture>
            <source media ="(max-width:600px)" srcset="./assetpng/picture-small.png">
              <img tabindex= "0" src="./assetpng/picture-large.png" class="image-end-homepage" alt="picture end homepage">
            </picture>
              <div class="container-end-text-homepage">
                  <h2  tabindex= "0" class="text-dark fw-bold">
                  Find answers
                  <br>your problem!
                </h4>
                <p tabindex= "0" class="text-dark">
                  With Webeer, ask your problem or
                  <br>contribute to solving problems
                <br>Other Web Developers.
                </p>
              </div>
            </div>
          </div>
          <footer-bar></footer-bar>
          <message-container></message-container>
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
export default HomePage;
