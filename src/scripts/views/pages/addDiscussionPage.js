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

    const discussionCategory = await DiscussionSource.getDiscussionCategory();
    const categories = () => {
      let categories = '';
      discussionCategory.forEach((category) => {
        categories += `
          <option value="${category.name}">${category.name}</option>
        `;
      });
      return categories;
    };

    return `
    <div class="container pt-2">
        <div class="card w-100 border-0">
            <div class="card-body">
                <form id="form-discussion" method="POST" enctype="multipart/form-data">
                    <h2 class="card-title text-center">Tambah Diskusi</h2>
                    <h3 class="card-text">Kategori</h3>
                    <select name="categorySelect" id="categorySelect" class="form-select mb-2">
                        <option value="0" selected>Pilih kategori...</option>
                        ${categories()}
                    </select>
                    <h3 class="card-text">Diskusi</h3>
                    <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" placeholder="Masukkan Judul Diskusi">
                    <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                    placeholder="Masukkan diskusi"></textarea>
                    <button type="button" class="btn btn-light border" id="closeButton">Kembali</button>
                    <button type="submit" class="btn btn-dark">Kirim</button>
                </form>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const addDiscussionButton = document.querySelector('#form-discussion');
    const closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
      document.location = '#/forums';
    });
    const category = document.querySelector('#categorySelect');
    const arrcategory = [];
    category.addEventListener('change', () => {
      arrcategory.push(category.value);
    });
    addDiscussionButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputTitle = document.getElementById('inputTitle').value;
      const inputDiscussion = document.getElementById('inputDiscussion').value;
      const addDiscussion = await DiscussionSource.addDiscussion({
        title: inputTitle,
        categories: arrcategory,
        discussion: inputDiscussion,
      });
      console.log(addDiscussion);

      if (addDiscussion.error) {
        alert('Failed');
      } else {
        alert('Success');
      }
    });
  },
};

export default AddDiscussionPage;
