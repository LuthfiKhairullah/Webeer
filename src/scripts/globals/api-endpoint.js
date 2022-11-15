import CONFIG from './config';

const API_ENDPOINT = {
  DISCUSSION: `${CONFIG.BASE_URL}/discussions/`,
  DISCUSSION_DETAIL: (id) => `${CONFIG.BASE_URL}/discussions/${id}`,
  DISCUSSION_REPLY: (id) => `${CONFIG.BASE_URL}/discussions/reply/${id}`,
  JOB_ITEM: `${CONFIG.BASE_URL}/jobs/all`,
  JOB_DETAIL: (_id) => `${CONFIG.BASE_URL}/jobs/detail/${_id}`,
  JOB_SEARCH: (keyword) => `${CONFIG.BASE_URL}/jobs?profession=${keyword}`,
  REGISTER: `${CONFIG.BASE_URL}/users/register`,
  LOGIN: `${CONFIG.BASE_URL}/users/login`,
  LOGOUT: `${CONFIG.BASE_URL}/users/logout`,
};
export default API_ENDPOINT;