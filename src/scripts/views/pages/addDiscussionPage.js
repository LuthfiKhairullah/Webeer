import DiscussionSource from '../../data/discussionSource';
import { createFilterCategoryTemplate } from '../templates/template-creator';

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
                <form id="form-discussion" method="POST" enctype="multipart/form-data">
                    <h2 class="card-title text-center">Add Dicussion</h2>
                    <h3 class="card-text">Category</h3>
                    <div id="listCategoryForSelected"></div>
                    <h3 class="card-text">Dicussion</h3>
                    <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" placeholder="Type your title discussion here" required>
                    <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                    placeholder="Type your discussion here" required></textarea>
                    <button type="button" class="btn btn-secondary border" id="closeButton">Back</button>
                    <button type="submit" class="btn btn-primary">Send</button>
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
    const discussionCategory = await DiscussionSource.getDiscussionCategory();
    const categoryList = document.querySelector('#listCategoryForSelected');
    discussionCategory.forEach((categoryitem) => {
      categoryList.innerHTML += createFilterCategoryTemplate(categoryitem);
    });
    const categorySelect = document.getElementsByName('categoryFilter');
    console.log(categorySelect);
    addDiscussionButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      const arrcategory = [];
      categorySelect.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      if (arrcategory.length === 0) {
        alert('Error! Please choose one category first!');
      } else {
        const inputTitle = document.getElementById('inputTitle').value;
        const inputDiscussion = document.getElementById('inputDiscussion').value;
        if (inputTitle === '') {
          alert('Error! Please type your title discussion');
        } else if (inputDiscussion === '') {
          alert('Error! Please type your discussion');
        } else {
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
            document.location = '#/forums';
            console.log(addDiscussion);
          }
        }
      }
    });
  },
};

export default AddDiscussionPage;
