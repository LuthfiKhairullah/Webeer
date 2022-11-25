import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import BookmarkDiscussionIdb from '../../data/bookmark-discussion-idb';
import '../components/userProfile';
import '../components/bookmarkList';
import { createBookmarkEmpty, createDiscussionEmpty } from '../templates/template-creator';
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
    console.log('test',userProfile);
    const userProfileElement = document.querySelector('user-profile');
    userProfileElement.user = userProfile;
    const userDiscussion = await DiscussionSource.getUserDiscussion();
    const count = document.querySelector('.length-disscussion-user');
    count.innerHTML = userDiscussion.length;
    console.log(userDiscussion.reply.length)
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
      console.log(userBookmark.length);
      if (userBookmark.length > 0) {
        content.innerHTML = '<bookmark-list></bookmark-list>';
        const userBookmarkElement = document.querySelector('bookmark-list');
        userBookmarkElement.bookmarks = userBookmark;
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