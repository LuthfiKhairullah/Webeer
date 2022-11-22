import BookmarkDiscussionIdb from '../data/bookmark-discussion-idb';
import { createSaveDiscussionButtonTemplate, createUnsaveDiscussionButtonTemplate } from '../views/templates/template-creator';

const saveButtonInitiator = {
  async init({ saveButtonContainer, discussions }) {
    this._saveButtonContainer = saveButtonContainer;
    this._discussions = discussions;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._discussions;

    if (await this._isDiscussionExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },
  async _isDiscussionExist(id) {
    const discussion = await BookmarkDiscussionIdb.getDiscussion(id);
    return !!discussion;
  },
  _renderSave() {
    this._saveButtonContainer.innerHTML = createSaveDiscussionButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await BookmarkDiscussionIdb.putDiscussion(this._discussions);
      this._renderButton();
    });
  },

  _renderSaved() {
    this._saveButtonContainer.innerHTML = createUnsaveDiscussionButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await BookmarkDiscussionIdb.deleteDiscussion(this._discussions.id);
      this._renderButton();
    });
  },
};

export default saveButtonInitiator;