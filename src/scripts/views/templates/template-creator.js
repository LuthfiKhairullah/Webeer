import { showFormattedDate } from '../utils/formate-date';
import '../components/discussionList';

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
    discussion.isSolved = 'Unsolved';
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
              <div class="d-flex align-items-center text-end">
                <span>${discussion.username}</span>
                <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-discussion ms-1">
              </div>
            </div>
            <div class="categoryDiscussion">${createCategoryDiscussionTemplate(discussion.categories)}</div>
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
            <div>
              <span class="${isSolvedClass} p-1 rounded">${discussion.isSolved}</span>
            </div>
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
    discussion.isSolved = 'Unsolved';
  } else {
    isSolvedClass = 'text-bg-success';
    discussion.isSolved = 'Solved';
  }
  return `
    <div class="container bg-white padding rounded">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-discussion">
          <a href="#/detailprofile/${discussion.userid}"><span class="ms-1 username">${discussion.username}</span></a>
        </div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#modal-edit" class="btn btn-warning fw-bold d-none" id="user-only">Edit</button>
        <div class="modal fade" id="modal-edit">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Edit Discussion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form id="form-edit-discussion">
                <div class="modal-body">
                  <h3 class="card-text">Category</h3>
                  <select name="categoryList" id="categoryList" class="form-select mb-2"></select>
                  <h3 class="card-text">Discussion</h3>
                  <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" value="${discussion.title}" placeholder="Masukkan Judul Diskusi">
                  <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                  placeholder="Masukkan Diskusi">${discussion.discussion}</textarea>
                  <input class="form-check-input" type="checkbox" id="invalidCheck">
                  <label class="form-check-label" for="invalidCheck">Solved</label>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>${createCategoryDiscussionTemplate(discussion.categories)}</div>
      <div class="${isSolvedClass} my-2 px-2 rounded d-inline-block">${discussion.isSolved}</div>
      <h1>${discussion.title}</h1>
      <h3 class="mb-2 text-muted" style="font-size: 16px;">${discussion.date}</h3>
      <p class="text-justify" style="border-top: 1px solid rgba(0,0,0, 0.2); border-bottom: 1px solid rgba(0,0,0,0.2);">${discussion.discussion}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
      </svg>
      <span class="lengthReply">0</span>
      <i class="fa fa-user-circle-o fa-x" aria-hidden="true"></i>
      <form id="form-discussion-reply" class="my-2 d-flex">
        <input type="text" name="inputReply" id="inputReply" class="form-control" placeholder="Type your reply here">
        <button type="submit" class="btn btn-dark ms-1">Kirim</button>
      </form>
      <hr class="m-0">
    </div>
  `;
};

const createCategoryDiscussionTemplate = (categories) => {
  let categoryElement = '';
  if ((typeof (categories)).includes('object')) {
    categories.forEach((category) => {
      categoryElement += `
        <span class="badge bg-secondary">${category}</span>
      `;
    });
  } else {
    categoryElement += `
      <span class="badge bg-secondary">${category}</span>
    `;
  }

  return categoryElement;
};

const createDiscussionReplyTemplate = (discussion) => `
  <div class="container bg-white pt-3 my-2">
      <div class="d-flex align-items-top p-2">
        <div class="container-img-reply">
          <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-reply">
        </div>
        <div class="ms-2">
          <h2 style="font-size: 20px">${discussion.username}</h2>
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
  <div id="filter-drawer" class="container-fluid text-light">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <h2>Filter</h2>
      </div>
      <button id="close-filter" class="btn fw-bold text-light">X</button>
    </div>
    <form id="form-filter">
      <div class="my-2">
        <h3>Sort</h3>
        <input type="radio" class="btn-check" name="sort" id="latest" autocomplete="off" checked>
        <label class="btn btn-success mb-1" for="latest">Latest</label>
        <input type="radio" class="btn-check" name="sort" id="solved" autocomplete="off">
        <label class="btn btn-success mb-1" for="solved">Solved</label>
        <input type="radio" class="btn-check" name="sort" id="unsolved" autocomplete="off">
        <label class="btn btn-success mb-1" for="unsolved">Unsolved</label>
      </div>
      <div class="my-2">
        <h3>Category</h3>
        <div class="filterCategory"></div>
      </div>
      <div>
        <button type="reset" class="btn btn-danger">Reset</button>
        <button type="submit" class="btn btn-dark">Filter</button>
      </div>
    </form>
  </div>
`;

