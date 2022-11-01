import DataSource from '../../data/dataSource';
import '../components/discussionList';
import '../components/searchBar';

const Discussion = {
  async render() {
    return `
      <search-bar></search-bar>
      <discussion-list></discussion-list>
    `;
  },

  async afterRender() {
    const discussions = await DataSource.getData();
    const discussionListElement = document.querySelector('discussion-list');
    discussionListElement.discussions = discussions;
  },

};
export default Discussion;
