const FilterInitiator = {
  init({ button, filter, content }) {
    button.addEventListener('click', (event) => {
      this._toggleFilter(event, filter);
    });

    content.addEventListener('click', (event) => {
      this._closeFilter(event, filter);
    });
  },

  _toggleFilter(event, filter) {
    event.stopPropagation();
    filter.classList.toggle('open-filter');
  },

  _closeFilter(event, filter) {
    event.stopPropagation();
    filter.classList.remove('open-filter');
  },
};

export default FilterInitiator;
