import HomePage from '../views/pages/homepage';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import jobsPage from '../views/pages/jobsPage';
import ForumsPage from '../views/pages/forumsPage';
import AddDiscussionPage from '../views/pages/addDiscussionPage';
import ProfilePage from '../views/pages/profilepage';
import addJobPage from '../views/pages/addJobPage';
import DetailDiscussionPage from '../views/pages/detailDiscussionPage';
import verificationPage from '../views/pages/verification';

const routes = {
  '/': HomePage,
  '/adddiscussion': AddDiscussionPage,
  '/forums': ForumsPage,
  '/detail/:id': DetailDiscussionPage,
  '/login': Login,
  '/profile': ProfilePage,
  '/register': Register,
  '/jobs': jobsPage,
  '/addjobs': addJobPage,
  '/verification': verificationPage,
};

export default routes;
