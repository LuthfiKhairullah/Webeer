/* eslint-disable prefer-promise-reject-errors */
import data from '../../DATA.json';

class DataSource {
  static discussions() {
    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(data.discussions);
      } else {
        reject('Data is not found');
      }
    });
  }

  static users() {
    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(data.users);
      } else {
        reject('Data is not found');
      }
    });
  }
}
export default DataSource;
