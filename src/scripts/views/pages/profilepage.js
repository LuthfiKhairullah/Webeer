import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import BookmarkDiscussionIdb from '../../data/bookmark-discussion-idb';
import '../components/userProfile';
import '../components/bookmarkList';
import {
  createAboutProfileTemplate,
  createBookmarkEmpty,
  createDiscussionEmpty,
  createProfileTemplateSkeleton,
} from '../templates/template-creator';

const ProfilePage = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Company') {
      document.location = '#/dashboard';
      localStorage.setItem('login', 'true');
      window.reload();
    } else if (getToken !== null && getRole.replaceAll('"', '') === 'Programmer') {
      document.location = '#/profile';
      localStorage.setItem('login', 'true');
    } else {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }

    return `
        <user-profile>
          ${createProfileTemplateSkeleton()}
        </user-profile>
    `;
  },

  async afterRender() {
    const userProfile = await User.getUser();
    const userDiscussion = await DiscussionSource.getUserDiscussion();
    const userReply = await DiscussionSource.getDiscussionReply(userProfile._id);
    const userProfileElement = document.querySelector('user-profile');
    userProfileElement.user = userProfile;
    const countDiscussion = document.querySelector('.length-disscussion-user');
    const countReply = document.querySelector('.length-reply-user');
    countDiscussion.innerHTML = userDiscussion.length;
    if (userReply === undefined) {
      countReply.innerHTML = 0;
    } else {
      countReply.innerHTML = userReply.length;
    }
    const lenDiscussion = userDiscussion.length;
    const lenReply = userReply.length;
    const sumDisRep = lenDiscussion + lenReply;
    console.log(lenDiscussion, lenReply);
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
    const BtnBookmark = document.querySelector('#buttonBookmarkProfile');
    const BtnDiscussion = document.querySelector('#buttonDiscussionProfile');
    const BtnAbout = document.querySelector('#buttonAboutProfile');
    BtnBookmark.addEventListener('click', async (event) => {
      event.preventDefault();
      BtnAbout.classList.remove('afterClick');
      BtnDiscussion.classList.remove('afterClick');
      BtnBookmark.classList.add('afterClick');
      const userBookmark = await BookmarkDiscussionIdb.getAllDiscussions();
      console.log(userBookmark);
      const discussions = await DiscussionSource.getAllDiscussion();
      userBookmark.forEach(async (ub) => {
        const check = discussions.filter((discussion) => discussion._id.toString().includes(ub.id)).map((discussion) => discussion._id).join('').includes(ub.id);
        if (check === false) {
          await BookmarkDiscussionIdb.deleteDiscussion(ub.id);
        }
      });
      const updateBookmark = await BookmarkDiscussionIdb.getAllDiscussions();
      console.log(updateBookmark.length);
      if (updateBookmark.length > 0) {
        content.innerHTML = '<bookmark-list></bookmark-list>';
        const userBookmarkElement = document.querySelector('bookmark-list');
        userBookmarkElement.bookmarks = updateBookmark;
      } else {
        content.innerHTML = createBookmarkEmpty();
      }
    });
    BtnDiscussion.addEventListener('click', async (event) => {
      event.preventDefault();
      BtnBookmark.classList.remove('afterClick');
      BtnAbout.classList.remove('afterClick');
      BtnDiscussion.classList.add('afterClick');
      const userDiscussion = await DiscussionSource.getUserDiscussion();
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
      BtnBookmark.classList.remove('afterClick');
      BtnDiscussion.classList.remove('afterClick');
      BtnAbout.classList.add('afterClick');
      content.innerHTML = createAboutProfileTemplate(userProfile);
    });
  },
};

export default ProfilePage;