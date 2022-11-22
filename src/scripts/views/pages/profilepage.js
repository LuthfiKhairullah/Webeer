import DiscussionSource from '../../data/discussionSource';
import User from '../../data/loginSource';
import BookmarkDiscussionIdb from '../../data/bookmark-discussion-idb';
import '../components/userProfile';
import '../components/bookmarkList';
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
    const count = document.querySelector('.length-disscussion-user');
    count.innerHTML = userDiscussion.length;
    const content = document.querySelector('.container-discussion-user');
    content.innerHTML = '<discussion-list></discussion-list>';
    const userDiscussionElement = document.querySelector('discussion-list');
    userDiscussionElement.discussions = userDiscussion;
    const BtnBookmark = document.querySelector('#btn-bookmark');
    const BtnDiscussion = document.querySelector('#btn-discussion');
    BtnBookmark.addEventListener('click', async(event) =>{
      event.preventDefault();
      content.innerHTML = '<bookmark-list></bookmark-list>';
      const userBookmark = await BookmarkDiscussionIdb.getAllDiscussions();
      const userBookmarkElement = document.querySelector('bookmark-list');
      userBookmarkElement.bookmarks = userBookmark;
    });
    BtnDiscussion.addEventListener('click', async (event) =>{
      event.preventDefault();
      content.innerHTML = '<discussion-list></discussion-list>';
      const userDiscussion = await DiscussionSource.getUserDiscussion();
      const userDiscussionElement = document.querySelector('discussion-list');
      userDiscussionElement.discussions = userDiscussion;
    });
  },
};

export default ProfilePage;