class Pagination extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <nav class="pagination-container d-flex justify-content-center align-items-center text-center">
                <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
                  &laquo;
                </button>
                <div id="pagination-numbers"></div>
                <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page">
                  &raquo;
                </button>
              </nav>
          `;
    const paginationNumbers = document.querySelector('#pagination-numbers');
    const paginatedList = document.querySelector('discussion-list');
    const listItems = paginatedList.querySelectorAll('discussion-item');
    const nextButton = document.querySelector('#next-button');
    const prevButton = document.querySelector('#prev-button');

    const paginationLimit = 10;
    const pageCount = Math.ceil(listItems.length / paginationLimit);
    let currentPage = 1;

    const disableButton = (button) => {
      button.classList.add('disabled');
      button.setAttribute('disabled', true);
    };

    const enableButton = (button) => {
      button.classList.remove('disabled');
      button.removeAttribute('disabled');
    };

    const handlePageButtonsStatus = () => {
      if (currentPage === 1) {
        disableButton(prevButton);
      } else {
        enableButton(prevButton);
      }

      if (pageCount === currentPage) {
        disableButton(nextButton);
      } else {
        enableButton(nextButton);
      }
    };

    const handleActivePageNumber = () => {
      document.querySelectorAll('.pagination-number').forEach((button) => {
        button.classList.remove('active');
        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex == currentPage) {
          button.classList.add('active');
        }
      });
    };

    const appendPageNumber = (index) => {
      const pageNumber = document.createElement('button');
      pageNumber.className = 'pagination-number';
      pageNumber.innerHTML = index;
      pageNumber.setAttribute('page-index', index);
      pageNumber.setAttribute('aria-label', `Page ${index}`);

      paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
      for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
      }
    };

    const setCurrentPage = (pageNum) => {
      currentPage = pageNum;

      handleActivePageNumber();
      handlePageButtonsStatus();

      const prevRange = (pageNum - 1) * paginationLimit;
      const currRange = pageNum * paginationLimit;

      listItems.forEach((item, index) => {
        item.classList.add('d-none');
        if (index >= prevRange && index < currRange) {
          item.classList.remove('d-none');
        }
      });
    };

    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener('click', () => {
      setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener('click', () => {
      setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll('.pagination-number').forEach((button) => {
      const pageIndex = Number(button.getAttribute('page-index'));

      if (pageIndex) {
        button.addEventListener('click', () => {
          setCurrentPage(pageIndex);
        });
      }
    });
  }
}

customElements.define('pagination-list', Pagination);