import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class JobSource {
  static async addJobs({
    company, profession, address, descriptionCompany, descriptionProfession, level,
    link, salary, salary2, timeWork, workplace, qualification, image,
  }) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.JOB_ADD}`,
        method: 'POST',
        headers: {
          auth: `${jwt}`,
          'Content-Type': 'multipart/form-data',
        },
        data: {
          company,
          profession,
          address,
          descriptionCompany,
          descriptionProfession,
          level,
          link,
          salary,
          salary2,
          timeWork,
          workplace,
          qualification,
          image,
        },
      });
      if (response.statusText !== 'Created') {
        throw new Error(response.data.message);
      }
      return response;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  }

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

  static async EditJob(id, {
    company, profession, address, descriptionCompany, descriptionProfession, level,
    link, salary, salary2, timeWork, workplace, qualification, image,
  }) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.JOB_EDIT(id)}`,
        method: 'PUT',
        headers: {
          auth: `${jwt}`,
          'Content-Type': 'multipart/form-data',
        },
        data: {
          company,
          profession,
          address,
          descriptionCompany,
          descriptionProfession,
          level,
          link,
          salary,
          salary2,
          timeWork,
          workplace,
          qualification,
          image,
        },
      });
      if (response.statusText !== 'Created') {
        throw new Error(response.data.message);
      }
      return response;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
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
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }
}

export default JobSource;