import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import User from '../../data/loginSource';
import '../components/userProfileEdit';
import UrlParser from '../../routes/urlParser';

const ProfileEditPage = {
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
      document.location = `#/editprofile/${url.id}`;
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }
    return `
        <user-profile-edit></user-profile-edit>
        <message-container></message-container>
    `;
  },
  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const userProfile = await User.getUser();
    console.log(userProfile);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const userProfileElement = document.querySelector('user-profile-edit');
    userProfileElement.user = userProfile;
    const countrySelected = document.getElementsByName('countryselect');
    countrySelected.forEach((country) => {
      if (userProfile.country === country.value) {
        country.setAttribute('selected', '');
      }
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
        const data = await User.Edit(url.id, {
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
            document.location = '#/profile';
            document.location.reload();
          }, 2000);
        }
        console.log(
          document.querySelector('#edit-username').value,
          document.querySelector('#edit-contact').value,
          document.querySelector('#edit-profesi').value,
          document.querySelector('#edit-bio').value,
          text,
        );
      }
    });
  },
};
export default ProfileEditPage;