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
}
export default JobSource;