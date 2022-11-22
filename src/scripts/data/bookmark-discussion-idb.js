import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const BookmarkDiscussionIdb = {
  async getDiscussion(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllDiscussions() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putDiscussion(discussions) {
    return (await dbPromise).put(OBJECT_STORE_NAME, discussions);
  },
  async deleteDiscussion(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default BookmarkDiscussionIdb;