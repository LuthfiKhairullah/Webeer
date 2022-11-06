import CONFIG from './config';

const API_ENDPOINT = {
  JOB_ITEM: `${CONFIG.BASE_URL}/jobs/all`,
  JOB_DETAIL: (_id) => `${CONFIG.BASE_URL}/jobs/detail/${_id}`,
};
export default API_ENDPOINT;