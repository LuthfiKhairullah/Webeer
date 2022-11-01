import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/login.css';
import './views/components/appBar';
import './views/components/footer';
import Main from './views/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const main = new Main({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', () => {
  main.renderPage();
});

window.addEventListener('hashchange', () => {
  main.renderPage();
});
