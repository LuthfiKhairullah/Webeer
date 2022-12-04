import HomePage from '../views/pages/homepage';
import Register from '../views/pages/register';
import jobsPage from '../views/pages/jobsPage';
import ForumsPage from '../views/pages/forumsPage';
import AddDiscussionPage from '../views/pages/addDiscussionPage';
import ProfilePage from '../views/pages/profilepage';
import addJobPage from '../views/pages/addJobPage';
import DetailDiscussionPage from '../views/pages/detailDiscussionPage';
import verificationPage from '../views/pages/verification';
import DetailProfilePage from '../views/pages/detailUserPage';
import listJobPage from '../views/pages/listJobPage';
import aboutpage from '../views/pages/aboutpage';
import profileCompany from '../views/pages/profileCompany';
import HomeCompany from '../views/pages/homeCompany';
import DetailJobPage from '../views/pages/detailJobPage';
import profileCompanyOther from '../views/pages/profileCompanyOther';
import ResetPassword from '../views/pages/resetPasswordPage';
import resetPwdPage from '../views/pages/forgotPwdPage';

const routes = {
  '/': HomePage,
  '/adddiscussion': AddDiscussionPage,
  '/forums': ForumsPage,
  '/detaildiscussion/:id': DetailDiscussionPage,
  '/profile': ProfilePage,
  '/register': Register,
  '/jobs': jobsPage,
  '/addjobs': addJobPage,
  '/verification': verificationPage,
  '/detailprofile/:id': DetailProfilePage,
  '/list': listJobPage,
  '/about': aboutpage,
  '/company': profileCompany,
  '/dashboard': HomeCompany,
  '/detailjob/:id': DetailJobPage,
  '/profilecompany/:id': profileCompanyOther,
  '/resetpassword/:id': ResetPassword,
  '/resetpwd': resetPwdPage,
};

export default routes;
