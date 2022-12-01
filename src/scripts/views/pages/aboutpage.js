const AboutPage = {
  async render() {
    return `
      <div class="container-fluid d-flex">
        <img src="image/hero-about.png" alt="hero-img">
      </div>
      <div class="container border-0 About">
        <div class="card w-100">
          <div class="card-header fw-bold text-center">
            ABOUT WEBEER
          </div>
          <div class="card-body fw-normal fs-4">
            <p class="card-text"> Webeer merupakan suatu website yang mewadahi para developer untuk melakukan diskusi. Webeer memiliki fitur seperti membuat diskusi dan mencari pekerjaan.
            <br></br>
            Membuka situs webeer untuk mencari jawaban penyelesaian masalah coding yang sering dihadapi para programer. Pertanyaan yang sudah ditandai dengan jenis bahasa pemrogramannya dan memberikan info jika diskusi tersebut membantu programer lain dalam hal masalah yang sama dimaksudkan untuk memudahkan user untuk mencari informasi terkait.
            Setiap user webeer memiliki profile masing-masing sehingga user perlu melakukan login terlebih dahulu. Pada profile user dapat melihat diskusi apa saja yang telah dibuat hingga nilai activity yang telah diperoleh.
            Setiap user Webeer memiliki nilai activity pada profilenya masing-masing. Nilai keaktifan tersebut didapat dari seberapa sering menjawab pertanyaan dan bertanya di dalam forum diskusi.
            <br></br>
            Contoh jika menjawab pertanyaan maka user akan mendapatkan nilai. Nilai pada activity berupa grade A sampai E dan setiap grade memiliki batas nilai yang berbeda, dimana semakin banyak menjawab dan bertanya maka grade akan meningkat.
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
        <div class="card container-about">
          <div class="card-body text-center rounded-4" >
            DEVELOPER 
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
      <div class="col">
        <div class="card container-about h-100">
          <div class="card-body">
            <h5 class="card-title">jovita</h5>
            <p class="card-text">ini tentang jovita</p>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {

  },
};
export default AboutPage;
