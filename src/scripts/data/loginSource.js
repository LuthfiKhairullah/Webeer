import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class User {
  static async Login({ email, password }) {
    try {
      const url = `${API_ENDPOINT.LOGIN}`;
      const data = {
        email,
        password,
      };
      const response = await axios.post(url, data);
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      console.log(response);
      const responseToken = response.data.token;
      localStorage.setItem(
        'token',
        JSON.stringify(responseToken),
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
export default User;