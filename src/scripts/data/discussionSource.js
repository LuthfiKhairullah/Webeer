import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class DiscussionSource {
  static async getAllDiscussion() {
    try {
      const responseJson = await axios.get(API_ENDPOINT.DISCUSSION);
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getDiscussion(id) {
    try {
      const responseJson = await axios.get(API_ENDPOINT.DISCUSSION_DETAIL(id));
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async addDiscussion(discussion) {
    try {
      const responseJson = await axios.post(API_ENDPOINT.DISCUSSION, {
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

  static async getDiscussionReply(id) {
    try {
      const responseJson = await axios.get(API_ENDPOINT.DISCUSSION_REPLY(id));
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }
}
export default DiscussionSource;