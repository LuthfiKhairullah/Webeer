import HomePage from '../views/pages/homepage';
import Discussion from '../views/pages/listDiscussion';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import jobsPage from '../views/pages/jobsPage';

const routes = {
  '/': Discussion,
  '/homepage': HomePage,
  '/login': Login,
  '/register': Register,
  '/jobs': jobsPage,
};

export default routes;
