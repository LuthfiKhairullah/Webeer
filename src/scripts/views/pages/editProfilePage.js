import User from '../../data/loginSource';
import '../components/userProfileEdit';
import UrlParser from '../../routes/urlParser';

const ProfileEditPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }
    return `
        <user-profile-edit></user-profile-edit>
        <message-container></message-container>
        `;
  },
  async afterRender() {
    const messageText = document.querySelector('.modal-body');
    const message = document.querySelector('.modal-title');
    const userProfile = await User.getUser();
    console.log(userProfile);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const userProfileElement = document.querySelector('user-profile-edit');
    userProfileElement.user = userProfile;
    const form = document.querySelector('#edit-user');
    console.log(form);
    const test = document.querySelector('#edit-country');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { text } = test.options[test.selectedIndex];
      const data = await User.Edit(url.id, {
        username: document.querySelector('#edit-username').value,
        contact: document.querySelector('#edit-contact').value,
        profesi: document.querySelector('#edit-profesi').value,
        bio: document.querySelector('#edit-bio').value,
        image: document.querySelector('#edit-photo').files[0],
        country: text,
      });
      if (data.error) {
        messageText.innerHTML = `${data.error}`;
        message.innerHTML = 'WARNING';
        message.classList.add('text-warning');
      } else {
        messageText.innerHTML = `${data.data.message}`;
        message.innerHTML = 'SUCCESS';
        message.classList.add('text-success');
      }
      console.log(
        document.querySelector('#edit-username').value,
        document.querySelector('#edit-contact').value,
        document.querySelector('#edit-profesi').value,
        document.querySelector('#edit-bio').value,
        text,
      );
    });
  },
};
export default ProfileEditPage;