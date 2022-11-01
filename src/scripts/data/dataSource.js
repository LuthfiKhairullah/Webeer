/* eslint-disable prefer-promise-reject-errors */
import data from '../../DATA.json';

class DataSource {
  static getData() {
    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(data.discussions);
      } else {
        reject('Data is not found');
      }
    });
  }
}

export default DataSource;
