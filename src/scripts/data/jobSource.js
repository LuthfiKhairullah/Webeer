class JobSource {
  static async getJobs() {
    try {
      const response = await fetch('https://webeer.herokuapp.com/api/jobs');
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }
}
export default JobSource;