import { showFormattedDate } from '../utils/formate-date';
import '../components/discussionList';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');
const truncateString = (str, num) => {
  if (str?.length > num) {
    return `${str.slice(0, num)}...`;
  }

  return str;
};
const DetailJobsSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="placeholder-glow">
      <div class="card-item placeholder">
      </div>
    </div>`;
  }
  return template;
};
const createItemJob = (jobs) => `
<div class = "card-item">
<img src="${jobs.image}" class="card-image lazyload">
<h6 class="fw-bold">${jobs.company}</h6>
<h6>${jobs.profession}</h6>
<p>${timeAgo.format(Date.now() - Math.floor(new Date(jobs.createdAt).getTime() / 1000))}</p>
<p>${showFormattedDate(jobs.createdAt)}</p>
<p class="fw-bold">${jobs.address}</p>
<button value=${jobs._id} class="btn btn-primary fw-bold btn-detail btn-sm">LIHAT</button>
</div>
`;

const createDetailJob = (detail) => `
<div class="detail-container">
  <div class="header-detail">
    <div class="image-detail">
      <img class="lazyload" src="${detail.image}">
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

const createDiscussionItemTemplateSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <div class="container-item-discussion fluid">
        <a class="border-0 text-start text-decoration-none text-dark w-100 test">
          <div class="card w-100 m-0">
            <div class="card-body">
              <div class="main-container placeholder-glow">
                <div class="categoryDiscussion">${createCategoryDiscussionTemplateSkeleton()}</div>
                  <h5><span class="placeholder">Lorem ipsum dolor</span></h5>
                  <p class="card-text placeholder">Lorem ipsum dolor lorem ipsum dolor</p>
                </div>
              <div class="sub-container placeholder-glow">
                <div class="container-reply text-center placeholder-glow">
                  <span class="placeholder">0000</span>
                  <span class="placeholder">999</span>
                </div>
                <div class="container-discussion-profile d-flex placeholder-glow">
                  <img class="img-profile-discussion skeleton">
                  <div class"sub-profile">
                    <p class="fw-bold username fs-6"><span class="placeholder">Lorem ipsum dolor</span></p>
                    <p class="fw-light fs-6"><span class="placeholder">31 Desember 2022</span></p>
                  </div>
                </div>
                <span class="placeholder p-1 rounded indicator-solved">0000</span>
              </div>  
            </div>
          </div>
        </a>
      </div>
    `;
  }
  return template;
};

const createDiscussionItemTemplate = (discussion) => {
  let isSolvedClass = '';
  let isSolved = '';
  if (discussion.isSolved === false) {
    isSolvedClass = 'text-secondary';
    isSolved = '<i class="fa fa-check-circle-o fa-3x" aria-hidden="true"></i>';
  } else {
    isSolvedClass = 'text-success';
    isSolved = '<i class="fa fa-check-circle-o fa-3x" aria-hidden="true"></i>';
  }
  return `
<div class="container-item-discussion fluid">
  <a href="/#/detaildiscussion/${discussion._id}" class="border-0 text-start text-decoration-none text-dark w-100 test">
    <div class="card w-100 m-0">
      <div class="card-body">
        <div class="main-container">
          <div class="categoryDiscussion">${createCategoryDiscussionTemplate(discussion.categories)}</div>
            <h5>${discussion.title}</h5>
            <p class="card-text"><xmp>${truncateString(discussion?.discussion, 200)}</xmp></p>
          </div>
        <div class="sub-container">
          <div class="container-reply text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
          </svg>
            <span>${discussion.reply.length}</span>
          </div>
          <div class="container-discussion-profile d-flex">
            <img src="${discussion.userimage}" class="img-profile-discussion lazyload">
              <div class"sub-profile">
                <p class="fw-bold username fs-6">${discussion.username}</p>
                <p class="fw-light fs-6">${discussion.date}</p>
              </div>
          </div>
          <span class="${isSolvedClass} p-1 rounded indicator-solved">${isSolved}</span>
        </div>  
      </div>
    </div>
  </a>
</div>
  `;
};
const createBookmarkItemTemplate = (bookmark) => {
  let isSolvedClass = '';
  if (bookmark.isSolved === false) {
    isSolvedClass = 'text-secondary';
    bookmark.isSolved = '<i class="fa fa-check-circle-o fa-3x" aria-hidden="true"></i>';
  } else {
    isSolvedClass = 'text-success';
    bookmark.isSolved = '<i class="fa fa-check-circle-o fa-3x" aria-hidden="true"></i>';
  }
  return `
<div class="container-item-discussion fluid">
  <a href="/#/detaildiscussion/${bookmark.id}" class="border-0 text-start text-decoration-none text-dark w-100 test">
    <div class="card w-100 m-0">
      <div class="card-body">
        <div class="main-container">
          <div class="categoryDiscussion">${createCategoryDiscussionTemplate(bookmark.categories)}</div>
            <h5>${bookmark.title}</h5>
            <p class="card-text">${truncateString(bookmark?.discussion, 200)}</p>
          </div>
        <div class="sub-container">
          <div class="container-reply text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
          </svg>
            <span>${bookmark.reply.length}</span>
          </div>
          <div class="container-discussion-profile d-flex">
            <img src="${bookmark.userimage}" class="img-profile-discussion lazyload">
              <div class"sub-profile">
                <p class="fw-bold username fs-6">${bookmark.username}</p>
                <p class="fw-light fs-6">${bookmark.date}</p>
              </div>
          </div>
          <span class="${isSolvedClass} p-1 rounded indicator-solved">${bookmark.isSolved}</span>
        </div>  
      </div>
    </div>
  </a>
