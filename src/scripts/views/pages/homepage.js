const HomePage = {
  async render() {
    return `
          <div class="container-homepage">
            <div class="container-main-homepage">
              <div class="container-main-text-homepage">
                <h2 class="text-dark fw-bold">Welcome to Webeer!
                </h2><p class="fs-5">
                Discussion Platform
                Indonesian Web Developer<br>
                Join to interact with each other
                fellow web developers in Indonesia
                </p>
                <a class="btn text-light fw-bold" style="border-radius:30px; background-color:#344D67;" href="#/login" id="buttonHomePage">Get Started</a>
              </div>
              <img src="./asset/hero-img.png" class="main-image-homepage" >
            </div>
            <div class="container-about-homepage">
              <div class="container-about-card-homepage">
                <div class="card" style="width: 18rem;">
                  <img src="./asset/fordis.png"  style="width:200px;  height:200px; padding:20px; margin:0 auto;">
                  <h3 class="fw-bolder">Discussion Forum</h3>
                </div>
                <div class="card" style="width: 18rem;">
                  <img src="./asset/loker.png" style="width:200px; height:200px; padding:20px;  margin:0 auto;">
                  <h3 class="fw-bolder">Job Vacancy</h3>
                </div>
              </div>
              <h2 class="text-light fw-bold"> Why does it have to be Webeer?</h2>
              <p class="text-light">Webeer is a website designed for
              Web Developer Indonesia to be able to interact with each other
              and also looking for jobs.</p>
            </div>
            <div class="container-end-homepage">
            <img src="./asset/picture.png" class="image-end-homepage">
              <div class="container-end-text-homepage">
                  <h2 class="text-dark fw-bold">
                  Find answers
                  <br>your problem!
                </h4>
                <p class="text-dark">
                  With Webeer, ask your problem or
                  <br>contribute to solving problems
                <br>Other Web Developers.
                </p>
              </div>
            </div>
          </div>
          <footer-bar></footer-bar>
        `;
  },

};
export default HomePage;
