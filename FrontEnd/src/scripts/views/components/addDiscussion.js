import DiscussionSource from '../../data/discussionSource';

const { Toast } = require('bootstrap/dist/js/bootstrap.bundle');
const { createAddDiscussionTemplate, createFilterCategoryTemplateAddDiscussion } = require('../templates/template-creator');

class AddDiscussion extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML += createAddDiscussionTemplate();
    const filterList = await DiscussionSource.getDiscussionCategory();
    const categoryList = document.querySelector('#listCategoryForSelected');
    filterList.forEach((category) => {
      categoryList.innerHTML += createFilterCategoryTemplateAddDiscussion(category);
    });
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const formAddDiscussion = document.querySelector('#form-add-discussion');
    const categorySelect = document.getElementsByName('categoryFilterAddDiscussion');
    const categorySelectElement = document.querySelector('.categoryFilterAddDiscussion');
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
    const allCategorySelectElement = document.querySelectorAll('.categoryFilterAddDiscussion');
    const addButton = document.querySelector('#addButton');
    formAddDiscussion.addEventListener('reset', async () => {
      allCategorySelectElement.forEach((cse) => {
        cse.removeAttribute('disabled');
      });
    });

    formAddDiscussion.addEventListener('change', async () => {
      const arrcategory = [];
      categorySelect.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      if (arrcategory.length > 2) {
        allCategorySelectElement.forEach((cse) => {
          if (!(cse.checked)) {
            cse.setAttribute('disabled', '');
          }
        });
      } else {
        allCategorySelectElement.forEach((cse) => {
          cse.removeAttribute('disabled');
        });
      }
    });

    formAddDiscussion.addEventListener('submit', async (e) => {
      e.preventDefault();
      const arrcategory = [];
      const inputTitle = document.getElementById('inputTitle');
      const inputDiscussion = document.getElementById('inputDiscussion');
      addButton.setAttribute('disabled', '');
      categorySelect.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      if (arrcategory.length === 0 || arrcategory.length > 3 || inputTitle.value === '' || inputDiscussion.value === '') {
        if (arrcategory.length === 0) {
          messageText.innerHTML = 'Error! Please choose one category first!';
          categorySelectElement.focus();
        } else if (arrcategory.length > 3) {
          messageText.innerHTML = 'Error! Category discussion max 3';
          categorySelectElement.focus();
        } else if (inputTitle.value === '') {
          messageText.innerHTML = 'Error! Please type your title discussion';
          inputTitle.focus();
        } else if (inputDiscussion.value === '') {
          messageText.innerHTML = 'Error! Please type your discussion';
          inputDiscussion.focus();
        }
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageTitle.innerHTML = 'WARNING';
        message.show();
        addButton.removeAttribute('disabled');
      } else {
        const addDiscussion = await DiscussionSource.addDiscussion({
          title: inputTitle.value,
          categories: arrcategory,
          discussion: inputDiscussion.value,
        });
        if (addDiscussion.error) {
          messageText.classList.remove('text-bg-success');
          messageTitle.classList.remove('text-success');
          messageText.classList.add('text-bg-warning');
          messageTitle.classList.add('text-warning');
          messageText.innerHTML = 'Add discussion failed';
          messageTitle.innerHTML = 'WARNING';
          message.show();
          addButton.removeAttribute('disabled');
        } else {
          messageText.classList.remove('text-bg-warning');
          messageTitle.classList.remove('text-warning');
          messageText.classList.add('text-bg-success');
          messageTitle.classList.add('text-success');
          messageText.innerHTML = 'Add discussion successfully';
          messageTitle.innerHTML = 'SUCCESS';
          message.show();
          setTimeout(() => document.location.reload(), 1000);
        }
      }
    });
  }
}

customElements.define('add-discussion', AddDiscussion);