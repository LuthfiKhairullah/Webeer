import DataSource from '../../data/dataSource';
import '../components/userProfile';

const ProfilePage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }

    return `
        <user-profile></user-profile>
    `;
  },

  async afterRender() {
    const userProfile = await DataSource.users();
    const userProfileElement = document.querySelector('user-profile');
    userProfileElement.user = userProfile[0];
  },
};

export default ProfilePage;