</div>
  `;
};

const createDiscussionDetailTemplateSkeleton = () => `
  <div class="container bg-white padding placeholder-glow">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img style="height: 20px; width: 20px;" class="picture-profile-discussion placeholder">
          <a style="text-decoration:none;"><span class="ms-1 username font-monospace placeholder">Lorem ipsum dolor</span></a>
        </div>
      </div>
      <div class="text-capitalize placeholder">Lorem</div>
      <h1><span class="placeholder">Lorem ipsum dolor</span></h1>
      <div class="d-flex align-items-center">
        <h3 class="fs-6 font-monospace pt-1 mx-1 m-0"><span class="placeholder">31 Desember 2022</span></h3>
        <span class="placeholder">0000</span>
        <span class="mx-1 placeholder">999</span>
        <div class="placeholder">0000</div>
        <div class="placeholder">0000</div>
      </div>
      <p class="text-justify border-top border-bottom my-lg-2"><xmp class="placeholder">Lorem ipsum dolor lorem ipsum dolor</xmp></p>
      <button class="btn m-0 btn-secondary text-secondary disabled placeholder">000</button>
      <form id="form-discussion-reply" class="my-2 ">
        <textarea class="form-control disabled placeholder" rows=15"></textarea>
        <button type="button" class="btn ms-1 my-1 btn-dark text-dark disabled placeholder">Submit Answer</button>
      </form>
    </div>
`;

const createDiscussionDetailTemplate = (discussion) => {
  let isSolvedClass = '';
  let isSolved = '';
  if (discussion.isSolved === false) {
    isSolvedClass = 'text-secondary';
    isSolved = '<i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i>';
  } else {
    isSolvedClass = 'text-success';
    isSolved = '<i class="fa fa-check-circle-o fa-2x " aria-hidden="true"></i>';
  }
  return `
    <div class="container bg-white padding ">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-discussion lazyload">
          <a href="#/detailprofile/${discussion.userid}" style="text-decoration:none;"><span class="ms-1 username fw-bolder font-monospace text-body">${discussion.username}</span></a>
        </div>
        <div class = "d-flex d-none" id="user-only">
          <button type="button" data-bs-toggle="modal" data-bs-target="#modal-edit" class="btn">
            <i class="fa fa-pencil-square-o fa-2x text-primary" aria-label="edit discussion"></i>
          </button>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="fa fa-trash-o fa-2x text-danger" aria-label="delete discussion"></i>
          </button>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-danger fw-bold" id="staticBackdropLabel">DELETE</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              Do you want to delete this discussion?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="delete-discussion">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade modal-xl" id="modal-edit">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Edit Discussion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form id="form-edit-discussion">
                <div class="modal-body">
                  <h3 class="card-text">Category</h3>
                  <!--<select name="categoryList" id="categoryList" class="form-select mb-2"></select>-->
                  <div id="listCategoryForSelected"></div>
                  <h3 class="card-text">Discussion</h3>
                  <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" value="${discussion.title}" placeholder="Type your title discussion here">
                  <button id="codeDiscussion" class="btn btn-light m-0"><i class="fa fa-code" aria-hidden="true"></i></button>
                  <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                  placeholder="Type your discussion here">${discussion.discussion}</textarea>
                  <input class="form-check-input" type="checkbox" id="issolved" value="solved">
                  <label class="form-check-label" for="issolved">Solved</label>
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
      <div class="text-capitalize">${createCategoryDiscussionTemplate(discussion.categories)}</div>
      <h1>${discussion.title}</h1>
      <div class="d-flex align-items-center">
        <h3 class="text-muted fs-6 font-monospace pt-1 mx-1 m-0" >${discussion.date}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
        </svg>
        <span class="lengthReply mx-1">0</span>
        <div class="${isSolvedClass}">${isSolved}</div>
        <div id="saveButtonContainer"></div>
      </div>
      <p class="text-justify border-top border-bottom my-lg-2">${(discussion.discussion).replace(/~Enter Your Code is Here/g, '</p><div class="bg-light"><xmp>').replace(/Dont Delete this~/g, '</xmp></div><p class="text-justify border-top border-bottom my-lg-2">')}</p>
      <button id="code" class="btn btn-light m-0"><i class="fa fa-code" aria-hidden="true"></i></button>
      <form id="form-discussion-reply" class="my-2 ">
        <textarea  name="inputReply" id="inputReply" class="form-control" rows=15"></textarea>
        <button type="submit" class="btn btn-dark ms-1 my-1" id="answerButton">Submit Answer</button>
      </form>
    </div>
  `;
};

const createCategoryDiscussionTemplateSkeleton = () => `
  <span class="placeholder">0000</span>
`;

const createCategoryDiscussionTemplate = (categories) => {
  let categoryElement = '';
  if ((typeof (categories)).includes('object')) {
    categories.forEach((category) => {
      categoryElement += `
        <span class="badge text-bg-warning">${category}</span>
      `;
    });
  } else {
    categoryElement += `
      <span class="badge text-bg-warning">${category}</span>
    `;
  }

  return categoryElement;
};

const createDiscussionReplyTemplateSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <div class="container bg-white border-top placeholder-glow">
        <p class="placeholder">Answer from</p>
        <div class="d-flex align-items-top p-2">
          <div class="container-img-reply">
            <img style="height: 30px; width: 30px" class="picture-profile-reply placeholder">
          </div>
          <div class="ms-2">
            <a style="text-decoration:none;"><h2 style="font-size: 20px" class="placeholder">Lorem ipsum dolor</h2></a>
            <h3 class="mb-2" style="font-size: 14px"><span class="placeholder">31 Desember 2022</span></h3>
            <p style="font-size: 18px" class="placeholder">Lorem ipsum dolor lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    `;
  }
  return template;
};

const createDiscussionReplyTemplate = (discussion) => `
  <div class="container bg-white border-top">
  <p>Answer from</p>
      <div class="d-flex align-items-top p-2">
        <div class="container-img-reply">
          <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-reply lazyload">
        </div>
        <div class="ms-2">
        <a href="#/detailprofile/${discussion.userid}" style="text-decoration:none;" class="text-dark"><h2 style="font-size: 20px">${discussion.username}</h2></a>
          <h3 class="mb-2 text-muted" style="font-size: 14px">${discussion.date}</h3>
          <p style="font-size: 18px">${(discussion.reply).replace(/~Enter Your Code is Here/g, '<div class="bg-light"><xmp>').replace(/Dont Delete this~/g, '</xmp></div>')}</p>
        </div>
      </div>
  </div>
`;

const createAddDiscussionButtonTemplate = () => `
  <a href="#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
`;

