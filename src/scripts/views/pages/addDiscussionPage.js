import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
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
                    <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" placeholder="Type your title discussion here">
                    <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                    placeholder="Type your discussion here"></textarea>
                    <button type="button" class="btn btn-secondary border" id="closeButton">Back</button>
                    <button type="submit" class="btn btn-primary" id="addButton">Send</button>
                </form>
            </div>
        </div>
    </div>
    <message-container></message-container>
    `;
  },

  async afterRender() {
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const addDiscussionButton = document.querySelector('#form-discussion');
    const addButton = document.querySelector('#addButton');
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
      const inputTitle = document.getElementById('inputTitle').value;
      const inputDiscussion = document.getElementById('inputDiscussion').value;
      if (arrcategory.length === 0 || inputTitle === '' || inputDiscussion === '') {
        if (arrcategory.length === 0) {
          messageText.innerHTML = 'Error! Please choose one category first!';
        } else if (inputTitle === '') {
          messageText.innerHTML = 'Error! Please type your title discussion';
        } else if (inputDiscussion === '') {
          messageText.innerHTML = 'Error! Please type your discussion';
        }
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        const addDiscussion = await DiscussionSource.addDiscussion({
          title: inputTitle,
          categories: arrcategory,
          discussion: inputDiscussion,
        });

        if (addDiscussion.error) {
          messageText.classList.remove('text-bg-success');
          messageTitle.classList.remove('text-success');
          messageText.classList.add('text-bg-warning');
          messageTitle.classList.add('text-warning');
          messageText.innerHTML = 'Add discussion failed';
          messageTitle.innerHTML = 'WARNING';
          message.show();
        } else {
          addButton.setAttribute('disabled', '');
          messageText.classList.remove('text-bg-warning');
          messageTitle.classList.remove('text-warning');
          messageText.classList.add('text-bg-success');
          messageTitle.classList.add('text-success');
          messageText.innerHTML = 'Add discussion successfully';
          messageTitle.innerHTML = 'SUCCESS';
          message.show();
          setTimeout(() => document.location = '#/forums', 2000);
        }
      }
    });
  },
};

export default AddDiscussionPage;
