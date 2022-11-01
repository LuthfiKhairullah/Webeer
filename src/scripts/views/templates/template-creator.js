const DetailJobsSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class= "card-item">
    </div>`;
  }
  return template;
};

const createDiscussionItemTemplate = (discussion) => `
  <div class="mx-5 mb-3">
    <a href="/#/${discussion.id}" class="btn border-0 text-start">
      <div class="card w-100">
        <div class="card-body">
          <div class="card-title d-flex justify-content-between">
            <h5>${discussion.title}</h5>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 20px;">
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
          <small class="card-subtitle mb-2 text-muted">${discussion.date}</small>
          <p class="card-text">${discussion.discussion}</p>
        </div>
        <div class="card-footer bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
          </svg>
        </div>
      </div>
    </a>
  </div>
`;

const createAddDiscussionTemplate = () => `
  <a href="/#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
`;

export {
  DetailJobsSkeleton,
  createDiscussionItemTemplate,
  createAddDiscussionTemplate,
};
