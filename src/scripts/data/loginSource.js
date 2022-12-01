import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class User {
  static async Register({
    username, email, password, role,
  }) {
    try {
      const url = `${API_ENDPOINT.REGISTER}`;
      const data = {
        username,
        email,
        password,
        role,
      };
      const response = await axios.post(url, data);
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      console.log(response);
      return response.data.data;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async Login({ email, password }) {
    try {
      const url = `${API_ENDPOINT.LOGIN}`;
      const data = {
        email,
        password,
      };
      const response = await axios.post(url, data);
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      console.log(response);
      const responseToken = response.data.token;
      const responseRole = response.data.user.role;
      console.log(responseRole);
      localStorage.setItem(
        'token',
        JSON.stringify(responseToken),
      );
      localStorage.setItem(
        'role',
        JSON.stringify(responseRole),
      );
      return response;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async getUser() {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.USER}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async Logout() {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.LOGOUT}`,
        method: 'POST',
        headers: {
          auth: `${jwt}`,
        },
      });
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      localStorage.removeItem('token');
      window.location.reload();
      return response.data;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async Resend({ idUser, email }) {
    try {
      const url = `${API_ENDPOINT.RESEND}`;
      const data = {
        idUser,
        email,
      };
      const response = await axios.post(url, data);
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      return response;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async Verification({ idUser, OTP }) {
    try {
      const url = `${API_ENDPOINT.VERIFICATION}`;
      const data = {
        idUser,
        OTP,
      };
      const response = await axios.post(url, data);
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      return response;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async Edit(_id, {
    username, email, contact, profesi, bio, country, image, address, website, employee,
    employee2, industry, founded, specialities,
  }) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.EDIT(_id)}`,
        method: 'PUT',
        headers: {
          auth: `${jwt}`,
          'Content-Type': 'multipart/form-data',
        },
        data: {
          username,
          email,
          contact,
          profesi,
          bio,
          country,
          address,
          website,
          employee,
          employee2,
          industry,
          founded,
          specialities,
          image,
        },
      });
      if (response.status !== 201) {
        throw new Error(response.data.message);
      }
      return response;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  }

  static async getDetailUser(_id) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.USER_DETAIL(_id)}`,
        method: 'GET',
        headers: {
          auth: `${jwt}`,
        },
      });
      if (response.status !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data.data;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  }

  static async changePwdUser(_id, {
    oldPassword, newPassword, confirmPassword,
  }) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.USER_CHANGEPWD(_id)}`,
        method: 'PUT',
        headers: {
          auth: `${jwt}`,
        },
        data: {
          oldPassword,
          newPassword,
          confirmPassword,
        },
      });
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }
}

export default User;