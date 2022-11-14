const addJobPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }
    return `
    <div class="container-add-job">
        <form>
        <h5>Rincian Lowongan Pekerjaan</h5>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Nama Perusahaan</label>
                <div class="col-sm-6">
                <input type="email" class="form-control  form-control-sm" id="exampleInputEmail1" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Posisi Pekerjaan</label>
                <div class="col-sm-6">
                <input type="email" class="form-control  form-control-sm" id="exampleInputEmail1" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Alamat Perusahaan</label>
                <div class="col-sm-6">
                <input type="email" class="form-control  form-control-sm" id="exampleInputEmail1" >
                </div>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Logo Perusahaan</label>
                <div class="col-sm-6">
                <input type="file" class="form-control  form-control-sm" id="exampleInputEmail1" >
                </div>
             </div>
            <h5>Rincian Kualifikasi Pekerja</h5>
            <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Deskripsi Pekerjaan</label>
                    <div class="col-sm-6">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
             </div>
             <div class="mb-3 row">
                 <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Level</label>
                 <div class="col-sm-2">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Level</option>
                        <option value="1">Entry</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Expert</option>
                    </select>
                 </div>
                 <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Bekerja di</label>
                 <div class="col-sm-2">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>From</option>
                        <option value="1">Onsite</option>
                        <option value="2">Remote</option>
                        <option value="3">Hybrid</option>
                    </select>
                 </div>
                 <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Waktu</label>
                 <div class="col-sm-2">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Waktu</option>
                        <option value="1">Full Time</option>
                        <option value="2">Part Time</option>
                    </select>
                 </div>
            </div>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Gaji</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
                </div>
           </div>
           <div class="mb-3 row">
           <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Kualifikasi</label>
               <div class="col-sm-6">
                   <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
                   <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
                   <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
                   <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
                   <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
              </div>
            </div>
            <div class="mb-3 row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Link Perusahaan</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control  form-control-sm" id="exampleInputEmail1" >
                </div>
           </div>
           <button class="btn btn-primary"> Submit </button>
        </form>
    </div>`;
  },

};
export default addJobPage;