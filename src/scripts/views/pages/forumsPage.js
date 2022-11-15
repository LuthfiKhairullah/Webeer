import '../components/discussionList';
import '../components/searchBar';
import '../components/filterList';
import FilterInitiator from '../../utils/filter-initiator';
import DiscussionSource from '../../data/discussionSource';

const ForumsPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="d-flex">
          <filter-list></filter-list>
          <div class="container-fluid">
            <div class="d-flex">
              <button id="filter" aria-label="filter list button" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 26px;">
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/>
                </svg>
              </button>
              <search-bar class="w-100"></search-bar>
            </div>
            <discussion-list></discussion-list>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    FilterInitiator.init({
      button: document.querySelector('#filter'),
      filter: document.querySelector('#filter-drawer'),
      content: document.querySelector('#close-filter'),
    });
    const discussions = await DiscussionSource.getAllDiscussion();
    console.log(discussions.data);
    const discussionListElement = document.querySelector('discussion-list');
    discussionListElement.discussions = discussions;
  },

};

export default ForumsPage;
