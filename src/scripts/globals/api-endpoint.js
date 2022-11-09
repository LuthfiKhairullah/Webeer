import CONFIG from './config';

const API_ENDPOINT = {
  DISCUSSION: `${CONFIG.BASE_URL}/discussions/`,
  JOB_ITEM: `${CONFIG.BASE_URL}/jobs/all`,
  JOB_DETAIL: (_id) => `${CONFIG.BASE_URL}/jobs/detail/${_id}`,
  JOB_SEARCH: (keyword) => `${CONFIG.BASE_URL}/jobs?pekerjaan=${keyword}`,
};
export default API_ENDPOINT;