const createFilterListTemplateSkeleton = () => `
  <div id="filter-drawer-skeleton" class="bg-white placeholder-glow">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <h2><span class="placeholder">Filter</span></h2>
      </div>
      <button id="close-filter" class="btn fw-bold">X</button>
    </div>
    <form id="form-filter">
      <div class="my-2">
        <h3><span class="placeholder">Sort</span></h3>
        <input type="radio" class="btn-check" name="sort" id="latest">
        <label class="btn btn-primary text-primary disabled placeholder mb-1" for="latest">Latest</label>
        <input type="radio" class="btn-check" name="sort" id="oldest">
        <label class="btn btn-primary text-primary disabled placeholder mb-1" for="oldest">Oldest</label>
        <input type="radio" class="btn-check" name="sort" id="solved">
        <label class="btn btn-primary text-primary disabled placeholder mb-1" for="solved">Solved</label>
        <input type="radio" class="btn-check" name="sort" id="unsolved">
        <label class="btn btn-primary text-primary disabled placeholder mb-1" for="unsolved">Unsolved</label>
      </div>
      <div class="my-2">
        <h3><span class="placeholder">Category</span></h3>
        <div class="filterCategory">${createFilterCategoryTemplateSkeleton(5)}</div>
      </div>
      <div>
        <button type="button" class="btn btn-danger text-danger disabled placeholder">Reset</button>
        <button type="button" class="btn btn-primary text-primary disabled placeholder">Filter</button>
      </div>
    </form>
  </div>
`;

const createFilterListTemplate = () => `
  <div id="filter-drawer" class="bg-white">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <h2>Filter</h2>
      </div>
      <button id="close-filter" class="btn fw-bold">X</button>
    </div>
    <form id="form-filter">
      <div class="my-2">
        <h3>Sort</h3>
        <input type="radio" class="btn-check" name="sort" id="latest" autocomplete="off" value="latest" checked>
        <label class="btn btn-outline-primary mb-1" for="latest">Latest</label>
        <input type="radio" class="btn-check" name="sort" id="oldest" autocomplete="off" value="oldest">
        <label class="btn btn-outline-primary mb-1" for="oldest">Oldest</label>
        <input type="radio" class="btn-check" name="sort" id="solved" autocomplete="off" value="solved">
        <label class="btn btn-outline-primary mb-1" for="solved">Solved</label>
        <input type="radio" class="btn-check" name="sort" id="unsolved" autocomplete="off" value="unsolved">
        <label class="btn btn-outline-primary mb-1" for="unsolved">Unsolved</label>
      </div>
      <div class="my-2">
        <h3>Category</h3>
        <div class="filterCategory"></div>
      </div>
      <div>
        <button type="reset" class="btn btn-danger">Reset</button>
        <button type="submit" class="btn btn-primary">Filter</button>
      </div>
    </form>
  </div>
`;

const createFilterCategoryTemplateSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <input type="checkbox" class="btn-check" id="lorem">
      <label class="btn btn-primary text-primary disabled placeholder mb-1" for="lorem">lorem</label>
    `;
  }
  return template;
};

const createFilterCategoryTemplate = (category) => `
  <input type="checkbox" class="btn-check" name="categoryFilter" id="${category.name}" value="${category.name}" autocomplete="off">
  <label class="btn btn-outline-primary mb-1" for="${category.name}">${category.name}</label>
`;

const createProfileTemplateSkeleton = () => `
  <div class="container-profile">
    <div class="container-profile-main">
      <div class="card profile">
        <div class="semi-circle"></div>
        <img style="width:200px; height: 200px;" class="card-img-top skeleton">
        <div class="card-body text-center placeholder-glow">
          <p><span class="placeholder">Lorem ipsum dolor</span></p>
          <button class="btn btn-sm btn-primary text-primary disabled placeholder" style="padding:11px;">Change Profile</button>
          <button class="btn btn-sm btn-primary text-primary disabled placeholder" style="padding:11px;">Change Password</button>
        </div>
      </div>
    </div>
    <div class="card about placeholder-glow">
      <h6><span class="placeholder">Profession</span></h6>
      <p class="placeholder">-</p>
      <h6><span class="placeholder">Country</span></h6>
      <p class="placeholder">-</p>
      <h6><span class="placeholder">Contact</span></h6>
      <p><span class="placeholder">1234567890123</span></p>
      <p class="placeholder">-</p>
      <h6><span class="placeholder">About</span></h6>
      <p class="placeholder">-</p>
    </div>
    <div class="card activity placeholder-glow">
      <h3><span class="placeholder">Your Activity</span></h3>
      <h2><span class="placeholder">AA</span></h2>
      <h6><span class="placeholder">Your Discussion</span></h6>
      <p><span class="placeholder">999</span></p>
      <h6><span class="placeholder">Your Answer Discussion</span></h6>
      <p><span class="placeholder">999</span></p>
    </div>
  </div>
    <div class="container-fluid">
      <div class="header-btn">
        <div class="d-flex placeholder-glow">
          <button class="btn btn-sm btn-primary text-primary disabled placeholder">Discussion</button>
          <button class="btn btn-sm btn-light text-light disabled placeholder">Bookmark</button>
        </div>
        <div class="container-discussion-user">
          ${createDiscussionItemTemplateSkeleton(5)}
        </div>
      </div>
    </div>
  </div>
