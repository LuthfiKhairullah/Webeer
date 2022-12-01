import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import DiscussionSource from '../../data/discussionSource';
import { createAddDiscussionTemplateSkeleton, createFilterCategoryTemplate } from '../templates/template-creator';

const AddDiscussionPage = {
  async render() {
    const getToken = localStorage.getItem('token');
    const getRole = localStorage.getItem('role').replaceAll('"', '');
    if (getToken === null) {
      document.location = '#/login';
      localStorage.setItem('login', 'false');
      window.reload();
    } else if (getToken !== null && getRole === 'Company') {
      window.location.href();
      localStorage.setItem('login', 'true');
    } else if (getToken !== null && getRole === 'Programmer') {
      document.location = '#/adddiscussion';
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }

    return `
    <div class="container pt-2" id="addDiscussion">
        ${createAddDiscussionTemplateSkeleton()}
    </div>
    <message-container></message-container>
    `;
  },

  async afterRender() {
    const discussionCategory = await DiscussionSource.getDiscussionCategory();
    const addDiscussionContainer = document.querySelector('#addDiscussion');
    addDiscussionContainer.innerHTML = '<add-discussion></add-discussion>';
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
    const categoryList = document.querySelector('#listCategoryForSelected');
    categoryList.innerHTML = '';
    discussionCategory.forEach((categoryitem) => {
      categoryList.innerHTML += createFilterCategoryTemplate(categoryitem);
    });
    const categorySelect = document.getElementsByName('categoryFilter');
    console.log(categorySelect);
    const codeDiscussion = document.querySelector('#code');
    codeDiscussion.addEventListener('click', (event) => {
      event.preventDefault();
      const myTextArea = document.getElementById('inputDiscussion');
      const myTextAreaValue = myTextArea.value;
      const selected_txt = myTextAreaValue.substring(
        myTextArea.selectionStart,
        myTextArea.selectionEnd,
      );
      const before_txt = myTextAreaValue.substring(0, myTextArea.selectionStart);
      const after_txt = myTextAreaValue.substring(myTextArea.selectionEnd, myTextAreaValue.length);
      myTextArea.value = `${before_txt}\n~Enter Your Code is Here\n${selected_txt}\nDont Delete this~\n${after_txt}`;
    });
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
        addDiscussionContainer.classList.add('cursor-progress');
        const addDiscussion = await DiscussionSource.addDiscussion({
          title: inputTitle,
          categories: arrcategory,
          discussion: inputDiscussion,
        });

        if (addDiscussion.error) {
          addDiscussionContainer.classList.remove('cursor-progress');
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