const createFilterCategoryTemplate = (category) => `
  <input type="checkbox" class="btn-check" name="categoryFilter" id="${category.name}" value="${category.name}" autocomplete="off">
  <label class="btn btn-light mb-1" for="${category.name}">${category.name}</label>
`;

const createProfileTemplate = (user) => {
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.contact === undefined) {
    user.contact = '-';
  }
  if (user.profesi === undefined) {
    user.profesi = '-';
  }
  return `
    <div class="container-profile">
      <div class="card profile">
      <img src="${user.image}" class="card-img-top">
      <div class="card-body text-center">
      <p>${user.username}</p>
      <h6> Diskusi Anda </h6>
      <p class="length-disscussion-user"></p>
      <a class=" btn btn-primary" href="#/editprofile/${user._id}">Perbarui Profile</a>
      </div>
      </div>
      <div class="container-about">
       <div class="card about">
       <h6>Profession</h6>
       <p>${user.profesi}</p>
        <h6>Country</h6>
        <p>${user.email}</p>
        <h6>Contact</h6>
        <p>${user.contact}</p>
        <h6>About</h6>
        <p>${user.bio}</p>
       </div>
       <div class="container-discussion-user">
       <discussion-list></discussion-list>
       </div>
       </div>
    </div>
  `;
};

const createNavbarTemplateBeforeLogin = () => `
<nav class="navbar fixed-top navbar-expand-lg  ">
<div class="container-fluid">
  <a class="navbar-brand text-light fw-bold" href="#">WEBEER</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link text-light" aria-current="page" href="#/forums">Forums</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/jobs">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#/login">Login</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
const createProfileEditTemplate = (user) => {
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.contact === undefined) {
    user.contact = '-';
  }
  if (user.profession === undefined) {
    user.profession = '-';
  }
  return `
    <div class="container pt-1">
      <div class="card w-100 border-0">
        <div class="card-body p-5">
          <h1 class="text-center">Profil Pengguna</h1>
          <div class="d-flex flex-row">
            <div class="container-img">
              <img src="${user.image}" alt="Picture Profile" class="picture-profile">
            </div>
            <div class="container">
            <form id= "edit-user">
            <div class="mb-4">
              <h2>Nama</h2>
              <input type="text" class="form-control" id="edit-username" placeholder="${user.username}" required>
             </div>
             <div class="mb-4">
             <h2>Email</h2>
             <input type="email" class="form-control" id="edit-email" placeholder="${user.email}" required></input>
            </div>
           <div class="mb-4">
           <h2>Contact</h2>
           <input type="text" class="form-control" id="edit-contact" placeholder="${user.contact}" required></input>
            </div>
            <div class="mb-4">
           <h2>Profesi</h2>
           <input type="text" class="form-control" id="edit-profesi" placeholder="${user.profesi}" required></input>
            </div>
            <div class="mb-4">
            <h2>Bio</h2>
            <textarea class="form-control" id="edit-bio" placeholder="${user.bio}" required></textarea>
            </div>
            <button class="btn btn-light border-dark" id="edit-simpan" data-bs-toggle="modal" data-bs-target="#exampleModal">Simpan Perubahan</button>  
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
const createNavbarTemplateAfterLogin = () => `
<nav class="navbar fixed-top navbar-expand-lg ">
<div class="container-fluid">
  <a class="navbar-brand text-light fw-bold" href="#">Webeer</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link text-light " aria-current="page" href="#/profile">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light " aria-current="page" href="#/forums">Forums</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light " href="#/jobs">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light " href="#" id="logout">Logout</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
const UserDiscussionSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card-item-discussion-user">
    </div>`;
  }
  return template;
};
export {
  DetailJobsSkeleton,
  createDiscussionItemTemplate,
  createDiscussionDetailTemplate,
  createAddDiscussionButtonTemplate,
  createFilterListTemplate,
  createFilterCategoryTemplate,
  createDiscussionReplyTemplate,
  createItemJob,
  createDetailJob,
  createProfileTemplate,
  createNavbarTemplateAfterLogin,
  createNavbarTemplateBeforeLogin,
  UserDiscussionSkeleton,
  createProfileEditTemplate,
};
