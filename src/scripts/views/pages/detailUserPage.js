import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';
import '../components/userOtherProfile';
import {
  createProfileOtherTemplateSkeleton,
  createAboutProfileTemplate,
} from '../templates/template-creator';

const DetailProfilePage = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    if (getToken === null) {
      document.location = '/';
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
        <div class="p-3 border-rbl" style="background-color:#f3f2ef;">
        <footer-lite></footer-lite>
      </div
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
    const lenReply = userReply.length;
    const sumDisRep = lenDiscussion + lenReply;
    const grade = document.querySelector('.grade-user');
    if (sumDisRep >= 0 && sumDisRep <= 20) {
      grade.innerHTML = 'D';
    } else if (sumDisRep >= 21 && sumDisRep <= 40) {
      grade.innerHTML = 'C';
    } else if (sumDisRep >= 41 && sumDisRep <= 60) {
      grade.innerHTML = 'B';
    } else if (sumDisRep >= 61 && sumDisRep <= 80) {
      grade.innerHTML = 'A';
    } else if (sumDisRep >= 81 && sumDisRep <= 100) {
      grade.innerHTML = 'S';
    } else if (sumDisRep >= 101) {
      grade.innerHTML = 'SS';
    } else {
      grade.innerHTML = 'E';
    }
    const content = document.querySelector('.content-profile-user');
    const BtnDiscussion = document.querySelector('#buttonDiscussionProfile');
    const BtnAbout = document.querySelector('#buttonAboutProfile');

    BtnDiscussion.addEventListener('click', async (event) => {
      event.preventDefault();
      BtnAbout.classList.remove('afterClick');
      BtnDiscussion.classList.add('afterClick');
      const userDiscussion = await DiscussionSource.getUserOtherDisscussion(url.id);
      if (userDiscussion.length > 0) {
        content.innerHTML = '<discussion-list></discussion-list>';
        const userDiscussionElement = document.querySelector('discussion-list');
        userDiscussionElement.discussions = userDiscussion;
      } else {
        content.innerHTML = createDiscussionEmpty();
      }
    });
    BtnAbout.addEventListener('click', async (event) => {
      event.preventDefault();
      BtnDiscussion.classList.remove('afterClick');
      BtnAbout.classList.add('afterClick');
      content.innerHTML = createAboutProfileTemplate(userProfile);
    });
  },
};

export default DetailProfilePage;