`;

const createProfileTemplate = (user) => {
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.contact === undefined) {
    user.contact = '';
  }
  if (user.profesi === undefined) {
    user.profesi = '-';
  }
  if (user.country === undefined) {
    user.country = '-';
  }
  return `
    <div class="container-profile">
      <div class="container-profile-main">
        <div class="card profile">
          <div class="semi-circle"></div>
          <img src="${user.image}" class="card-img-top lazyload">
          <div class="card-body text-center">
            <p>${user.username}</p>
            <a class=" btn btn-primary btn-sm" href="#/editprofile/${user._id}" style="padding:11px;">Change Profile</a>
            <a class=" btn btn-primary btn-sm" href="#/changepwd/${user._id}" style="padding:11px;">Change Password</a>
          </div>
        </div>
      </div>
      <div class="card about">
        <h6>Profession</h6>
        <p>${user.profesi}</p>
        <h6>Country</h6>
        <p>${user.country}</p>
        <h6>Contact</h6>
        <p>${user.contact}</p>
        <p>${user.email}</p>
        <h6>About</h6>
        <p>${user.bio}</p>
      </div>
      <div class="card activity">
        <h3>Your Activity </h3>
        <h2 class="grade-user"></h2>
        <h6> Your Discussion</h6>
        <p class="length-disscussion-user"></p>
        <h6> Your Answer Discussion</h6>
        <p class="length-reply-user"></p>
      </div>
    </div>
    <div class="container-fluid">
      <div class="header-btn">
        <div class="d-flex">
          <button class="btn btn-sm onactive fw-bold" id="btn-discussion">Discussion</button>
          <button class="btn btn-sm fw-bold" id="btn-bookmark">Bookmark</button>
        </div>
        <div class="container-discussion-user"></div>
      </div>
    </div>
  `;
};

const createProfileOtherTemplateSkeleton = () => `
  <div class="container-profile">
    <div class="container-profile-main">
      <div class="card profile">
        <div class="semi-circle"></div>
        <img style="width:200px; height: 200px;" class="card-img-top skeleton">
        <div class="card-body text-center placeholder-glow">
          <p><span class="placeholder">Lorem ipsum dolor</span></p>
        </div>
      </div>
    </div>
    <div class="card about placeholder-glow">
      <h6><span class="placeholder">Profession</span></h6>
      <p class="placeholder">-</p>
      <h6><span class="placeholder">Country</span></h6>
      <p class="placeholder">-</p>
      <h6><span class="placeholder">Contact</span></h6>
      <p><span class="placeholder">1234567890123</span></p>
      <p class="placeholder">-</p>
      <h6><span class="placeholder">About</span></h6>
      <p class="placeholder">-</p>
    </div>
    <div class="card activity placeholder-glow">
      <h3><span class="placeholder">Your Activity</span></h3>
      <h2><span class="placeholder">AA</span></h2>
      <h6><span class="placeholder">Your Discussion</span></h6>
      <p><span class="placeholder">999</span></p>
      <h6><span class="placeholder">Your Answer Discussion</span></h6>
      <p><span class="placeholder">999</span></p>
    </div>
  </div>
  <div class="container-fluid">
    <div class="header-btn">
      <div class="d-flex placeholder-glow">
        <button class="btn btn-sm btn-primary text-primary disabled placeholder">Discussion</button>
      </div>
      <div class="container-discussion-user">
        ${createDiscussionItemTemplateSkeleton(5)}
      </div>
    </div>
  </div>
