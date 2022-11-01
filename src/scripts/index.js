import 'regenerator-runtime';
import '../styles/style.css';
import './views/components/appBar';
import Main from './views/main';
import 'bootstrap/dist/css/bootstrap.min.css';

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
