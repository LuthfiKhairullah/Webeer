import '../components/discussionList';
import '../components/searchDiscussion';
import '../components/filterList';
import FilterInitiator from '../../utils/filter-initiator';
import DiscussionSource from '../../data/discussionSource';
import {
  createDiscussionItemTemplateSkeleton,
  createFilterCategoryTemplate,
  createFilterListTemplateSkeleton,
  createSearchDiscussionEmpty,
} from '../templates/template-creator';

const ForumsPage = {
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
      document.location = '#/forums';
      localStorage.setItem('login', 'true');
    } else {
      document.location = '/';
      localStorage.clear();
      window.reload();
    }

    return `
      <div class="d-flex container-forum">
        <div class="filterList">
          <div class="filterListSkeleton">
            ${createFilterListTemplateSkeleton()}
          </div>
        </div>
        <div class="container-fluid">
          <div class="d-flex">
            <button id="filter" aria-label="filter list button" class="btn p-0 mb-2 me-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 26px;">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/>
              </svg>
            </button>
            <div class="w-100" id="searchBarDiscussion">
              <div class="d-flex mb-2 placeholder-glow" id="form-searchDiscussion">
                <input class="form-control bg-secondary placeholder disabled border-0" disabled>
                <button class="btn btn-dark text-dark disabled ms-1">Search</button>
              </div>
            </div>
          </div>
          <div class ="list">
            ${createDiscussionItemTemplateSkeleton(10)}
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const discussions = await DiscussionSource.getAllDiscussion();
    const searchBarDiscussion = document.querySelector('#searchBarDiscussion');
    searchBarDiscussion.innerHTML = '<search-discussion></search-discussion>';
    console.log(discussions);
    const content = document.querySelector('.list');
    content.innerHTML = '<discussion-list></discussion-list>';
    const discussionListElement = document.querySelector('discussion-list');
    discussionListElement.discussions = discussions;
    const filterList = await DiscussionSource.getDiscussionCategory();
    const listFilter = document.querySelector('.filterList');
    listFilter.innerHTML = '<filter-list></filter-list>';
    const filterListElement = document.querySelector('.filterCategory');
    filterListElement.innerHTML = '';
    filterList.forEach((category) => {
      filterListElement.innerHTML += createFilterCategoryTemplate(category);
    });
    FilterInitiator.init({
      button: document.querySelector('#filter'),
      filter: document.querySelector('#filter-drawer'),
      content: document.querySelector('#close-filter'),
    });
    const searchInput = document.querySelector('#searchDiscussion');
    const searchButton = document.querySelector('#form-searchDiscussion');
    const check = document.getElementsByName('categoryFilter');
    const sort = document.getElementsByName('sort');
    searchButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      sort.forEach((s) => {
        if (s.checked) {
          if (s.value === 'solved') {
            sort.value = 'true';
          } else if (s.value === 'unsolved') {
            sort.value = 'false';
          } else if (s.value === 'oldest') {
            sort.value = 'oldest';
          } else {
            sort.value = '';
          }
        }
      });
      const arrcategory = [];
      check.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      let discussion = '';
      if (arrcategory.length > 0) {
        let formatcategory = '';
        arrcategory.forEach((category) => {
          formatcategory += `category=${category}&`;
        });
        discussion = await DiscussionSource.getAllDiscussion(`${formatcategory}search=${searchInput.value}&sort=${sort.value}`);
      } else {
        discussion = await DiscussionSource.getAllDiscussion(`search=${searchInput.value}&sort=${sort.value}`);
      }
      if (discussion.length > 0) {
        content.innerHTML = '<discussion-list></discussion-list>';
        const discussionListElement = document.querySelector('discussion-list');
        discussionListElement.discussions = discussion;
      } else {
        content.innerHTML = createSearchDiscussionEmpty();
      }
    });
    const filterButton = document.querySelector('#form-filter');
    filterButton.addEventListener('reset', async (e) => {
      e.preventDefault();
      sort.forEach((s) => {
        if (s.value === 'latest') {
          s.checked = true;
        } else {
          s.checked = false;
        }
      });
      check.forEach((c) => {
        c.checked = false;
      });
    });
    filterButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      sort.forEach((s) => {
        if (s.checked) {
          if (s.value === 'solved') {
            sort.value = 'true';
          } else if (s.value === 'unsolved') {
            sort.value = 'false';
          } else if (s.value === 'oldest') {
            sort.value = 'oldest';
          } else {
            sort.value = '';
          }
        }
      });
      const arrcategory = [];
      check.forEach((c) => {
        if (c.checked) {
          arrcategory.push(c.value);
        }
      });
      let discussion = '';
      if (arrcategory.length > 0) {
        let formatcategory = '';
        arrcategory.forEach((category) => {
          formatcategory += `category=${category}&`;
        });
        discussion = await DiscussionSource.getAllDiscussion(`${formatcategory}search=${searchInput.value}&sort=${sort.value}`);
      } else {
        discussion = await DiscussionSource.getAllDiscussion(`search=${searchInput.value}&sort=${sort.value}`);
      }
      if (discussion.length > 0) {
        content.innerHTML = '<discussion-list></discussion-list>';
        const discussionListElement = document.querySelector('discussion-list');
        discussionListElement.discussions = discussion;
      } else {
        content.innerHTML = createSearchDiscussionEmpty();
      }
    });
  },

};

export default ForumsPage;
