const AboutPage = {
  async render() {
    return `
    <div class="container-about-bg">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="text-white text-center container-about-description">
            <h1 class="text-center">About Us</h1>
            <p>
              Webeer is a website that accommodates developers for discussions. Webeer has features such as creating discussions and searching for jobs.
            </p>
          </div>
          <div class="container-about-img">
            <img class="w-100" src="../image/hero-about-us.png" alt="image about us">
          </div>
        </div>
      </div>
    </div>
    <div class="container-about-features">
      <div class="text-center">
        <h1>Features</h1>
        <p>Weber has several features such as :</p>
      </div>
    </div>
      <!--<div class="About">
        <div class="card container-about">
          <div class="card-header text-center">
            WEBEER
          </div>
          <div class="card-body fw-normal fs-4">
            <p class="card-text"> Webeer merupakan suatu website yang mewadahi para developer untuk melakukan diskusi. Webeer memiliki fitur seperti membuat diskusi dan mencari pekerjaan.
              <br></br>
              Membuka situs webeer untuk mencari jawaban penyelesaian masalah coding yang sering dihadapi para programer. Pertanyaan yang sudah ditandai dengan jenis bahasa pemrogramannya dan memberikan info jika diskusi tersebut membantu programer lain dalam hal masalah yang sama dimaksudkan untuk memudahkan user untuk mencari informasi terkait.
              Setiap user webeer memiliki profile masing-masing sehingga user perlu melakukan login terlebih dahulu. Pada profile user dapat melihat diskusi apa saja yang telah dibuat hingga nilai activity yang telah diperoleh.
              Setiap user Webeer memiliki nilai activity pada profilenya masing-masing. Nilai keaktifan tersebut didapat dari seberapa sering menjawab pertanyaan dan bertanya di dalam forum diskusi.
              <br></br>
              Contoh jika menjawab pertanyaan maka user akan mendapatkan nilai. Nilai pada activity berupa grade A sampai E dan setiap grade memiliki batas nilai yang berbeda, dimana semakin banyak menjawab dan bertanya maka grade akan meningkat.
            </p>
          </div>
        </div>
        <div class="card container-about">
          <div class="card-header text-center">
            Fitur Job
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0 ">
              <p>WEBEER memiliki fitur keunggulan lainnya yang tak kalah penting dan tentunya akan membantu para programmer dalam mencari pekerjaan yang diinginkan, <br>
              Dengan Fitur JOB dimana para programer dapat mencari job atau pekerjaan yang diinginkan dengan melihat detail dari suatu perusahaan atau pekerjaan tersebut dan dengan mengklik aplly pada halaman job atau perusahaan yang dinginkan akan mengantarkan kita ke halaman glints untuk lebih detail dari sebuah perusahan tersebut</p>
            </blockquote>
          </div>
        </div>
        <br></br>
        <div class="card container-about">
          <div class="card-body text-center">
            OUR TEAM
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4 row-cols-auto">
        <div class="col">
          <div class="card container-about h-100">
            <img src="../asset/fajar.jpeg" class="card-img-top w-auto img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Muhammad Fajar Yudhistira H</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card container-about h-100">
            <img src="../asset/Luthfi.jpg" class="card-img-top w-auto img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Muhammad Luthfi Khairullah</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card container-about h-100 ">
            <img src="../asset/muja.jpg" class="card-img-top w-auto img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">Siti Mujadilah</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card container-about h-100 ">
            <img src="../asset/jovita.jpg" class="card-img-top w-auto img-thumbnail" alt="">
            <div class="card-body">
              <h5 class="card-title text-center">Jovita Amelinda</h5>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      -->
    `;
  },
};
export default AboutPage;