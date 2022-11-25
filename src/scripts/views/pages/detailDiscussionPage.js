import '../components/discussionDetail';
import '../components/discussionReply';
import DiscussionSource from '../../data/discussionSource';
import UrlParser from '../../routes/urlParser';
import User from '../../data/loginSource';
import SaveButtonInitiator from '../../utils/save-initiator';

const DetailDiscussionPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="d-flex">
          <div class="container-fluid">
            <discussion-detail></discussion-detail>
            <discussion-reply></discussion-reply>
          </div>
        </div>
      </div>
      <message-container></message-container>
    `;
  },

  async afterRender() {
    const test = document.querySelector('.picture-profile-reply');
    console.log(test);
    const messageText = document.querySelector('.modal-body');
    const message = document.querySelector('.modal-title');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const discussions = await DiscussionSource.getDiscussion(url.id);
    console.log(discussions);
    // test.innerText=discussions.discussion
    const discussionListElement = document.querySelector('discussion-detail');
    discussionListElement.discussion = discussions;
    const lengthReply = document.querySelector('.lengthReply');
    lengthReply.innerText = discussions.reply.length;
    const discussionCategory = await DiscussionSource.getDiscussionCategory();
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
      categorySelect.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      if (arrcategory.length === 0) {
        alert('Error! Please choose one category first!');
      }
      const inputTitle = document.getElementById('inputTitle').value;
      const inputDiscussion = document.getElementById('inputDiscussion').value;
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
        message.classList.remove('text-success');
        messageText.classList.remove('bg-success');
        messageText.innerHTML = `${editDiscussion.error}`;
        message.innerHTML = 'WARNING';
        message.classList.add('text-warning');
        messageText.classList.add('bg-warning');
      } else {
        message.classList.remove('text-warning');
        messageText.classList.remove('bg-warning');
        messageText.innerHTML = `${editDiscussion.message}`;
        message.innerHTML = 'SUCCESS';
        message.classList.add('text-success');
        messageText.classList.add('bg-success');
      }
    });

    const user = await User.getUser();
    const userOnlyElement = document.querySelector('#user-only');
    if (user._id === discussions.userid) {
      userOnlyElement.classList.replace('d-none', 'd-block');
    }
    const discussionReply = await DiscussionSource.getDiscussionReply(url.id);
    const discussionReplyListElement = document.querySelector('discussion-reply');
    discussionReply.forEach((reply) => {
      discussionReplyListElement.replies = reply;
    });
    console.log(discussionReply);

    const myTextArea = document.getElementById('inputReply');
    const myTextAreaValue = myTextArea.value;
    const selected_txt = myTextAreaValue.substring(myTextArea.selectionStart, myTextArea.selectionEnd);
    const before_txt = myTextAreaValue.substring(0, myTextArea.selectionStart);
    const after_txt = myTextAreaValue.substring(myTextArea.selectionEnd, myTextAreaValue.length);

    const code = document.querySelector('#code');
    code.addEventListener('click', (event) => {
      event.preventDefault();
      myTextArea.value = `${before_txt}\n ` + '~Enter Your Code is Here' + `\n ${selected_txt}\n` + 'Dont Delete this~' + `\n${after_txt}`;
    });

    const replyButton = document.querySelector('#form-discussion-reply');
    replyButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputReply = document.getElementById('inputReply').value;
      console.log(selected_txt);
      if (inputReply !== '') {
        const addDiscussionReply = await DiscussionSource.addDiscussionReply(
          url.id,
          {
            reply: inputReply,
          },
        );
        if (addDiscussionReply.error) {
          alert('Added reply failed');
        } else {
          alert('Added reply successfully');
          const updateDiscussions = await DiscussionSource.getDiscussion(url.id);
          lengthReply.innerHTML = updateDiscussions.reply.length;
          const updateDiscussionReply = await DiscussionSource.getDiscussionReply(url.id);
          discussionReplyListElement.innerHTML = '';
          updateDiscussionReply.forEach((reply) => {
            discussionReplyListElement.replies = reply;
          });
        }
      } else {
        alert('Type your reply first');
      }
    });
    const btnDelete = document.querySelector('#delete-discussion');
    btnDelete.addEventListener('click', async (event) => {
      event.preventDefault();
      const data = await DiscussionSource.DeleteDiscussion(url.id);
      console.log(data.message);
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
