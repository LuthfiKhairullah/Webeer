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
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const discussions = await DiscussionSource.getDiscussion(url.id);
    console.log(discussions);
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
        alert('Failed');
      } else {
        alert('Success');
        document.location = `#/detaildiscussion/${url.id}`;
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
