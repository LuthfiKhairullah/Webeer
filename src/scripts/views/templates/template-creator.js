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
            <p class="card-text">${truncateString(discussion?.discussion, 200)}</p>
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
            <img src="${discussion.userimage}" class="img-profile-discussion">
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
            <img src="${bookmark.userimage}" class="img-profile-discussion">
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
          <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-discussion">
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
              <button type="button" class="btn btn-danger" id="delete-discussion">Delete</button>
            </div>
          </div>
        </div>
      </div>
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
                  <!--<select name="categoryList" id="categoryList" class="form-select mb-2"></select>-->
                  <div id="listCategoryForSelected"></div>
                  <h3 class="card-text">Discussion</h3>
                  <input type="text" name="inputTitle" id="inputTitle" class="form-control mb-2" value="${discussion.title}" placeholder="Masukkan Judul Diskusi">
                  <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control mb-2"
                  placeholder="Masukkan Diskusi"></textarea>
                  <input class="form-check-input" type="checkbox" id="issolved" value="solved">
                  <label class="form-check-label" for="issolved">Solved</label>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="text-capitalize">${createCategoryDiscussionTemplate(discussion.categories)}</div>
      <h1>${discussion.title}</h1>
      <div class="d-flex align-items-center">
        <h3 class="text-muted fs-6 font-monospace pt-1 mx-1" >${discussion.date}</h3>
        <i class="fa fa-comment-o fa-x" aria-hidden="true"></i>
        <span class="lengthReply mx-1">0</span>
        <div class="${isSolvedClass}">${isSolved}</div>
        <div id="saveButtonContainer"></div>
      </div>
      <p class="text-justify border-top border-bottom my-lg-2">${discussion.discussion.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
      <form id="form-discussion-reply" class="my-2 ">
        <p> Your Answer </p>
        <textarea  name="inputReply" id="inputReply" class="form-control"  rows="5"></textarea>
        <button type="submit" class="btn btn-dark ms-1 my-1">Submit Answer</button>
      </form>
    </div>
  `;
};

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

const createDiscussionReplyTemplate = (discussion) => `
  <div class="container bg-white border-top">
  <p>Answer from</p>
      <div class="d-flex align-items-top p-2">
        <div class="container-img-reply">
          <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-reply">
        </div>
        <div class="ms-2">
        <a href="#/detailprofile/${discussion.userid}" style="text-decoration:none;" class="text-dark"><h2 style="font-size: 20px">${discussion.username}</h2></a>
          <h3 class="mb-2 text-muted" style="font-size: 14px">${discussion.date}</h3>
          <p style="font-size: 18px">${discussion.reply.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        </div>
      </div>
  </div>
`;

const createAddDiscussionButtonTemplate = () => `
  <a href="#/adddiscussion" aria-label="Add Discussion" class="add bg-dark text-center text-white border-0 fw-bold text-decoration-none">+</a>
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

const createFilterCategoryTemplate = (category) => `
  <input type="checkbox" class="btn-check" name="categoryFilter" id="${category.name}" value="${category.name}" autocomplete="off">
  <label class="btn btn-outline-primary mb-1" for="${category.name}">${category.name}</label>
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
            <img src="${user.image}" class="card-img-top">
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
            <h6> Your Discussion</h6>
            <p class="length-disscussion-user"></p>
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
    </div>
  `;
};
const createProfileOtherTemplate = (user) => {
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
            <img src="${user.image}" class="card-img-top">
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
        <h6> Your Discussion</h6>
        <p class="length-disscussion-user"></p>
    </div>
        <div class="container-fluid">
          <div class="header-btn">
            <div class="d-flex">
            <button class="btn btn-sm onactive fw-bold" id="btn-discussion">Discussion</button>
            </div>
            <div class="container-discussion-user"></div>
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
    <div class="container-edit-profile">
    <div class="d-flex edit-profile" style="flex-wrap:wrap; justify-content:center; margin-top:100px;">
            <div class="container-img">
              <img src="${user.image}" alt="Picture Profile" class="picture-profile" style="border:1px solid black; margin:15px;">
            </div>
            <form id= "edit-user">
            <div class="mb-4">
              <h5>Nama</h5>
              <input type="text" class="form-control" id="edit-username" placeholder="${user.username}" required>
             </div>
            <div class="mb-4">
              <h5>Contact</h5>
              <input type="text" class="form-control" id="edit-contact" placeholder="${user.contact}" required></input>
            </div>
            <div class="mb-4">
              <h5>Profesi</h5>
              <input type="text" class="form-control" id="edit-profesi" placeholder="${user.profesi}" required></input>
            </div>
            <div class="mb-4">
              <h5>Country</h5>
              <select class="form-select" aria-label="Default select example" id="edit-country">
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antartica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo">Congo, the Democratic Republic of the</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                <option value="Croatia">Croatia (Hrvatska)</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="France Metropolitan">France, Metropolitan</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                <option value="Holy See">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran (Islamic Republic of)</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia, Federated States of</option>
                <option value="Moldova">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                <option value="Saint LUCIA">Saint LUCIA</option>
                <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                <option value="Span">Spain</option>
                <option value="SriLanka">Sri Lanka</option>
                <option value="St. Helena">St. Helena</option>
                <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Viet Nam</option>
                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Serbia">Serbia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div class="mb-4">
              <h5>Bio</h5>
              <textarea class="form-control" id="edit-bio" placeholder="${user.bio}" required></textarea>
            </div>
              <a href="#/profile" class="btn btn-primary"> Back </a>
              <button class="btn btn-light border-dark" id="edit-simpan" data-bs-toggle="modal" data-bs-target="#exampleModal">Save</button>  
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
      <img src="./asset/hero-changepwd.png">
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
      <button type="submit"data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary"> Submit </button>
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
  changePasswordTemplate,
  createSaveDiscussionButtonTemplate,
  createUnsaveDiscussionButtonTemplate,
  createBookmarkItemTemplate,
  createProfileOtherTemplate,
  createBookmarkEmpty,
  createDiscussionEmpty,
  createSearchDiscussionEmpty,
};