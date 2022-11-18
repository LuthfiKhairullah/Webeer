import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';

import '../components/userProfile';
// import { UserDiscussionSkeleton } from '../templates/template-creator';

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
    const userProfile = await User.getUser();
    console.log(userProfile);
    const userProfileElement = document.querySelector('user-profile');
    userProfileElement.user = userProfile;
    const userDiscussion = await DiscussionSource.getUserDiscussion();
    const test = document.querySelector('.length-disscussion-user');
    test.innerHTML = userDiscussion.length;
    const userDiscussionElement = document.querySelector('discussion-list');
    userDiscussionElement.discussions = userDiscussion;
  },
};

export default ProfilePage;