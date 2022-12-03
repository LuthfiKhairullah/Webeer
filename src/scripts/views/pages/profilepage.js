import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import BookmarkDiscussionIdb from '../../data/bookmark-discussion-idb';
import '../components/userProfile';
import '../components/bookmarkList';
import { createBookmarkEmpty, createDiscussionEmpty, createProfileTemplateSkeleton } from '../templates/template-creator';
// import { UserDiscussionSkeleton } from '../templates/template-creator';

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
    console.log('test', userProfile);
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
    if (userDiscussion.length > 0) {
      content.innerHTML = '<discussion-list></discussion-list>';
      const userDiscussionElement = document.querySelector('discussion-list');
      userDiscussionElement.discussions = userDiscussion;
    } else {
      content.innerHTML = createDiscussionEmpty();
    }
    const BtnBookmark = document.querySelector('#btn-bookmark');
    const BtnDiscussion = document.querySelector('#btn-discussion');
    BtnBookmark.addEventListener('click', async (event) => {
      event.preventDefault();
      BtnDiscussion.classList.remove('onactive');
      BtnBookmark.classList.add('onactive');
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
      BtnBookmark.classList.remove('onactive');
      BtnDiscussion.classList.add('onactive');
      const userDiscussion = await DiscussionSource.getUserDiscussion();
      if (userDiscussion.length > 0) {
        content.innerHTML = '<discussion-list></discussion-list>';
        const userDiscussionElement = document.querySelector('discussion-list');
        userDiscussionElement.discussions = userDiscussion;
      } else {
        content.innerHTML = createDiscussionEmpty();
      }
    });
  },
};

export default ProfilePage;