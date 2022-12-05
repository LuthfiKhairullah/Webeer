import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
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
      document.location = '/';
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
      document.location = '/';
      localStorage.setItem('login', 'false');
      window.reload();
    }

    return `
        <user-profile>
          ${createProfileTemplateSkeleton()}
        </user-profile>
        <message-container></message-container>
    `;
  },

  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
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

    const countrySelected = document.getElementsByName('countryselect');
    countrySelected.forEach((country) => {
      if (userProfile.country === country.value) {
        country.setAttribute('selected', '');
      }
    });
    const containerImg = document.querySelector('.container-img');

    document.querySelector('#edit-photo').addEventListener('change', () => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const uploaded_image = reader.result;
        containerImg.style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
    });
    const form = document.querySelector('#edit-user');
    const test = document.querySelector('#edit-country');
    const editButton = document.querySelector('#edit-simpan');
    const profileContainer = document.querySelector('.container-edit-profile');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      profileContainer.classList.add('cursor-progress');
      const { text } = test.options[test.selectedIndex];
      const inputUsername = document.querySelector('#edit-username').value;
      const inputContact = document.querySelector('#edit-contact').value;
      const inputProfesi = document.querySelector('#edit-profesi').value;
      const inputBio = document.querySelector('#edit-bio').value;
      const inputSkill = document.querySelector('#edit-skill').value;
      if (inputUsername === '') {
        profileContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = 'Error! Name can\'t null';
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        const data = await User.Edit(userProfile._id, {
          username: inputUsername,
          contact: inputContact,
          profesi: inputProfesi,
          bio: inputBio,
          image: document.querySelector('#edit-photo').files[0],
          country: text,
          specialities: inputSkill,
        });
        if (data.error) {
          profileContainer.classList.remove('cursor-progress');
          messageText.classList.remove('text-bg-success');
          messageTitle.classList.remove('text-success');
          messageText.classList.add('text-bg-warning');
          messageTitle.classList.add('text-warning');
          messageText.innerHTML = `${data.error}`;
          messageTitle.innerHTML = 'WARNING';
          message.show();
        } else {
          editButton.setAttribute('disabled', '');
          messageText.classList.remove('text-bg-warning');
          messageTitle.classList.remove('text-warning');
          messageText.classList.add('text-bg-success');
          messageTitle.classList.add('text-success');
          messageText.innerHTML = `${data.data.message}`;
          messageTitle.innerHTML = 'SUCCESS';
          message.show();
          setTimeout(() => {
            document.location.reload();
          }, 2000);
        }
      }
    });
    const editButtonPwd = document.querySelector('#editButton');
    const formPwd = document.querySelector('#form-changepwd');
    const changePasswordContainer = document.querySelector('.container-change-page');
    formPwd.addEventListener('submit', async (event) => {
      event.preventDefault();
      changePasswordContainer.classList.add('cursor-progress');
      const data = await User.changePwdUser(userProfile._id, {
        oldPassword: document.querySelector('#oldPwd').value,
        newPassword: document.querySelector('#newPwd').value,
        confirmPassword: document.querySelector('#confirmPwd').value,
      });
      if (data.error) {
        changePasswordContainer.classList.remove('cursor-progress');
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerText = `${data.error}`;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        editButtonPwd.setAttribute('disabled', '');
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerText = `${data.message}`;
        messageTitle.innerHTML = 'SUCCESS';
        message.show();
        setTimeout(() => document.location.reload(), 1000);
      }
    });
  },
};

export default ProfilePage;