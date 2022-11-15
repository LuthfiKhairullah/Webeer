import DiscussionSource from '../../data/discussionSource';

const AddDiscussionPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    console.log(getToken);
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    }
    return `
    <div class="container pt-2">
        <div class="card w-100 border-0">
            <div class="card-body">
                <form id="form-discussion">
                    <h2 class="card-title text-center">Tambah Diskusi</h2>
                    <h3 class="card-text">Kategori</h3>
                    <select name="kategori" id="kategori" class="form-select mb-2">
                        <option selected>Pilih kategori...</option>
                        <option value="html">HTML</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                    </select>
                    <select name="kategoris" id="kategoris" class="form-select mb-2">
                        <option selected>Pilih kategori...</option>
                        <option value="html">HTML</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                    </select>
                    <h3 class="card-text">Diskusi</h3>
                    <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" placeholder="Masukkan Judul Diskusi">
                    <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                    placeholder="Masukkan diskusi"></textarea>
                    <button class="btn btn-light border">Kembali</button>
                    <button type="submit" class="btn btn-dark">Kirim</button>
                </form>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const addDiscussionButton = document.querySelector('#form-discussion');
    const kategori = document.querySelector('#kategori');
    const arrkategori = [];
    kategori.addEventListener('change', () => {
      arrkategori.push(kategori.value);
    });
    addDiscussionButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      const discussion = {
        name: 'User',
        title: document.getElementById('inputTitle').value,
        categories: arrkategori,
        discussion: document.getElementById('inputDiscussion').value,
      };

      console.log(discussion);

      const addDiscussion = await DiscussionSource.addDiscussion(discussion);
      if (await addDiscussion.error === false) {
        alert('Success');
      } else {
        alert('Failed');
      }
    });
  },
};

export default AddDiscussionPage;
