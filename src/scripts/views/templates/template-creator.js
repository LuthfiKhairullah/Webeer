import { showFormattedDate } from '../utils/formate-date';

const DetailJobsSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card-item">
    </div>`;
  }
  return template;
};
const createItemJob = (jobs) => `
<div class = "card-item">
<img src="${jobs.image}" class="card-image">
<h6 class="fw-bold">${jobs.company}</h6>
<h6>${jobs.profession}</h6>
<p>${showFormattedDate(jobs.createdAt)}</p>
<p class="fw-bold">${jobs.address}</p>
<button value=${jobs._id} class="btn btn-primary fw-bold btn-detail btn-sm">LIHAT</button>
</div>
`;

const createDetailJob = (detail) => `
<div class="detail-container">
  <div class="header-detail">
    <div class="image-detail">
      <img src="${detail.image}">
    </div>
    <div class="title-detail">
      <h4>${detail.company}</h4>
      <p>${detail.address}</p>
      <p>${showFormattedDate(detail.createdAt)}</p>
    </div>
  </div>
  <div class="description-detail">
  <h6>Information</h6>
  <p>${detail.details.descriptionCompany}</p>
    <div class="work-detail">
      <div class="work-1">
        <p class="fw-bold">Salary</p>
        <p>${detail.details.salary}</p>
        <p class="fw-bold">Level</p>
        <p>${detail.details.level}</p>
      </div>
      <div class="work-2">
        <p class="fw-bold">Work from</p>
        <p>${detail.details.workplace}</p>
        <p class="fw-bold">Time</p>
        <p>${detail.details.timeWork}</p>
      </div>
    </div>
  </div>
  <div class="kualifikasi-detail">
    <h6>Requirement</h6>
    <p>${detail.details.descriptionProfession}</p>
    <ul class="test"><ul>
  </div>
  <div class="footer-detail">
  <a href="${detail.details.link}"><button type="button" class="detail-link btn btn-primary btn-sm">Apply</button></a>
  </div>

