import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class JobSource {
  static async getJobs() {
    try {
      const responseJson = axios.get(API_ENDPOINT.JOB_ITEM);
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getJobsDetail(_id) {
    try {
      const responseJson = axios.get(API_ENDPOINT.JOB_DETAIL(_id));
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getJobsSearch(keyword) {
    try {
      const responseJson = axios.get(API_ENDPOINT.JOB_SEARCH(keyword));
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getCompanyJob() {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.GET_JOB}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      console.log(response);
      return response;
    } catch (err) {
      return console.log(err);
    }
  }

  static async DeleteJob(id) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.JOB_DELETE(id)}`,
        method: 'DELETE',
        headers: {
          auth: `${jwt}`,
        },
      });
      return response.data;
    } catch (error) {
      return { error: err.response.data.message || err.message };
    }
  }
}
export default JobSource;