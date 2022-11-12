import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class User {
  static async Login({ email, password }) {
    try {
      const response = await axios({
        url: `${API_ENDPOINT.LOGIN}`,
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
export default User;