</div>
`;

const createDiscussionItemTemplate = (discussion) => {
  let isSolvedClass = '';
  if (discussion.isSolved === false) {
    isSolvedClass = 'text-bg-danger';
    discussion.isSolved = 'Not Solved';
  } else {
    isSolvedClass = 'text-bg-success';
    discussion.isSolved = 'Solved';
  }
  return `
    <div class="mb-2">
      <a href="/#/detail/${discussion._id}" class="border-0 text-start text-decoration-none text-dark w-100">
        <div class="card w-100 m-0">
          <div class="card-body">
            <div class="card-title d-flex justify-content-between">
              <h5>${discussion.title}</h5>
              <div class="text-end">
                <span>${discussion.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 20px;">
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
            </div>
            <small class="card-subtitle mb-2 text-muted">${discussion.date}</small>
            <p class="card-text">${discussion.discussion}</p>
          </div>
          <div class="card-footer bg-white d-flex justify-content-between">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
              </svg>
              <span>${discussion.reply.length}</span>
            </div>
            <div class="${isSolvedClass} px-2 rounded">${discussion.isSolved}</div>
          </div>
        </div>
      </a>
    </div>
  `;
};

const createDiscussionDetailTemplate = (discussion) => {
  let isSolvedClass = '';
  if (discussion.isSolved === false) {
    isSolvedClass = 'text-bg-danger';
    discussion.isSolved = 'Not Solved';
  } else {
    isSolvedClass = 'text-bg-success';
    discussion.isSolved = 'Solved';
  }
  return `
    <div class="container bg-white pt-5">
      <h1>${discussion.title}</h1>
      <div class="${isSolvedClass} px-2 rounded d-inline-block">${discussion.isSolved}</div>
      <div class="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 16px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <h2 class="ms-2" style="font-size: 24px">${discussion.name}</h2>
      </div>
      <h3 class="mb-2 text-muted" style="font-size: 16px">${discussion.date}</h3>
      <p class="text-justify">${discussion.discussion}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
      </svg>
      <span>${discussion.reply.length}</span>
      <form id="form-discussion-reply" class="my-2">
        <input type="text" name="inputReply" id="inputReply" class="form-control mb-2" placeholder="Masukkan Jawaban Anda">
        <button type="submit" class="btn btn-dark">Kirim</button>
      </form>
      <hr class="m-0">
    </div>
  `;
};

const createDiscussionReplyTemplate = (discussion) => `
  <div class="container bg-white pt-3">
      <div class="d-flex align-items-top p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 30px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <div class="ms-2">
          <h2 style="font-size: 20px">${discussion.name}</h2>
          <h3 class="mb-2 text-muted" style="font-size: 14px">${discussion.date}</h3>
          <p style="font-size: 18px">${discussion.reply}</p>
        </div>
      </div>
      <hr class="my-2">
  </div>
`;

const createAddDiscussionButtonTemplate = () => `
  <a href="#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
`;

const createFilterListTemplate = () => `
  <div id="filter-drawer" class="container-fluid mt-2">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 18px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/>
        </svg>
        <h2 class="ms-2">Filter</h2>
      </div>
      <button id="close-filter" class="btn fw-bold">X</button>
    </div>
    <div class="my-2">
      <h3>Sort</h3>
      <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off">
      <label class="btn btn-light mb-1" for="option1">Latest</label>
      <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
      <label class="btn btn-light mb-1" for="option2">Latest</label>
      <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
      <label class="btn btn-light" mb-1 for="option3">Latest</label>
      <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
      <label class="btn btn-light mb-1" for="option4">Latest</label>
    </div>
    <div class="my-2">
      <h3>Category</h3>
      <input type="checkbox" class="btn-check" id="html" autocomplete="off">
      <label class="btn btn-light mb-1" for="html">HTML</label>
      <input type="checkbox" class="btn-check" id="javascript" autocomplete="off">
      <label class="btn btn-light mb-1" for="javascript">JavaScript</label>
      <input type="checkbox" class="btn-check" id="css" autocomplete="off">
      <label class="btn btn-light mb-1" for="css">CSS</label>
      <input type="checkbox" class="btn-check" id="php" autocomplete="off">
      <label class="btn btn-light mb-1" for="php">PHP</label>
      <input type="checkbox" class="btn-check" id="java" autocomplete="off">
      <label class="btn btn-light mb-1" for="java">Java</label>
      <input type="checkbox" class="btn-check" id="python" autocomplete="off">
      <label class="btn btn-light mb-1" for="python">python</label>
    </div>
    <div>
      <button type="button" class="btn btn-danger">Reset</button>
      <button type="submit" class="btn btn-dark">Filter</button>
    </div>
  </div>
`;

const createProfileTemplate = (user) => `
  <div class="container pt-2">
    <div class="card w-100 border-0">
      <div class="card-body p-5">
        <h1 class="text-center">Profil Pengguna</h1>
        <div class="container-img d-flex justify-content-center align-items-center">
          <img src="./asset/user-solid.svg" alt="Picture Profile" class="picture-profile">
        </div>
        <h2>Nama</h2>
        <p>${user.name}</p>
        <h2>Email</h2>
        <p>${user.email}</p>
        <h2>Kontak</h2>
        <p>${user.contact}</p>
        <button class="btn btn-light border-dark">Perbarui Profil</button>
        <button class="btn btn-danger border-dark">Hapus Akun</button>
      </div>
    </div>
  </div>
`;

const createNavbarTemplateBeforeLogin = () => `
<nav class="navbar navbar-expand-lg bg-light ">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Webeer</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#/forums">Forums</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/jobs">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login">Login</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;

const createNavbarTemplateAfterLogin = () => `
<nav class="navbar navbar-expand-lg bg-light ">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Webeer</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#/profile">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#/forums">Forums</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/jobs">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="logout">Logout</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
export {
  DetailJobsSkeleton,
  createDiscussionItemTemplate,
  createDiscussionDetailTemplate,
  createAddDiscussionButtonTemplate,
  createFilterListTemplate,
  createDiscussionReplyTemplate,
  createItemJob,
  createDetailJob,
  createProfileTemplate,
  createNavbarTemplateAfterLogin,
  createNavbarTemplateBeforeLogin,
};
