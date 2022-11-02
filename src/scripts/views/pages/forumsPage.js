import DataSource from '../../data/dataSource';
import '../components/discussionList';
import '../components/searchBar';
import '../components/filterList';

const Discussion = {
  async render() {
    return `
      <div class="container-md">
        <div class="d-flex">
          <filter-list></filter-list>
          <div class="container-fluid">
            <search-bar></search-bar>
            <discussion-list></discussion-list>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const discussions = await DataSource.getData();
    const discussionListElement = document.querySelector('discussion-list');
    discussionListElement.discussions = discussions;
  },

};
export default Discussion;
