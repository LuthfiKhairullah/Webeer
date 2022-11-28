const HomeCompany = {
  async render() {
    return `
    <div class="container-dashboard-company">
     <div class="main-content-company">
        <div id="content-dashboard">
            <h1 class="fw-bold text-light">Welcome to Webber</h1>
            <p class="text-light fw-semibold fs-5">Hire skilled programmers, the best of them,people will be interested in reading the job posting content page</p>
            <a class="btn btn-light fw-bold" style="border-radius:25px;"> Post a Job now </a>
        </div>
        <div class="image-container">
        <img src="./asset/hero-dashboard-company.png">
        <div class="blob"></div>
         </div> 
    </div>
    </div>`;
  },

};
export default HomeCompany;