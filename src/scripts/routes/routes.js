import HomePage from '../views/pages/homepage';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import jobsPage from '../views/pages/jobsPage';

const routes = {
  '/': HomePage,
  '/homepage': HomePage,
  '/login': Login,
  '/register': Register,
  '/jobs': jobsPage,
};

export default routes;