`;

const createProfileOtherTemplate = (user) => {
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.contact === undefined) {
    user.contact = '-';
  }
  if (user.profesi === undefined) {
    user.profesi = '-';
  }
  if (user.country === undefined) {
    user.country = '-';
  }
  return `
    <div class="container-profile">
      <div class="container-profile-main">
        <div class="card profile">
          <div class="semi-circle"></div>
          <img src="${user.image}" class="card-img-top lazyload">
          <div class="card-body text-center">
            <p>${user.username}</p>
          </div>
        </div>
      </div>
      <div class="card about">
        <h6>Profession</h6>
        <p>${user.profesi}</p>
        <h6>Country</h6>
        <p>${user.country}</p>
        <h6>Contact</h6>
        <p>${user.contact}</p>
        <p>${user.email}</p>
        <h6>About</h6>
        <p>${user.bio}</p>
      </div>
      <div class="card activity">
        <h3>Your Activity </h3>
        <h2 class="grade-user"></h2>
        <h6>Your Discussion</h6>
        <p class="length-disscussion-user"></p>
        <h6>Your Answer Discussion</h6>
        <p class="length-reply-user"></p>
      </div>
    </div>
    <div class="container-fluid">
      <div class="header-btn">
        <div class="d-flex">
          <button class="btn btn-sm onactive fw-bold" id="btn-discussion">Discussion</button>
        </div>
        <div class="container-discussion-user"></div>
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
  if (user.profesi === undefined) {
    user.profesi = '-';
  }
  return `
    <div class="container-edit-profile">
    <div class="d-flex edit-profile" style="flex-wrap:wrap; justify-content:center; margin-top:100px;">
            <div class="container-img">
              <img src="${user.image}" alt="Picture Profile" class="picture-profile lazyload" style="border:1px solid black; margin:15px;">
            </div>
            <form id= "edit-user">
            <div class="mb-4">
              <h5>Username</h5>
              <input type="text" class="form-control" id="edit-username" placeholder="Type your username" value="${user.username}">
             </div>
            <div class="mb-4">
              <h5>Contact</h5>
              <input type="text" class="form-control" id="edit-contact" placeholder="Type your contact" value="${user.contact}"></input>
            </div>
            <div class="mb-4">
              <h5>Profession</h5>
              <input type="text" class="form-control" id="edit-profesi" placeholder="Type your profession" value="${user.profesi}"></input>
            </div>
            <div class="mb-4">
              <h5>Country</h5>
              <select class="form-select" aria-label="Default select example" id="edit-country">
                <option name="countryselect" value="Afghanistan">Afghanistan</option>
                <option name="countryselect" value="Albania">Albania</option>
                <option name="countryselect" value="Algeria">Algeria</option>
                <option name="countryselect" value="American Samoa">American Samoa</option>
                <option name="countryselect" value="Andorra">Andorra</option>
                <option name="countryselect" value="Angola">Angola</option>
                <option name="countryselect" value="Anguilla">Anguilla</option>
                <option name="countryselect" value="Antartica">Antartica</option>
                <option name="countryselect" value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option name="countryselect" value="Argentina">Argentina</option>
                <option name="countryselect" value="Armenia">Armenia</option>
                <option name="countryselect" value="Aruba">Aruba</option>
                <option name="countryselect" value="Australia">Australia</option>
                <option name="countryselect" value="Austria">Austria</option>
                <option name="countryselect" value="Azerbaijan">Azerbaijan</option>
                <option name="countryselect" value="Bahamas">Bahamas</option>
                <option name="countryselect" value="Bahrain">Bahrain</option>
                <option name="countryselect" value="Bangladesh">Bangladesh</option>
                <option name="countryselect" value="Barbados">Barbados</option>
                <option name="countryselect" value="Belarus">Belarus</option>
                <option name="countryselect" value="Belgium">Belgium</option>
                <option name="countryselect" value="Belize">Belize</option>
                <option name="countryselect" value="Benin">Benin</option>
                <option name="countryselect" value="Bermuda">Bermuda</option>
                <option name="countryselect" value="Bhutan">Bhutan</option>
                <option name="countryselect" value="Bolivia">Bolivia</option>
                <option name="countryselect" value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                <option name="countryselect" value="Botswana">Botswana</option>
                <option name="countryselect" value="Bouvet Island">Bouvet Island</option>
                <option name="countryselect" value="Brazil">Brazil</option>
                <option name="countryselect" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option name="countryselect" value="Brunei Darussalam">Brunei Darussalam</option>
                <option name="countryselect" value="Bulgaria">Bulgaria</option>
                <option name="countryselect" value="Burkina Faso">Burkina Faso</option>
                <option name="countryselect" value="Burundi">Burundi</option>
                <option name="countryselect" value="Cambodia">Cambodia</option>
                <option name="countryselect" value="Cameroon">Cameroon</option>
                <option name="countryselect" value="Canada">Canada</option>
                <option name="countryselect" value="Cape Verde">Cape Verde</option>
                <option name="countryselect" value="Cayman Islands">Cayman Islands</option>
                <option name="countryselect" value="Central African Republic">Central African Republic</option>
                <option name="countryselect" value="Chad">Chad</option>
                <option name="countryselect" value="Chile">Chile</option>
                <option name="countryselect" value="China">China</option>
                <option name="countryselect" value="Christmas Island">Christmas Island</option>
                <option name="countryselect" value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option name="countryselect" value="Colombia">Colombia</option>
                <option name="countryselect" value="Comoros">Comoros</option>
                <option name="countryselect" value="Congo">Congo</option>
                <option name="countryselect" value="Congo">Congo, the Democratic Republic of the</option>
                <option name="countryselect" value="Cook Islands">Cook Islands</option>
                <option name="countryselect" value="Costa Rica">Costa Rica</option>
                <option name="countryselect" value="Cota D'Ivoire">Cote d'Ivoire</option>
                <option name="countryselect" value="Croatia">Croatia (Hrvatska)</option>
                <option name="countryselect" value="Cuba">Cuba</option>
                <option name="countryselect" value="Cyprus">Cyprus</option>
                <option name="countryselect" value="Czech Republic">Czech Republic</option>
                <option name="countryselect" value="Denmark">Denmark</option>
                <option name="countryselect" value="Djibouti">Djibouti</option>
                <option name="countryselect" value="Dominica">Dominica</option>
                <option name="countryselect" value="Dominican Republic">Dominican Republic</option>
                <option name="countryselect" value="East Timor">East Timor</option>
                <option name="countryselect" value="Ecuador">Ecuador</option>
                <option name="countryselect" value="Egypt">Egypt</option>
                <option name="countryselect" value="El Salvador">El Salvador</option>
                <option name="countryselect" value="Equatorial Guinea">Equatorial Guinea</option>
                <option name="countryselect" value="Eritrea">Eritrea</option>
                <option name="countryselect" value="Estonia">Estonia</option>
                <option name="countryselect" value="Ethiopia">Ethiopia</option>
                <option name="countryselect" value="Falkland Islands">Falkland Islands (Malvinas)</option>
                <option name="countryselect" value="Faroe Islands">Faroe Islands</option>
                <option name="countryselect" value="Fiji">Fiji</option>
                <option name="countryselect" value="Finland">Finland</option>
                <option name="countryselect" value="France">France</option>
                <option name="countryselect" value="France Metropolitan">France, Metropolitan</option>
                <option name="countryselect" value="French Guiana">French Guiana</option>
                <option name="countryselect" value="French Polynesia">French Polynesia</option>
                <option name="countryselect" value="French Southern Territories">French Southern Territories</option>
                <option name="countryselect" value="Gabon">Gabon</option>
                <option name="countryselect" value="Gambia">Gambia</option>
                <option name="countryselect" value="Georgia">Georgia</option>
                <option name="countryselect" value="Germany">Germany</option>
                <option name="countryselect" value="Ghana">Ghana</option>
                <option name="countryselect" value="Gibraltar">Gibraltar</option>
                <option name="countryselect" value="Greece">Greece</option>
                <option name="countryselect" value="Greenland">Greenland</option>
                <option name="countryselect" value="Grenada">Grenada</option>
                <option name="countryselect" value="Guadeloupe">Guadeloupe</option>
                <option name="countryselect" value="Guam">Guam</option>
                <option name="countryselect" value="Guatemala">Guatemala</option>
                <option name="countryselect" value="Guinea">Guinea</option>
                <option name="countryselect" value="Guinea-Bissau">Guinea-Bissau</option>
                <option name="countryselect" value="Guyana">Guyana</option>
                <option name="countryselect" value="Haiti">Haiti</option>
                <option name="countryselect" value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                <option name="countryselect" value="Holy See">Holy See (Vatican City State)</option>
                <option name="countryselect" value="Honduras">Honduras</option>
                <option name="countryselect" value="Hong Kong">Hong Kong</option>
                <option name="countryselect" value="Hungary">Hungary</option>
                <option name="countryselect" value="Iceland">Iceland</option>
                <option name="countryselect" value="India">India</option>
                <option name="countryselect" value="Indonesia">Indonesia</option>
                <option name="countryselect" value="Iran">Iran (Islamic Republic of)</option>
                <option name="countryselect" value="Iraq">Iraq</option>
                <option name="countryselect" value="Ireland">Ireland</option>
                <option name="countryselect" value="Israel">Israel</option>
                <option name="countryselect" value="Italy">Italy</option>
                <option name="countryselect" value="Jamaica">Jamaica</option>
                <option name="countryselect" value="Japan">Japan</option>
                <option name="countryselect" value="Jordan">Jordan</option>
                <option name="countryselect" value="Kazakhstan">Kazakhstan</option>
                <option name="countryselect" value="Kenya">Kenya</option>
                <option name="countryselect" value="Kiribati">Kiribati</option>
                <option name="countryselect" value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                <option name="countryselect" value="Korea">Korea, Republic of</option>
                <option name="countryselect" value="Kuwait">Kuwait</option>
                <option name="countryselect" value="Kyrgyzstan">Kyrgyzstan</option>
                <option name="countryselect" value="Lao">Lao People's Democratic Republic</option>
                <option name="countryselect" value="Latvia">Latvia</option>
                <option name="countryselect" value="Lebanon">Lebanon</option>
                <option name="countryselect" value="Lesotho">Lesotho</option>
                <option name="countryselect" value="Liberia">Liberia</option>
                <option name="countryselect" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option name="countryselect" value="Liechtenstein">Liechtenstein</option>
                <option name="countryselect" value="Lithuania">Lithuania</option>
                <option name="countryselect" value="Luxembourg">Luxembourg</option>
                <option name="countryselect" value="Macau">Macau</option>
                <option name="countryselect" value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                <option name="countryselect" value="Madagascar">Madagascar</option>
                <option name="countryselect" value="Malawi">Malawi</option>
                <option name="countryselect" value="Malaysia">Malaysia</option>
                <option name="countryselect" value="Maldives">Maldives</option>
                <option name="countryselect" value="Mali">Mali</option>
                <option name="countryselect" value="Malta">Malta</option>
                <option name="countryselect" value="Marshall Islands">Marshall Islands</option>
                <option name="countryselect" value="Martinique">Martinique</option>
                <option name="countryselect" value="Mauritania">Mauritania</option>
                <option name="countryselect" value="Mauritius">Mauritius</option>
                <option name="countryselect" value="Mayotte">Mayotte</option>
                <option name="countryselect" value="Mexico">Mexico</option>
                <option name="countryselect" value="Micronesia">Micronesia, Federated States of</option>
                <option name="countryselect" value="Moldova">Moldova, Republic of</option>
                <option name="countryselect" value="Monaco">Monaco</option>
                <option name="countryselect" value="Mongolia">Mongolia</option>
                <option name="countryselect" value="Montserrat">Montserrat</option>
                <option name="countryselect" value="Morocco">Morocco</option>
                <option name="countryselect" value="Mozambique">Mozambique</option>
                <option name="countryselect" value="Myanmar">Myanmar</option>
                <option name="countryselect" value="Namibia">Namibia</option>
                <option name="countryselect" value="Nauru">Nauru</option>
                <option name="countryselect" value="Nepal">Nepal</option>
                <option name="countryselect" value="Netherlands">Netherlands</option>
                <option name="countryselect" value="Netherlands Antilles">Netherlands Antilles</option>
                <option name="countryselect" value="New Caledonia">New Caledonia</option>
                <option name="countryselect" value="New Zealand">New Zealand</option>
                <option name="countryselect" value="Nicaragua">Nicaragua</option>
                <option name="countryselect" value="Niger">Niger</option>
                <option name="countryselect" value="Nigeria">Nigeria</option>
                <option name="countryselect" value="Niue">Niue</option>
                <option name="countryselect" value="Norfolk Island">Norfolk Island</option>
                <option name="countryselect" value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option name="countryselect" value="Norway">Norway</option>
                <option name="countryselect" value="Oman">Oman</option>
                <option name="countryselect" value="Pakistan">Pakistan</option>
                <option name="countryselect" value="Palau">Palau</option>
                <option name="countryselect" value="Panama">Panama</option>
                <option name="countryselect" value="Papua New Guinea">Papua New Guinea</option>
                <option name="countryselect" value="Paraguay">Paraguay</option>
                <option name="countryselect" value="Peru">Peru</option>
                <option name="countryselect" value="Philippines">Philippines</option>
                <option name="countryselect" value="Pitcairn">Pitcairn</option>
                <option name="countryselect" value="Poland">Poland</option>
                <option name="countryselect" value="Portugal">Portugal</option>
                <option name="countryselect" value="Puerto Rico">Puerto Rico</option>
                <option name="countryselect" value="Qatar">Qatar</option>
                <option name="countryselect" value="Reunion">Reunion</option>
                <option name="countryselect" value="Romania">Romania</option>
                <option name="countryselect" value="Russia">Russian Federation</option>
                <option name="countryselect" value="Rwanda">Rwanda</option>
                <option name="countryselect" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                <option name="countryselect" value="Saint LUCIA">Saint LUCIA</option>
                <option name="countryselect" value="Saint Vincent">Saint Vincent and the Grenadines</option>
                <option name="countryselect" value="Samoa">Samoa</option>
                <option name="countryselect" value="San Marino">San Marino</option>
                <option name="countryselect" value="Sao Tome and Principe">Sao Tome and Principe</option> 
                <option name="countryselect" value="Saudi Arabia">Saudi Arabia</option>
                <option name="countryselect" value="Senegal">Senegal</option>
                <option name="countryselect" value="Seychelles">Seychelles</option>
                <option name="countryselect" value="Sierra">Sierra Leone</option>
                <option name="countryselect" value="Singapore">Singapore</option>
                <option name="countryselect" value="Slovakia">Slovakia (Slovak Republic)</option>
                <option name="countryselect" value="Slovenia">Slovenia</option>
                <option name="countryselect" value="Solomon Islands">Solomon Islands</option>
                <option name="countryselect" value="Somalia">Somalia</option>
                <option name="countryselect" value="South Africa">South Africa</option>
                <option name="countryselect" value="South Georgia">South Georgia and the South Sandwich Islands</option>
                <option name="countryselect" value="Span">Spain</option>
                <option name="countryselect" value="SriLanka">Sri Lanka</option>
                <option name="countryselect" value="St. Helena">St. Helena</option>
                <option name="countryselect" value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                <option name="countryselect" value="Sudan">Sudan</option>
                <option name="countryselect" value="Suriname">Suriname</option>
                <option name="countryselect" value="Svalbard">Svalbard and Jan Mayen Islands</option>
                <option name="countryselect" value="Swaziland">Swaziland</option>
                <option name="countryselect" value="Sweden">Sweden</option>
                <option name="countryselect" value="Switzerland">Switzerland</option>
                <option name="countryselect" value="Syria">Syrian Arab Republic</option>
                <option name="countryselect" value="Taiwan">Taiwan, Province of China</option>
                <option name="countryselect" value="Tajikistan">Tajikistan</option>
                <option name="countryselect" value="Tanzania">Tanzania, United Republic of</option>
                <option name="countryselect" value="Thailand">Thailand</option>
                <option name="countryselect" value="Togo">Togo</option>
                <option name="countryselect" value="Tokelau">Tokelau</option>
                <option name="countryselect" value="Tonga">Tonga</option>
                <option name="countryselect" value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option name="countryselect" value="Tunisia">Tunisia</option>
                <option name="countryselect" value="Turkey">Turkey</option>
                <option name="countryselect" value="Turkmenistan">Turkmenistan</option>
                <option name="countryselect" value="Turks and Caicos">Turks and Caicos Islands</option>
                <option name="countryselect" value="Tuvalu">Tuvalu</option>
                <option name="countryselect" value="Uganda">Uganda</option>
                <option name="countryselect" value="Ukraine">Ukraine</option>
                <option name="countryselect" value="United Arab Emirates">United Arab Emirates</option>
                <option name="countryselect" value="United Kingdom">United Kingdom</option>
                <option name="countryselect" value="United States">United States</option>
                <option name="countryselect" value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option name="countryselect" value="Uruguay">Uruguay</option>
                <option name="countryselect" value="Uzbekistan">Uzbekistan</option>
                <option name="countryselect" value="Vanuatu">Vanuatu</option>
                <option name="countryselect" value="Venezuela">Venezuela</option>
                <option name="countryselect" value="Vietnam">Viet Nam</option>
                <option name="countryselect" value="Virgin Islands (British)">Virgin Islands (British)</option>
                <option name="countryselect" value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                <option name="countryselect" value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                <option name="countryselect" value="Western Sahara">Western Sahara</option>
                <option name="countryselect" value="Yemen">Yemen</option>
                <option name="countryselect" value="Serbia">Serbia</option>
                <option name="countryselect" value="Zambia">Zambia</option>
                <option name="countryselect" value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div class="mb-4">
              <h5>Bio</h5>
              <textarea class="form-control" id="edit-bio" placeholder="Type your bio">${user.bio}</textarea>
            </div>
            <div class="mb-4">
              <h5>Profile Picture</h5>
              <input class="form-control" type="file" id="edit-photo">
            </div>
              <a href="#/profile" class="btn btn-primary"> Back </a>
              <button class="btn btn-light border-dark" id="edit-simpan">Save</button>  
            </form>
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

const changePasswordTemplate = () => `
<div class="container-change-page">
  <div class="change-page">
    <div class="header-change-page">
      <img class="lazyload" src="./asset/hero-changepwd.png">
    </div>
    <form id="form-changepwd">
    <div class="mb-3">
      <input type="password" class="form-control" id="oldPwd" placeholder="Enter your old password" required>
      </div>
      <div class="mb-3">
      <input type="password" class="form-control" id="newPwd" placeholder="Enter your new password" required>
      </div>
      <div class="mb-3">
      <input type="password" class="form-control" id="confirmPwd" placeholder="Confirm your new password" required>
      </div>
      <a href= "#/profile" class="btn btn-dark">Back</a>
      <button type="submit" class="btn btn-primary" id="editButton"> Submit </button>
    </form>
  </div>
