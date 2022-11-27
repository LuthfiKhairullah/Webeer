import '../components/discussionDetail';
import '../components/discussionReply';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import DiscussionSource from '../../data/discussionSource';
import UrlParser from '../../routes/urlParser';
import User from '../../data/loginSource';
import SaveButtonInitiator from '../../utils/save-initiator';
import { createDiscussionDetailTemplateSkeleton, createDiscussionReplyTemplateSkeleton } from '../templates/template-creator';

const DetailDiscussionPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="d-flex">
          <div class="container-fluid">
            <discussion-detail>
              ${createDiscussionDetailTemplateSkeleton()}
            </discussion-detail>
            <discussion-reply>
              ${createDiscussionReplyTemplateSkeleton(5)}
            </discussion-reply>
          </div>
        </div>
      </div>
      <message-container></message-container>
    `;
  },

  async afterRender() {
    const test = document.querySelector('.picture-profile-reply');
    console.log(test);
    const messageText = document.querySelector('.toast-body');
    const messageTitle = document.querySelector('.toast-title');
    const messageContainer = document.getElementById('liveToast');
    const message = new Toast(messageContainer);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const discussions = await DiscussionSource.getDiscussion(url.id);
    const discussionCategory = await DiscussionSource.getDiscussionCategory();
    const user = await User.getUser();
    const discussionReply = await DiscussionSource.getDiscussionReply(url.id);
    console.log(discussions);
    // test.innerText=discussions.discussion
    const discussionListElement = document.querySelector('discussion-detail');
    discussionListElement.discussion = discussions;
    const lengthReply = document.querySelector('.lengthReply');
    lengthReply.innerText = discussions.reply.length;
    const categoryList = document.querySelector('#listCategoryForSelected');
    discussionCategory.forEach((categoryitem) => {
      if (discussions.categories.includes(categoryitem.name.toString())) {
        categoryList.innerHTML += `
          <input type="checkbox" class="btn-check" name="categoryFilter" id="${categoryitem.name}" value="${categoryitem.name}" autocomplete="off" checked>
          <label class="btn btn-outline-primary mb-1" for="${categoryitem.name}">${categoryitem.name}</label>
        `;
      } else {
        categoryList.innerHTML += `
          <input type="checkbox" class="btn-check" name="categoryFilter" id="${categoryitem.name}" value="${categoryitem.name}" autocomplete="off">
          <label class="btn btn-outline-primary mb-1" for="${categoryitem.name}">${categoryitem.name}</label>
        `;
      }
    });
    const categorySelect = document.getElementsByName('categoryFilter');
    const isSolvedCheck = document.getElementById('issolved');
    if (discussions.isSolved.toString() === 'true') {
      isSolvedCheck.setAttribute('checked', '');
    }
    const formEditDiscussion = document.querySelector('#form-edit-discussion');
    formEditDiscussion.addEventListener('submit', async (e) => {
      e.preventDefault();
      const arrcategory = [];
      const inputTitle = document.getElementById('inputTitle').value;
      const inputDiscussion = document.getElementById('inputDiscussion').value;
      categorySelect.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      if (arrcategory.length === 0 || inputTitle === '' || inputDiscussion === '') {
        if (arrcategory.length === 0) {
          messageText.innerHTML = 'Error! Please choose one category first!';
        } else if (inputTitle === '') {
          messageText.innerHTML = 'Error! Please type your title discussion';
        } else {
          messageText.innerHTML = 'Error! Please type your discussion';
        }
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        const editDiscussion = await DiscussionSource.editDiscussion(
          url.id,
          {
            title: inputTitle,
            categories: arrcategory,
            discussion: inputDiscussion,
            isSolved: isSolvedCheck.checked,
          },
        );
        if (editDiscussion.error) {
          messageText.classList.remove('text-bg-success');
          messageTitle.classList.remove('text-success');
          messageText.classList.add('text-bg-warning');
          messageTitle.classList.add('text-warning');
          messageText.innerHTML = `${editDiscussion.error}`;
          messageTitle.innerHTML = 'WARNING';
          message.show();
        } else {
          messageText.classList.remove('text-bg-warning');
          messageTitle.classList.remove('text-warning');
          messageText.classList.add('text-bg-success');
          messageTitle.classList.add('text-success');
          messageText.innerHTML = `${editDiscussion.message}`;
          messageTitle.innerHTML = 'SUCCESS';
          message.show();
          setTimeout(() => document.location.reload(), 1000);
        }
      }
    });

    const userOnlyElement = document.querySelector('#user-only');
    if (user._id === discussions.userid) {
      userOnlyElement.classList.replace('d-none', 'd-block');
    }
    const discussionReplyListElement = document.querySelector('discussion-reply');
    discussionReplyListElement.innerHTML = '';
    if (discussionReply !== undefined) {
      discussionReply.forEach((reply) => {
        discussionReplyListElement.replies = reply;
      });
    }

    const code = document.querySelector('#code');
    code.addEventListener('click', (event) => {
      event.preventDefault();
      const myTextArea = document.getElementById('inputReply');
      const myTextAreaValue = myTextArea.value;
      const selected_txt = myTextAreaValue.substring(
        myTextArea.selectionStart,
        myTextArea.selectionEnd,
      );
      const before_txt = myTextAreaValue.substring(0, myTextArea.selectionStart);
      const after_txt = myTextAreaValue.substring(myTextArea.selectionEnd, myTextAreaValue.length);
      myTextArea.value = `${before_txt}\n ` + '~Enter Your Code is Here' + `\n ${selected_txt}\n` + 'Dont Delete this~' + `\n${after_txt}`;
    });

    const replyButton = document.querySelector('#form-discussion-reply');
    replyButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputReply = document.getElementById('inputReply').value;
      if (inputReply !== '') {
        const addDiscussionReply = await DiscussionSource.addDiscussionReply(
          url.id,
          {
            reply: inputReply,
          },
        );
        if (addDiscussionReply.error) {
          messageText.classList.remove('text-bg-success');
          messageTitle.classList.remove('text-success');
          messageText.classList.add('text-bg-warning');
          messageTitle.classList.add('text-warning');
          messageText.innerHTML = 'Added reply failed';
          messageTitle.innerHTML = 'WARNING';
          message.show();
        } else {
          messageText.classList.remove('text-bg-warning');
          messageTitle.classList.remove('text-warning');
          messageText.classList.add('text-bg-success');
          messageTitle.classList.add('text-success');
          messageText.innerHTML = 'Added reply successfully';
          messageTitle.innerHTML = 'SUCCESS';
          message.show();
          const updateDiscussions = await DiscussionSource.getDiscussion(url.id);
          lengthReply.innerHTML = updateDiscussions.reply.length;
          const updateDiscussionReply = await DiscussionSource.getDiscussionReply(url.id);
          discussionReplyListElement.innerHTML = '';
          updateDiscussionReply.forEach((reply) => {
            discussionReplyListElement.replies = reply;
          });
        }
      } else {
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = 'Type your reply first';
        messageTitle.innerHTML = 'WARNING';
        message.show();
      }
    });
    const btnDelete = document.querySelector('#delete-discussion');
    btnDelete.addEventListener('click', async (event) => {
      event.preventDefault();
      const data = await DiscussionSource.DeleteDiscussion(url.id);
      if (data.error) {
        messageText.classList.remove('text-bg-success');
        messageTitle.classList.remove('text-success');
        messageText.classList.add('text-bg-warning');
        messageTitle.classList.add('text-warning');
        messageText.innerHTML = data.error;
        messageTitle.innerHTML = 'WARNING';
        message.show();
      } else {
        messageText.classList.remove('text-bg-warning');
        messageTitle.classList.remove('text-warning');
        messageText.classList.add('text-bg-success');
        messageTitle.classList.add('text-success');
        messageText.innerHTML = 'Delete discussion successfully';
        messageTitle.innerHTML = 'SUCCESS';
        message.show();

        setTimeout(() => document.location = '#/forums', 1000);
      }
    });
    SaveButtonInitiator.init({
      saveButtonContainer: document.querySelector('#saveButtonContainer'),
      discussions: {
        id: discussions._id,
        title: discussions.title,
        categories: discussions.categories,
        discussion: discussions.discussion,
        reply: discussions.reply,
        userimage: discussions.userimage,
        username: discussions.username,
        date: discussions.date,
        isSolved: discussions.isSolved,
      },
    });
  },

};

export default DetailDiscussionPage;
