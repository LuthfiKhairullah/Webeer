import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';
import '../components/userProfile';
// import { UserDiscussionSkeleton } from '../templates/template-creator';

const DetailProfilePage = {
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url);
    const userProfile = await User.getDetailUser(url.id);
    console.log(userProfile);
    const userProfileElement = document.querySelector('user-profile');
    userProfileElement.user = userProfile;
    const userDiscussion = await DiscussionSource.getUserOtherDisscussion(url.id);
    const test = document.querySelector('.length-disscussion-user');
    test.innerHTML = userDiscussion.length;
    const userDiscussionElement = document.querySelector('discussion-list');
    userDiscussionElement.discussions = userDiscussion;
  },
};

export default DetailProfilePage;