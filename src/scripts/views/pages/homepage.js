const HomePage = {
  async render() {
    return `
      <!-- Jumbotron -->
      <section class="home">
        <div class="section-text">
          <h4 class="welcome-text">
            Selamat Datang di Webeer!
          </h4>
          <h1 class="title">
            Platform  Diskusi
            <br>Web Developer Indonesia
          </h1>
          <p class="title-desc">
            Gabung untuk saling berinteraksi dengan 
            <br>sesama web developer di Indonesia
          </p>
          <button class="register-btn btn btn-primary"> 
          <a class="nav-link" href="#/register">Register</a></button>
          <button class="login-btn">
          <a class="nav-link" href="#/login">Login</a></button>
        </div>

        <div class="hero-img">
          <img src="image/hero-img.png" alt="hero-img">
          <div class="hero-icon">
          <img src="image/icon1.png" id="icon1" alt="icon1">
          <img src="image/icon2.png" alt="icon2" id="icon2">
          <img src="image/icon3.png" alt="icon3" id="icon3">
        </div>
      </div>
      </section>

      <!-- About -->

      <section id="about">
        <div class="about-img">
        <img src="image/bg-about.png" alt="about" id="about1">
        <img src="image/picture.png" alt="about" id="about2">
      </div>

      <div class="about-text">
        <h2>Mengapa harus Webeer?</h2>
        <p>Webeer adalah website yang dirancang untuk para 
          Web Developer Indonesia untuk dapat saling berinteraksi
          dan juga mencari lowongan pekerjaan.</p>
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