</div>
`;
const createSaveDiscussionButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like btn" style="border:none; background-color:transparent;">
  <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
  </button>
`;

const createUnsaveDiscussionButtonTemplate = () => `
  <button aria-label="unsave this discussion" id="likeButton" class="like btn" style="border:none; background-color:transparent;">
  <i class="fa fa-bookmark fa-2x" aria-hidden="true"></i>
  </button>
`;

const createBookmarkEmpty = () => `
<div class="container-fluid bg-light p-2">
<h6> You haven't bookmarked a discussion yet </h6>
</div>
<a href="#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
`;

const createDiscussionEmpty = () => `
<div class="container-fluid bg-light p-2">
<h6> You have no discussions yet </h6>
</div>
<a href="#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
`;

const createSearchDiscussionEmpty = () => `
<div class="container-fluid p-2" style="border:3px solid #ffc107; background-color:#FFF56D;">
<h6 class="fw-bold p-2"> Oops, Discussion not found </h6>
</div>
<a href="#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
`;
const createSidebarCompany = () => `
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" id="sidebar">
<a href="#/list" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" id="button" class="company">
<i class="fa fa-code fw-bold fa-2x" aria-hidden="true"></i>
  <span class="fs-4 fw-bold m-1 nav-text">Webeer</span>
</a>
<hr>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<ul class="nav nav-pills flex-column mb-auto">
  <li class="nav-item">
    <a href="" class="nav-link active" aria-current="page">
    <i class="fa fa-home" aria-hidden="true"></i>
      <span class="nav-text">Home</span>
    </a>
  </li>
  <li>
    <a href="#/list" class="nav-link text-white">
    <i class="fa fa-list" aria-hidden="true"></i>
      <span class="nav-text">Dashboard</span>
    </a>
  </li>
  <li>
    <a href="#/addjobs" class="nav-link text-white">
    <i class="fa fa-plus-square" aria-hidden="true"></i>
    <span class="nav-text">Add</span>
    </a>
  </li>
  <li>
    <a href="#/company" class="nav-link text-white">
    <i class="fa fa-cog" aria-hidden="true"></i>
    <span class="nav-text">Settings</span>
    </a>
  </li>
  <li>
  <a href="#" class="nav-link text-white" id="logout">
  <i class="fa fa-sign-out" aria-hidden="true"></i>
  <span class="nav-text">Logout</span>
  </a>
</li>
</ul>
<hr>
</div>
`;

