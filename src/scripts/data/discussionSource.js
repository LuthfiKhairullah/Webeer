import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class DiscussionSource {
  static async getDiscussion() {
    try {
      const responseJson = axios.get(API_ENDPOINT.DISCUSSION);
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }

  static async addDiscussion(discussion) {
    try {
      const responseJson = axios.post(API_ENDPOINT.DISCUSSION, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discussion),
      });
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }
}
export default DiscussionSource;