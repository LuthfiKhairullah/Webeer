const AboutPage = {
  async render() {
    return `
      <div class="About">
        <div class="card container-about">
          <div class="card-header">
            About
          </div>
          <div class="card-body">
            <h5 class="card-title">WEBEER</h5>
            <p class="card-text">ini tempat pemberitahuan tentang webeer</p>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card container-about h-100">
              <div class="card-body">
                <h5 class="card-title">fajar</h5>
                <p class="card-text">ini tentang fajar</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card container-about h-100">
              <div class="card-body">
                <h5 class="card-title">lutfi</h5>
                <p class="card-text"> ini tentang luthfi</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card container-about h-100">
              <div class="card-body">
                <h5 class="card-title">muja</h5>
                <p class="card-text">ini tentang mujafilah</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card container-about h-100">
              <div class="card-body">
                <h5 class="card-title">jovita</h5>
                <p class="card-text">ini tentang jovita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};
export default AboutPage;