const createCardJobCompany = (job) => `
<div class="card">
  <div class="card-header" style="text-align:center;">
    <img src="${job.image}" class="card-img-top w-75">
  </div>
  <div class = "card-body">
    <h6>${job.company}</h6>
    <p>${truncateString(job?.details.descriptionCompany, 200)}
  </div>
  <div class ="card-footer">
    <button value="${job._id}" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="edit-job">Edit</button>
    <button value="${job._id}" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="delete-job">Delete</button>
  </div>
</div>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger fw-bold" id="staticBackdropLabel">DELETE</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        Do you want to delete this job vacancy?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger" id="delete-this-job" data-bs-dismiss="modal">Delete</button>
        </div>
      </div>
  </div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" id="container-edit">
  </div>
</div>
`;
const createFormEditJob = (job) => `
<div class="modal-content">
<div class="modal-header bg-primary">
  <h5 class="modal-title text-light fw-bold" id="exampleModalLabel">Edit Job Vacancy</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<img src="${job.image}" class="card-img-top">
<form id="form-edit-job">
<h5>Job Vacancy Details</h5>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Company name</small></label>
  <div class="col-sm-6">
    <input type="text" class="form-control  form-control-sm" id="company-job" value="${job.company}">
  </div>
</div>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Job position</small></label>
  <div class="col-sm-6">
    <input type="text" class="form-control  form-control-sm" id="profession-job" value="${job.profession}" >
  </div>
</div>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Company's addressn</small></label>
  <div class="col-sm-6">
    <input type="text" class="form-control  form-control-sm" id="address-job"  value="${job.address}">
  </div>
</div>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Company logo</small></label>
    <div class="col-sm-6">
      <input type="file" class="form-control  form-control-sm" id="image-job" >
    </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Company description</small></label>
    <div class="col-sm-6">
        <textarea class="form-control" id="description-job" rows="4">${job.details.descriptionCompany}</textarea>
    </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Job description</small></label>
 <div class="col-sm-6">
     <textarea class="form-control" id="descriptionProfession-job" rows="4" >${job.details.descriptionProfession}</textarea>
 </div>
</div>
<div class="mb-3 row">
 <label for="exampleInputEmail1" class="col-form-label"><small>Level</small></label>
    <div class="col-sm-5">
        <select class="form-select form-select-sm" aria-label="Default select example"  id="level-job">
        <option selected value="${job.details.level}">${job.details.level}</option>
            <option value="Entry">Entry</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
        </select>
    </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class=" col-form-label"><small>Work from</small></label>
<div class="col-sm-5">
    <select class="form-select form-select-sm" aria-label="Default select example"  id="place-job">
    <option selected value="${job.details.workplace}">${job.details.workplace}</option>
        <option value="Onsite">Onsite</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
    </select>
</div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Time</small></label>
  <div class="col-sm-5">
    <select class="form-select form-select-sm" aria-label="Default select example" id="time-job">
      <option selected value="${job.details.timeWork}">${job.details.timeWork}</option>
      <option value="Full Time">Full Time</option>
      <option value="Part Time">Part Time</option>
    </select>
  </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Range Salary</small></label>
<div class="col-sm-3">
    <input type="text" class="form-control  form-control-sm" id="salary-job" value="${job.details.salary}" >
</div>-
<div class="col-sm-3">
    <input type="text" class="form-control  form-control-sm" id="salary-job2" value="${job.details.salary2}" >
</div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Qualification</small></label>
<div class="col-sm-6">
    <textarea class="form-control" id="qualification-job" rows="4">${job.details.qualification}</textarea>
</div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Company Links</small></label>
    <div class="col-sm-6">
        <input type="text" class="form-control  form-control-sm" id="link-job" value="${job.details.link}" >
    </div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary">Save changes</button>
</div>
</form>
</div>
</div>
`;

