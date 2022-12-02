const HomePage = {
  async render() {
    return `
          <h2>HomePage</h2>
          <div class="asd"></div>
      <!-- Jumbotron -->
      <div class="d-flex flex-wrap" id="home">
        <div class="section-text">
          <h4 class="welcome-text">Welcome to Webeer!</h4>
          <h1 class="title">Discussion Platform<br>Indonesian Web Developer</h1>
          <p class="title-desc">Join to interact with each other<br>fellow web developers in Indonesia</p>
          <div class="d-flex flex-wrap" style="width:500px;">
            <button class="register-btn btn btn-primary"> 
            <a class="nav-link" href="#/register">Register</a></button>
            <button class="login-btn">
            <a class="nav-link" href="#/login">Login</a></button>
          </div>
        </div>

        <div class="hero-img">
          <img src="image/hero-img.png" alt="hero-img">
          <div class="hero-icon">
            <img src="image/icon1.png" id="icon1" alt="icon1">
            <img src="image/icon2.png" alt="icon2" id="icon2">
            <img src="image/icon3.png" alt="icon3" id="icon3">
          </div>
      </div>
      </div>

      <!-- About -->

      <section id="about">
        <div class="about-img">
        <img src="image/bg-about.png" alt="about" id="about1">
        <img src="image/picture.png" alt="about" id="about2">
      </div>

      <div class="about-text">
        <h2>Why does it have to be Webeer?</h2>
        <p>Webeer is a website designed for
        Web Developer Indonesia to be able to interact with each other
        and also looking for jobs.</p>
      </div>


      <div class="column">
          <div class="card">
            <img src="image/fordis.png" alt="Forum" style="width:100%" id="card1">
            <div class="container">
          <h6><b>Forum Diskusi</b></h6>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="image/loker.png" alt="Lowongan" id="card2">
            <div class="container">
          <h6><b>Lowongan Pekerjaan</b></h6>
          </div>
          </div>
        </div>
      </section>


      <section id="akhir">
        <div class="akhir-img">
          <img src="image/laptop.png" alt="about" id="about1">
        </div>
        <div class="akhir-text">
          <h4 class="text">
            Temukan jawaban 
            <br>dari permasalahanmu!
          </h4>
          <p class="text-desc">
            Dengan Webeer, tanyakan permasalahanmu atau 
            <br>ikut berkontribusi membantu pemasalahan
           <br>Web Developer lainnya.
          </p>
          <button class="register-btn btn btn-primary">
          <a class="nav-link" href="#/forum">Coba Sekarang</a></button>
      </section>


      <!-- Footer -->

      <footer id="footer">
              <p>Copyright &copy; 2022 Webeer</p>
            </div>
          </div>
        </div>
      </footer>

        `;
  },

};
export default HomePage;
