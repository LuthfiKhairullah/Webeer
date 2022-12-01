import { async } from 'regenerator-runtime';
import User from '../../data/loginSource';
import UrlParser from '../../routes/urlParser';

const ResetPassword = {
  async render() {
    return `<div class="container-reset-password">
    <form id="reset-password">
    <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPasswordConfirm">
        </div>
    </div>
    <button class="btn btn-primary">Confirm</button>
    </form>
    </div>`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const form = document.getElementById('reset-password');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reset = await User.ForgetPwd(url.id, {
        newPassword: document.getElementById('inputPassword').value,
        confirmPassword: document.getElementById('inputPasswordConfirm').value,
      });
      if (reset.error) {
        console.log(reset.error);
      } else {
        console.log(reset);
      }
    });
  },
};
export default ResetPassword;