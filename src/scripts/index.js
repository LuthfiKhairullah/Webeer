import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/home.css';
import '../styles/login.css';
import '../styles/addDiscussion.css';
import '../styles/filter.css';
import '../styles/jobs.css';
import '../styles/modalOtp.css';
import '../styles/message.css';
import '../styles/profile.css';
import '../styles/addjobs.css';
import '../styles/companyJob.css';
import '../styles/discussion.css';
import '../styles/verification.css';
import '../styles/changePwd.css';
import '../styles/skeleton.css';
import '../styles/about.css';
import '../styles/resetpassword.css';
import '../styles/listCompany.css';
import '../styles/dashboardJob.css';
import '../styles/jobother.css';
import './views/components/appBar';
import './views/components/footer';
import './views/components/searchBar';
import './views/components/message';
import './views/components/otp';
import './views/components/addDiscussion';
import './views/components/footerLite';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Main from './views/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import swRegister from './utils/swRegister';

const main = new Main({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  main.renderPage();
});

window.addEventListener('load', () => {
  main.renderPage();
  swRegister();
});