const createProfileCompany = (user) => `
<div class="card">
  <div class="card-header">
    <img src="${user.image}" class="card-img-top">
  </div>
  <div class="card-body">
    <p>${user.username}</p>
  </div>
  <div class="card-footer">
    <button value="${user._id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="btn-edit-company"> Change Profile </button>
    <button value="${user._id}" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btn-edit-pwd"> Change Password </button>
  </div>
</div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h5 class="modal-title text-light fw-bold" id="staticBackdropLabel">CHANGE PASSWORD</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id = "edit-password-company">
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label">Old Password</label>
            <div class="col-sm-6">
              <input type="password" class="form-control  form-control-sm" id="old-password">
            </div>
            <label for="exampleInputEmail1" class="form-label">New Password</label>
            <div class="col-sm-6">
              <input type="password" class="form-control  form-control-sm" id="new-password">
            </div>
            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
            <div class="col-sm-6">
              <input type="password" class="form-control  form-control-sm" id="confirm-password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Save</button>
          </div>
          </form>
      </div>
    </div>
</div>
</div>
<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h5 class="modal-title text-light fw-bold" id="staticBackdropLabel">CHANGE PROFILE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id = "edit-profile-company">
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <div class="col-sm-6">
              <input type="text" class="form-control  form-control-sm" id="edit-username">
            </div>
            <label for="exampleInputEmail1" class="form-label">Company Logo</label>
            <div class="col-sm-6">
              <input type="file" class="form-control  form-control-sm" id="edit-logo-company">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" id="delete-this-job" data-bs-dismiss="modal">Save</button>
          </div>
          </form>
      </div>
    </div>
</div>
</div>
`;
export {
  DetailJobsSkeleton,
  createDiscussionItemTemplateSkeleton,
  createDiscussionItemTemplate,
  createDiscussionDetailTemplateSkeleton,
  createDiscussionDetailTemplate,
  createAddDiscussionButtonTemplate,
  createFilterListTemplateSkeleton,
  createFilterListTemplate,
  createFilterCategoryTemplateSkeleton,
  createFilterCategoryTemplate,
  createDiscussionReplyTemplateSkeleton,
  createDiscussionReplyTemplate,
  createItemJob,
  createDetailJob,
  createProfileTemplateSkeleton,
  createProfileTemplate,
  createNavbarTemplateAfterLogin,
  createNavbarTemplateBeforeLogin,
  UserDiscussionSkeleton,
  createProfileEditTemplate,
  changePasswordTemplate,
  createSaveDiscussionButtonTemplate,
  createUnsaveDiscussionButtonTemplate,
  createBookmarkItemTemplate,
  createProfileOtherTemplateSkeleton,
  createProfileOtherTemplate,
  createBookmarkEmpty,
  createDiscussionEmpty,
  createSearchDiscussionEmpty,
  createSidebarCompany,
  createCardJobCompany,
  createFormEditJob,
  createProfileCompany,
};