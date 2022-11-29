const HomeCompany = {
  async render() {
    return `
    <div class="container-dashboard-company">
    <div class="main-content-company">
    <svg id="blob2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#4F46E5"></stop><stop offset="100%" stop-color="#ff003d"></stop></linearGradient></defs><path d="M88.5,64Q84,78,71,86.5Q58,95,44,90Q30,85,21,74.5Q12,64,7.5,48.5Q3,33,14.5,20.5Q26,8,41.5,9Q57,10,71,15.5Q85,21,89,35.5Q93,50,88.5,64Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
    <div id="content-dashboard">
    <svg id="blob" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#4F46E5"></stop><stop offset="100%" stop-color="#ff003d"></stop></linearGradient></defs><path d="M84.5,64Q89,78,77,87.5Q65,97,50.5,95Q36,93,24.5,85Q13,77,7.5,63.5Q2,50,6.5,35.5Q11,21,25.5,20Q40,19,52.5,11.5Q65,4,75.5,14Q86,24,83,37Q80,50,84.5,64Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
    <div id="content-text-dashboard">
     <h1 class="fw-bold text-light">Welcome to Webeer</h1>
     <p class="text-light fw-semibold fs-5">Hire skilled programmers, the best of them,people will be interested in reading the job posting content page</p>
     <a class="btn btn-light fw-bold" style="border-radius:25px;"> Post a Job now </a>
     </div>
    </div>
        <div class="image-container">
        <img src="./asset/hero-dashboard-company.png">
        </div>
        <svg id="blob3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#4F46E5"></stop><stop offset="100%" stop-color="#ff003d"></stop></linearGradient></defs><path d="M77.5,64Q84,78,70,81.5Q56,85,42,86.5Q28,88,18,76.5Q8,65,26,56.5Q44,48,37.5,32.5Q31,17,43,18Q55,19,68.5,21.5Q82,24,76.5,37Q71,50,77.5,64Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
    </div>`;
  },

};
export default HomeCompany;