import DataSource from '../../data/dataSource';
import '../components/userProfile';

const ProfilePage = {
  async render() {
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