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
    const categoriesDiscussion = await DiscussionSource.getDiscussionCategory();
    const categoriesListElement = document.querySelector('#categoryList');
    categoriesDiscussion.forEach((category) => {
      if (discussions.categories.toString() === category.name.toString()) {
        categoriesListElement.innerHTML += `<option value="${category.name}" selected>${category.name}</option>`;
      } else {
        categoriesListElement.innerHTML += `<option value="${category.name}">${category.name}</option>`;
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
