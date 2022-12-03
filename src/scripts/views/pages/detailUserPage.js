import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';
import '../components/userOtherProfile';
import { createProfileOtherTemplateSkeleton } from '../templates/template-creator';
// import { UserDiscussionSkeleton } from '../templates/template-creator';

const DetailProfilePage = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      window.location.href();
      localStorage.setItem('login', 'true');
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
      document.location = `#/detailprofile/${url.id}`;
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }

    return `
        <user-profile-other>
          ${createProfileOtherTemplateSkeleton()}
        </user-profile-other>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url);
    const userProfile = await User.getDetailUser(url.id);
    const userReply = await DiscussionSource.getDiscussionReply(userProfile._id);
    console.log(userProfile);
    const userProfileElement = document.querySelector('user-profile-other');
    userProfileElement.user = userProfile;
    const userDiscussion = await DiscussionSource.getUserOtherDisscussion(url.id);
    const lengthReply = document.querySelector('.length-disscussion-user');
    const countReply = document.querySelector('.length-reply-user');
    if (userReply === undefined) {
      countReply.innerHTML = 0;
    } else {
      countReply.innerHTML = userReply.length;
    }
    lengthReply.innerHTML = userDiscussion.length;
    const lenDiscussion = userDiscussion.length;
    const lenReply = countReply.innerHTML;
    const grade = document.querySelector('.grade-user');
    if (lenDiscussion >= 0 && lenDiscussion <= 10 && lenReply >= 0 && lenReply <= 10) {
      grade.innerHTML = 'D';
    } else if (lenDiscussion >= 11 && lenDiscussion <= 20 && lenReply >= 11 && lenReply <= 20) {
      grade.innerHTML = 'C';
    } else {
      grade.innerHTML = 'E';
    }
    const content = document.querySelector('.container-discussion-user');
    content.innerHTML = '<discussion-list></discussion-list>';
    const userDiscussionElement = document.querySelector('discussion-list');
    userDiscussionElement.discussions = userDiscussion;
  },
};

export default DetailProfilePage;