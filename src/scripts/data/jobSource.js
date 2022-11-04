class JobSource {
  static async getJobs() {
    try {
      const response = await fetch('http://localhost:3000/api/jobs');
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }
}
export default JobSource;