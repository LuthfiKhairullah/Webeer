import HomePage from '../views/pages/homepage';
import Discussion from '../views/pages/listDiscussion';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Discussion,
  '/homepage': HomePage,
  '/login': Login,
  '/register': Register,
};

export default routes;
