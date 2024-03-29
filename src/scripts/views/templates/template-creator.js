import showFormattedDate from '../utils/formate-date';
import '../components/discussionList';

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
    <div class = "card-item">
    <img class="card-image placeholder skeleton my-1" style="width:150px; height:130px;">
    <h6 class="fw-bold"><span class="placeholder">Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga optio</span></h6>
    <h6><span class="placeholder">Lorem ipsum dolor sit amet consectetur adipisicing elit/span></h6>
    <p><span class="placeholder">Lorem ipsum dolor sit amet</span></p>
    <p class="fw-bold"><span class="placeholder">Lorem ipsum dolor sit amet consectetur</span></p>
    <button class="btn fw-bold btn-detail  placeholder my-1" id="btnDetailJob"><span class="placeholder">Lorem ipsum </span></button>
    <a id="btnDetailOpen"><span class="btn placeholder ">Lorem ipsum </span></a>
    </div>
    </div>`;
  }
  return template;
};
const createDetailJobPageTemplate = (jobs) => `
<div class="container-detail-jobspage">
  <div class="header-detailjob">
  <div class="d-flex" style="align-items:center;">
  <img tabindex="0" src="${jobs.image}" class="lazyload image-detailjob" alt="image company">
      <div class="company-detailjob">
        <h5 tabindex="0" class="fw-bold fs-4">${jobs.company}</h5>
        <h6 tabindex="0" class="fw-bold fs-5">${jobs.profession}</h6>
        <p  tabindex="0" class="fst-italic my-0">${jobs.address}</p>
        <p tabindex="0" class="text-muted my-0 fs-10">${showFormattedDate(jobs.updatedAt)}</p>
      </div>
    </div>
  <p tabindex="0" class="fw-bold"> Description Company </p>
  <p tabindex="0" style="text-align:justify;">${jobs.details.descriptionCompany.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
  </div>
<div class="content-detailjob">
<div class="description-detailjob">
<p tabindex="0" class="fw-bold"> Description Position </p>
<p tabindex="0" >${jobs.details.descriptionProfession.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
</div>
<div class="work-detail">
      <div class="work-1">
        <p tabindex="0" class="fw-bold">Salary :</p>
        <p tabindex="0">${jobs.details.salary} - ${jobs.details.salary2}</p>
        <p tabindex="0" class="fw-bold">Level :</p>
        <p tabindex="0">${jobs.details.level}</p>
      </div>
      <div class="work-2">
        <p tabindex="0" class="fw-bold">Work from :</p>
        <p tabindex="0" >${jobs.details.workplace}</p>
        <p tabindex="0" class="fw-bold">Time :</p>
        <p tabindex="0" >${jobs.details.timeWork}</p>
      </div>
    </div>
<p tabindex="0"  class="fw-bold my-3"> Qualifications :</p>
<p tabindex="0"  class="mx-3">${jobs.details.qualification.replace(/\n/g, '<br />')}</p>
<a tabindex="0" href="${jobs.details.link}" class="btn btn-secondary" style="background-color: #344D67" target="_blank">Apply</a>
<a tabindex="0" href="#/profilecompany/${jobs.companyid}" class="btn btn-secondary">Profile Company</a>
</div>
</div>
</div>
`;
const createItemJob = (jobs) => `
<div tabindex= "0" class = "card-item" tabindex="0">
<img tabindex= "0" src="${jobs.image}" class="card-image lazyload" alt="job image">
<h6 tabindex= "0" class="fw-bold fs-5">${jobs.company}</h6>
<h6 tabindex= "0" class="fs-5">${jobs.profession}</h6>
<p tabindex= "0" class="text-muted fs-6 fst-italic">${showFormattedDate(jobs.updatedAt)}</p>
<p tabindex= "0" class="text-muted fs-6 fst-italic">${jobs.address}</p>
<button value=${jobs._id} class="btn btn-secondary fw-bold btn-detail btn-sm" style="background-color: #344D67;" id="btnDetailJob">Visit</button>
<a class="btn btn-secondary" id="btnDetailOpen" href="#/detailjob/${jobs._id}" target="_blank" style="background-color: #344D67;">Visit</a>
</div>
`;

const createDetailJob = (detail) => `
<div class="detail-container" tabindex="0">
  <div class="header-detail">
    <div class="image-detail">
      <img tabindex= "0" class="lazyload" src="${detail.image}" alt="job image">
    </div>
    <div class="title-detail">
      <h4 tabindex= "0" class="fw-bold">${detail.company}</h4>
      <p tabindex= "0" class="text-muted fst-italic">${detail.address}</p>
      <p tabindex= "0" class="text-muted">${showFormattedDate(detail.updatedAt)}</p>
      <a tabindex= "0" href="#/profilecompany/${detail.companyid}" class="btn btn-secondary btn-sm " style=" display:flex; align-items:center; width:150px; text-align:center; justify-content:center;">Profile Company</a>
    </div>
  </div>
  <div class="description-detail">
  <h6 tabindex= "0"  class="fw-bold fs-6">Information</h6>
  <p tabindex= "0" class="fs-6">${detail.details.descriptionCompany.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
    <div class="work-detail">
      <div class="work-1">
        <p tabindex= "0" class="fw-bold fs-6"> Salary</p>
        <p tabindex= "0" class="fs-6"><i class="fa fa-usd" aria-hidden="true"></i> ${detail.details.salary} - ${detail.details.salary2} </p>
        <p tabindex= "0" class="fw-bold fs-6 ">Level</p>
        <p tabindex= "0" class="fs-6"><i class="fa fa-users" aria-hidden="true"></i> ${detail.details.level}</p>
      </div>
      <div class="work-2">
        <p tabindex= "0" class="fw-bold fs-6">Work from</p>
        <p tabindex= "0" class="fs-6"><i class="fa fa-briefcase" aria-hidden="true"></i> ${detail.details.workplace}</p>
        <p tabindex= "0" class="fw-bold fs-6">Time</p>
        <p tabindex= "0" class="fs-6"><i class="fa fa-clock-o" aria-hidden="true"></i> ${detail.details.timeWork}</p>
      </div>
    </div>
  </div>
  <div class="kualifikasi-detail">
  <p tabindex= "0" class="fw-bold fs-6">Profession Description</p>
  <p tabindex= "0" class="fs-6">${detail.details.descriptionProfession.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
  <h6 tabindex= "0" class=" fw-bold fs-6">Qualifications</h6>
  <p tabindex= "0" class="fs-6">${detail.details.qualification.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
  </div>
  <a href="${detail.details.link}" target="_blank"><button type="button" class="detail-link btn btn-secondary btn-sm" style="background-color: #344D67">Apply</button></a>
</div>
`;

const createDetailJobPageSkeleton = () => `
<div class="container-detail-jobspage placeholder-glow">
  <div class="header-detailjob">
  <div class="d-flex" style="align-items:center;">
  <img class="image-detailjob placeholder" >
      <div class="company-detailjob">
        <h5 class="fw-bold fs-4 "><span class="placeholder">Lorem ipsum dolor sit amet consectetur adipisicing</span></h5>
        <h6 class="fw-bold fs-5 "><span class="placeholder">Lorem ipsum dolor</span> </h6>
        <p class="fst-italic my-0"><span class="placeholder">Lorem ipsum dolor</span></p>
        <p class="my-0 fs-10 "><span class="placeholder">Lorem ipsum dolor</span></p>
      </div>
    </div>
  <p class="fw-bold"> <span class="placeholder">Lorem ipsum dolor</span> </p>
  <p style="text-align:justify;" class="placeholder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic suscipit vitae. Ea, iure dignissimos cum, consequuntur labore excepturi possimus est facere expedita placeat laborum nobis eius eos. Eveniet praesentium ducimus perferendis quasi molestias, soluta assumenda iure magni, officiis perspiciatis quod quidem non. Illum ab nemo magnam quis, ut, in laboriosam deleniti perspiciatis voluptatibus esse impedit ducimus placeat commodi dicta? Repellendus, inventore dolorem ex accusantium adipisci quasi? Mollitia veniam nihil esse blanditiis nesciunt in cum temporibus accusantium error officia obcaecati nam sint quaerat tempore, sequi odio, voluptatem sapiente aut, ab optio qui nemo? Vitae unde dolorum, maxime temporibus numquam delectus!</p>
  </div>
<div class="content-detailjob">
<div class="description-detailjob">
<p class="fw-bold"><span class="placeholder">Lorem ipsum dolor</span> </p>
<p class="placeholder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic suscipit vitae. Ea, iure dignissimos cum, consequuntur labore excepturi possimus est facere expedita placeat laborum nobis eius eos. Eveniet praesentium ducimus perferendis quasi molestias, soluta assumenda iure magni, officiis perspiciatis quod quidem non. Illum ab nemo magnam quis, ut, in laboriosam deleniti perspiciatis voluptatibus esse impedit ducimus placeat commodi dicta? Repellendus, inventore dolorem ex accusantium adipisci quasi? Mollitia veniam nihil esse blanditiis nesciunt in cum temporibus accusantium error officia obcaecati nam sint quaerat tempore, sequi odio, voluptatem sapiente aut, ab optio qui nemo? Vitae unde dolorum, maxime temporibus numquam delectus!</p>
</div>
<div class="work-detail">
      <div class="work-1">
        <p ><span class="placeholder">Lorem ipsum dolor</span></p>
        <p ><span class="placeholder">Lorem ipsum dolor</span> - <span class="placeholder">Lorem ipsum dolor</span></p>
        <p ><span class="placeholder">Lorem ipsum dolor</span></p>
        <p ><span class="placeholder">Lorem ipsum dolor</span></p>
      </div>
      <div class="work-2">
        <p><span class="placeholder">Lorem ipsum dolor</span></p>
        <p><span class="placeholder">Lorem ipsum dolor</span></p>
        <p><span class="placeholder">Lorem ipsum dolor</span></p>
        <p><span class="placeholder">Lorem ipsum dolor</span></p>
      </div>
</div>
<p class="fw-bold my-3"><span class="placeholder">Lorem ipsum dolor</span></p>
<p class="mx-3"><span class="placeholder">Lorem ipsum dolor</span></p>
<p class="mx-3"><span class="placeholder">Lorem ipsum dolor</span></p>
<p class="mx-3"><span class="placeholder">Lorem ipsum dolor</span></p>
<p class="mx-3"><span class="placeholder">Lorem ipsum dolor</span></p>

<a class="btn placeholder">Apply</a>
</div>
</div>
</div>
`;

const createDiscussionItemTemplateSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <div class="container-discussion-item">
        <div class="card m-0 borderless">
          <div class="card-body placeholder-glow">
            <div class="categoryDiscussion">${createCategoryDiscussionTemplateSkeleton(3)}</div>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <div class="d-flex justify-content-start align-items-center my-1 flex-wrap">
                <img class="img-discussion-item placeholder">
                <p class="ms-2 fw-bold m-0 placeholder">Lorem ipsum dolor</p>
                <p class="m-0 placeholder">&nbsp;•&nbsp;</p>
                <p class="fw-light m-0 placeholder">31 Desember 2022</p>
              </div>
              <div>
                <span class="rounded indicator-solved placeholder"><i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i></span>
              </div>
            </div>
            <h5><span class="placeholder">Lorem ipsum dolor lorem</span></h5>
            <pre class="pre-discussion-item">
              <code class="text-break code-discussion-item text-code placeholder">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ducimus officia amet, omnis voluptates impedit adipisci obcaecati repellat voluptatum maxime tempora vitae voluptatibus consectetur corrupti illo neque velit dolore? Dolores.
              </code>
            </pre>
            <div class="d-flex align-items-center flex-wrap">
              <span class="placeholder">000</span>
              <p class="m-0 ms-2 placeholder">0000</p>
              <p class="m-0 discussion-item-text-reply placeholder">&nbsp;Discussion</p>
            </div>
          </div>
        </div>
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
    isSolved = '<i class="fa fa-check-circle-o fa-2x" aria-label="unsolved discussion"></i>';
  } else {
    isSolvedClass = 'text-success';
    isSolved = '<i class="fa fa-check-circle-o fa-2x" aria-label="solved discussion"></i>';
  }
  return `
    <div class="container-discussion-item">
      <a href="/#/detaildiscussion/${discussion._id}" class="border-0 text-start text-decoration-none text-dark">
        <div class="card m-0 borderless">
          <div class="card-body">
            <div class="categoryDiscussion">${createCategoryDiscussionTemplate(discussion.categories)}</div>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <div class="d-flex justify-content-start align-items-center my-1 flex-wrap">
                <img src="${discussion.userimage}" class="img-discussion-item lazyload">
                <p class="ms-2 fw-bold m-0">${discussion.username}</p>
                <p class="m-0">&nbsp;•&nbsp;</p>
                <p class="fw-light m-0">${showFormattedDate(discussion.date)}</p>
              </div>
              <div>
                <span class="${isSolvedClass} rounded indicator-solved">${isSolved}</span>
              </div>
            </div>
            <h5>${discussion.title}</h5>
            <pre class="pre-discussion-item">
              <code class="text-break code-discussion-item text-code">
                  ${truncateString(discussion?.discussion.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/(?:\r\n|\r|\n)/g, ' ').replace(/~Enter Your Code is Here/g, '')
    .replace(/Dont Delete this~/g, ''), 200)}
              </code>
            </pre>
            <div class="d-flex align-items-center flex-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
              </svg>
              <p class="m-0 ms-2">${discussion.reply.length}</p>
              <p class="m-0 discussion-item-text-reply">&nbsp;Discussion</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
};

const createBookmarkItemTemplate = (bookmark) => {
  let isSolvedClass = '';
  let isSolved = '';
  if (bookmark.isSolved === false) {
    isSolvedClass = 'text-secondary';
    isSolved = '<i class="fa fa-check-circle-o fa-2x" aria-hidden="unsolved discussion"></i>';
  } else {
    isSolvedClass = 'text-success';
    isSolved = '<i class="fa fa-check-circle-o fa-2x" aria-hidden="solved discussion"></i>';
  }
  return `
    <div class="container-discussion-item">
      <a href="/#/detaildiscussion/${bookmark.id}" class="border-0 text-start text-decoration-none text-dark">
        <div class="card m-0 borderless">
          <div class="card-body">
            <div class="categoryDiscussion">${createCategoryDiscussionTemplate(bookmark.categories)}</div>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <div class="d-flex justify-content-start align-items-center my-1 flex-wrap">
                <img src="${bookmark.userimage}" class="img-discussion-item lazyload">
                <p class="ms-2 fw-bold m-0">${bookmark.username}</p>
                <p class="m-0">&nbsp;•&nbsp;</p>
                <p class="fw-light m-0">${showFormattedDate(bookmark.date)}</p>
              </div>
              <div>
                <span class="${isSolvedClass} rounded indicator-solved">${isSolved}</span>
              </div>
            </div>
            <h5>${bookmark.title}</h5>
            <pre class="pre-discussion-item">
              <code class="text-break code-discussion-item text-code">
                  ${truncateString(bookmark?.discussion.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/(?:\r\n|\r|\n)/g, ' ').replace(/~Enter Your Code is Here/g, '')
    .replace(/Dont Delete this~/g, ''), 200)}
              </code>
            </pre>
            <div class="d-flex align-items-center flex-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
              </svg>
              <p class="m-0 ms-2">${bookmark.reply.length}</p>
              <p class="m-0 discussion-item-text-reply">&nbsp;Discussion</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
};

const createDiscussionDetailTemplateSkeleton = () => `
  <div class="container bg-white padding placeholder-glow">
    <div class="d-flex justify-content-between align-items-center flex-wrap">
      <div class="d-flex justify-content-start align-items-center flex-wrap">
        <div class="d-flex align-items-center flex-wrap">
          <img class="picture-profile-discussion placeholder">
          <p class="m-0"><span class="placeholder">Lorem ipsum dolor</span></p>
        </div>
        <p class="m-0 ms-1"><span class="placeholder">&nbsp;•&nbsp;</span></p>
        <p class="fw-light ms-1 m-0"><span class="placeholder">31 Desember 2022</span></p>
      </div>
    </div>
    <div>${createCategoryDiscussionTemplateSkeleton(3)}</div>
    <h4><span class="placeholder">Lorem ipsum dolor</span></h4>
    <div class="flex-wrap d-flex align-items-center">
      <span class="placeholder"><i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i></span>
      <span class="placeholder mx-3"><i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i></span>
    </div>
    <p class="text-justify border-top border-bottom my-lg-2">
      <span class="placeholder">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo velit dolorum illo sapiente ab perferendis,
        placeat numquam, non voluptates ad assumenda ducimus, est quo minima deserunt quaerat quod nisi similique
        repudiandae quidem aspernatur exercitationem. Dolorem libero esse voluptatum consequatur veritatis quas odit
        eveniet, distinctio deserunt nihil praesentium enim reiciendis inventore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officia illo, impedit molestias eos provident iusto eligendi commodi minima facere, non
        quaerat necessitatibus vero explicabo consequatur? Doloremque molestias voluptatum provident iusto. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Est maiores officia beatae iusto laborum nemo, natus optio ea vitae
        voluptate voluptates delectus libero rerum laboriosam illo quod quaerat voluptatibus. Voluptate.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo velit dolorum illo sapiente ab perferendis,
        placeat numquam, non voluptates ad assumenda ducimus, est quo minima deserunt quaerat quod nisi similique
        repudiandae quidem aspernatur exercitationem. Dolorem libero esse voluptatum consequatur veritatis quas odit
        eveniet, distinctio deserunt nihil praesentium enim reiciendis inventore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officia illo, impedit molestias eos provident iusto eligendi commodi minima facere, non
        quaerat necessitatibus vero explicabo consequatur? Doloremque molestias voluptatum provident iusto. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Est maiores officia beatae iusto laborum nemo, natus optio ea vitae
        voluptate voluptates delectus libero rerum laboriosam illo quod quaerat voluptatibus. Voluptate.
      </span>
    </p>
    <div class="d-flex align-items-center flex-wrap my-2">
      <span class="placeholder">000</span>
      <span class="mx-1 placeholder">000</span>
      <span class="placeholder">&nbsp;Discussion</span>
    </div>
    <button class="btn m-0 btn-secondary text-secondary disabled placeholder"><i class="fa fa-code" aria-hidden="true"></i></button>
    <form id="form-discussion-reply" class="my-2 ">
      <textarea class="form-control disabled placeholder" rows=15" disabled></textarea>
      <button class="btn ms-1 my-1 btn-secondary text-secondary disabled placeholder">Submit Answer</button>
    </form>
  </div>
`;

const createDiscussionDetailTemplate = (discussion) => {
  let isSolvedClass = '';
  let isSolved = '';
  if (discussion.isSolved === false) {
    isSolvedClass = 'text-secondary';
    isSolved = '<i class="fa fa-check-circle-o fa-2x" aria-label="unsolved discussion"></i>';
  } else {
    isSolvedClass = 'text-success';
    isSolved = '<i class="fa fa-check-circle-o fa-2x " aria-label="solved discussion"></i>';
  }
  const discussionDetail = discussion.discussion.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/(?:\r\n|\r|\n)/g, '<br>').split('~Enter Your Code is Here')
    .join('Dont Delete this~')
    .split('Dont Delete this~');
  for (let i = 0; i < discussionDetail.length; i++) {
    if (i % 2 === 0) { discussionDetail[i] = `<p class="text-justify border-top border-bottom my-lg-2" tabindex="0">${discussionDetail[i]}</p>`; } else { discussionDetail[i] = `<div class="bg-light" tabindex="0"><pre><code class="text-break">${discussionDetail[i]}</code></pre></div>`; }
  }
  return `
    <div class="container bg-white padding "> 
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="d-flex justify-content-start align-items-center flex-wrap">
          <div class="d-flex align-items-center flex-wrap">
            <img src="${discussion.userimage}" alt="Picture Profile" class="picture-profile-discussion lazyload">
            <a href="#/detailprofile/${discussion.userid}" style="text-decoration:none;  display:flex; align-items:center;" class="fw-bold text-body text-dark" aria-label="question from ${discussion.username}">${discussion.username}</a>
          </div>
          <p class="m-0">&nbsp;•&nbsp;</p>
          <p class="fw-light m-0" tabindex="0">${showFormattedDate(discussion.date)}</p>
        </div>
        <div class = "d-flex d-none flex-wrap" id="user-only">
          <button type="button" data-bs-toggle="modal" data-bs-target="#modal-edit" class="btn p-0 mx-2 border-0" title="Edit Discussion Button">
            <i class="fa fa-pencil-square-o fa-2x" style="color: #344D67;" aria-label="edit this discussion"></i>
          </button>
          <button type="button" class="btn p-0 mx-2 border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop" title="Delete Discussion Button">
            <i class="fa fa-trash-o fa-2x" style="color: #880014;" aria-label="delete this discussion"></i>
          </button>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fw-bold" id="staticBackdropLabel" style="color: #880014;">DELETE</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              Do you want to delete this discussion?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="delete-discussion" style="background-color: #880014;">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade modal-xl" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" id="modal-edit">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <form id="form-edit-discussion">
                <div class="modal-header">
                  <h1 class="modal-title fs-5">Edit Discussion</h1>
                  <button type="reset" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h5 class="card-text">Category</h5>
                  <div id="listCategoryForSelected"></div>
                  <h5 class="card-text my-2">Discussion</h5>
                  <input type="text" name="inputTitle" id="inputTitle" class="form-control border-dark-blue mb-2" value="${discussion.title}" placeholder="Type your title discussion here">
                  <button id="codeDiscussion" class="btn btn-light border-dark-blue m-0"><i class="fa fa-code" aria-hidden="true"></i></button>
                  <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control border-dark-blue my-2"
                  placeholder="Type your discussion here">${discussion.discussion}</textarea>
                  <input type="checkbox" class="btn-check category" id="issolved" value="solved">
                  <label class="btn btn-outline-secondary btn-category" for="issolved">Solved</label>
                </div>
                <div class="modal-footer">
                  <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-secondary" id="saveEditButton" style="background-color: #344D67;">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>${createCategoryDiscussionTemplate(discussion.categories)}</div>
      <h4>${discussion.title}</h4>
      <div class="flex-wrap d-flex align-items-center">
        <div class="${isSolvedClass}">${isSolved}</div>
        <div id="saveButtonContainer"></div>
      </div>
      ${discussionDetail.join('')}
      <div class="d-flex align-items-center flex-wrap my-2" tabindex="0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px;">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
        </svg>
        <p class="lengthReply mx-1 m-0">0</p>
        <p class="m-0 discussion-item-text-reply">&nbsp;Discussion</p>
      </div>
      <button id="code" class="btn btn-light m-0 d-block" title="Code Button"><i class="fa fa-code" aria-hidden="true"></i></button>
      <form id="form-discussion-reply" class="my-2 ">
        <textarea  name="inputReply" id="inputReply" class="form-control" rows=15"></textarea>
        <button type="submit" class="btn btn-secondary ms-1 my-2" id="answerButton" style="background-color: #344D67;">Submit Answer</button>
      </form>
    </div>
  `;
};

const createCategoryDiscussionTemplateSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template += '<span class="me-1 placeholder">000000</span>';
  }
  return template;
};

const createCategoryDiscussionTemplate = (categories) => {
  let categoryElement = '';
  if ((typeof (categories)).includes('object')) {
    categories.forEach((category) => {
      categoryElement += `
        <span class="badge text-dark" style="background-color: #FFE9B1;">${category}</span>
      `;
    });
  } else {
    categoryElement += `
      <span class="badge text-dark" style="background-color: #FFE9B1;">${category}</span>
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
            <img class="picture-profile-reply placeholder">
          </div>
          <div class="ms-2">
            <a><p class=" fw-bold m-0 placeholder">Lorem ipsum dolor</p></a>
            <p class="fw-light m-0"><span class="placeholder">31 Desember 2022</span></p>
            <p style="font-size: 18px" class="placeholder">
              Lorem ipsum dolor lorem ipsum dolor
              Lorem ipsum dolor lorem ipsum dolor
              Lorem ipsum dolor lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    `;
  }
  return template;
};

const createDiscussionReplyTemplate = (discussion) => {
  const discussionReply = discussion.reply.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/(?:\r\n|\r|\n)/g, '<br>').split('~Enter Your Code is Here')
    .join('Dont Delete this~')
    .split('Dont Delete this~');
  for (let i = 0; i < discussionReply.length; i++) {
    if (i % 2 === 0) { discussionReply[i] = `<p style="font-size: 18px">${discussionReply[i]}</p>`; } else { discussionReply[i] = `<div class="bg-light"><pre><code class="text-break">${discussionReply[i]}</code></pre></div>`; }
  }
  return `
    <div class="container bg-white border-top" tabindex="0">
      <p>Answer from</p>
      <div class="d-flex align-items-top p-2">
        <div class="container-img-reply">
          <img src="${discussion.userimage}" alt="Picture Profile ${discussion.username}" class="picture-profile-reply lazyload">
        </div>
        <div class="ms-2">
          <a href="#/detailprofile/${discussion.userid}" style="text-decoration:none;" class="text-dark"><p class="fw-bold m-0 text-body" aria-label="answer from ${discussion.username}">${discussion.username}</p></a>
          <p class="fw-light m-0">${showFormattedDate(discussion.date)}</p>
          ${discussionReply.join('')}
        </div>
      </div>
    </div>
  `;
};

const createAddDiscussionButtonTemplate = () => `
  <button type="button" aria-label="Add Discussion Button" title="Add Discussion Button" class="adddiscuss btn btn-secondary d-flex justify-content-center align-items-center" style="background-color: #344D67;" data-bs-toggle="modal" data-bs-target="#modal-add-discussion" tabindex="0">
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.8332 23.8296H23.8332V34.8296H20.1665V23.8296H9.1665V20.163H20.1665V9.16296H23.8332V20.163H34.8332V23.8296Z" fill="white"/>
    </svg>
  </button>
`;

const createAddDiscussionTemplate = () => `
  <div class="modal fade modal-xl" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" id="modal-add-discussion">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <form id="form-add-discussion">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Add Discussion</h1>
            <button type="reset" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="card-text">Category</h5>
            <div id="listCategoryForSelected"></div>
            <div class="mt-2" style="border-top: 1px solid black;">
              <span class="text-small">Select a minimum of 1 category and a maximum of 3 categories</span>
            </div>
            <h5 class="card-text my-2">Discussion</h5>
            <input type="text" name="inputTitle" id="inputTitle" class="form-control border-dark-blue mb-2" placeholder="Type your title discussion here">
            <button id="code" class="btn btn-light border-dark-blue m-0" title="Code Button"><i class="fa fa-code" aria-hidden="true"></i></button>
            <textarea name="inputDiscussion" id="inputDiscussion" cols="30" rows="10" class="form-control border-dark-blue my-2"
            placeholder="Type your discussion here"></textarea>
          </div>
          <div class="modal-footer">
            <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-secondary" id="addButton" style="background-color: #344D67;">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;

const createFilterListTemplateSkeleton = () => `
  <div id="filter-drawer-skeleton" class="bg-white placeholder-glow">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <h4><span class="placeholder">Filter</span></h4>
      </div>
      <button id="close-filter" class="btn fw-bold">X</button>
    </div>
    <form id="form-filter">
      <div class="my-2">
        <h5><span class="placeholder">Sort</span></h5>
        <input type="radio" class="btn-check" name="sort" id="latest">
        <label class="btn btn-secondary text-secondary w-110 disabled placeholder mb-1" for="latest">Latest</label>
        <input type="radio" class="btn-check" name="sort" id="oldest">
        <label class="btn btn-secondary text-secondary w-110 disabled placeholder mb-1" for="oldest">Oldest</label>
        <input type="radio" class="btn-check" name="sort" id="solved">
        <label class="btn btn-secondary text-secondary w-110 disabled placeholder mb-1" for="solved">Solved</label>
        <input type="radio" class="btn-check" name="sort" id="unsolved">
        <label class="btn btn-secondary text-secondary w-110 disabled placeholder mb-1" for="unsolved">Unsolved</label>
      </div>
      <div class="my-2">
        <h5><span class="placeholder">Category</span></h5>
        <div class="filterCategory">${createFilterCategoryTemplateSkeleton(5)}</div>
      </div>
      <div>
        <button type="button" class="btn btn-secondary text-secondary w-110 disabled placeholder mb-2">Reset</button>
        <button type="button" class="btn btn-secondary text-secondary w-110 disabled placeholder mb-2">Filter</button>
      </div>
    </form>
  </div>
`;

const createFilterListTemplate = () => `
  <div id="filter-drawer" class="bg-white">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <h4 tabindex="0">Filter</h4>
      </div>
      <button id="close-filter" class="btn fw-bold">X</button>
    </div>
    <form id="form-filter" tabindex="-1">
      <div class="my-2">
        <h5 tabindex="0">Sort</h5>
        <input type="radio" class="btn-check category" name="sort" id="latest" autocomplete="off" value="latest" checked>
        <label tabindex="0" class="btn btn-outline-secondary btn-category" for="latest">Latest</label>
        <input type="radio" class="btn-check category" name="sort" id="oldest" autocomplete="off" value="oldest">
        <label tabindex="0" class="btn btn-outline-secondary btn-category" for="oldest">Oldest</label>
        <input type="radio" class="btn-check category" name="sort" id="solved" autocomplete="off" value="solved">
        <label tabindex="0" class="btn btn-outline-secondary btn-category" for="solved">Solved</label>
        <input type="radio" class="btn-check category" name="sort" id="unsolved" autocomplete="off" value="unsolved">
        <label tabindex="0" class="btn btn-outline-secondary btn-category" for="unsolved">Unsolved</label>
      </div>
      <div class="my-2">
        <h5 tabindex="0">Category</h5>
        <div class="filterCategory"></div>
      </div>
      <div>
        <button type="reset" class="btn btn-secondary w-110 mb-2" style="background-color: #880014;">Reset</button>
        <button type="submit" class="btn btn-secondary w-110 mb-2" style="background-color: #344D67;">Filter</button>
      </div>
    </form>
  </div>
`;

const createFilterCategoryTemplateSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <input type="checkbox" class="btn-check" id="lorem">
      <label class="btn btn-secondary text-secondary w-110 disabled placeholder mb-1" for="lorem">lorem</label>
    `;
  }
  return template;
};

const createFilterCategoryTemplate = (category) => `
  <input type="checkbox" class="btn-check categoryFilter category" name="categoryFilter" id="${category.name}" value="${category.name}" autocomplete="off">
  <label class="btn btn-outline-secondary btn-category text-capitalize" for="${category.name}">${category.name}</label>
`;

const createFilterCategoryTemplateAddDiscussion = (category) => `
  <input type="checkbox" class="btn-check categoryFilterAddDiscussion category" name="categoryFilterAddDiscussion" id="${category.name}1" value="${category.name}" autocomplete="off">
  <label class="btn btn-outline-secondary btn-category text-capitalize" for="${category.name}1">${category.name}</label>
`;

const createProfileTemplateSkeleton = () => `
<div class="container-profile placeholder-glow">
      <div class="container-profile-main">
        <div class="card profile">
          <img style="width:200px; height:200px;" class="placeholder">
          <div class="container-activity">
              <p  class="fw-bold"  style="text-align:left; border-bottom:3px solid grey;"><span class="placeholder">lorem ipsum</span></p>
              <h6> <span class="placeholder">lorem ipsum</span> </h6>
              <h2 class="grade-user fw-bold"><span class="placeholder">lorem</span></h2>
              <h6><span class="placeholder">lorem ipsum</span></h6>
              <p class="length-disscussion-user"><span class="placeholder">lorem</span></p>
              <h6><span class="placeholder">lorem ipsum domet</span></h6>
              <p class="length-reply-user"><span class="placeholder">lorem</span></p>
          </div>
          <div class="container-myskill" style="padding:10px;">
          <p class=" fw-bold" style="border-bottom:3px solid grey;"><span class="placeholder">lorem ipsum</span> </p>
          <p class="fw-bold "><span class="placeholder">lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum 
          lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum </span></p>
          </div>
            <div class="card-body text-center">
            <button class=" btn btn-sm btn-secondary text-secondary disabled placeholder" style="padding:11px;">Change Profile</button>
            <button class=" btn btn-sm btn-secondary text-secondary disabled placeholder" style="padding:11px;">Change Password</button>
          </div>
        </div>
      </div>
      <div class="container-about-profile-user scroll-item">
        <h2 class="fw-bold"><span class="placeholder">lorem ipsum domet ipsum domet ipsum domet</span></h2>
        <p class="fw-bold "><span class="placeholder">lorem ipsum domet ipsum</span></p>
        <h6><span class="placeholder">lorem ipsum</span></h6>
        <p><span class="placeholder">lorem ipsum</span></p>
        <div class="d-flex" style="border-bottom:3px solid grey; ">
          <button class="btn " id="buttonAboutProfile" style="margin-bottom:5px;"><span class="placeholder">lorem ipsum</span></button>
          <button class="btn " id="buttonDiscussionProfile" style="margin-bottom:5px;"><span class="placeholder">lorem ipsum</span></button>
          <button class="btn " id="buttonBookmarkProfile" style="margin-bottom:5px;"><span class="placeholder">lorem ipsum</span></button>
        </div>
        <div class="content-profile-user">
          <h6><span class="placeholder">lorem ipsum</span></h6>
          <p><span class="placeholder">lorem ipsum domet</span></p>
          <h6> <span class="placeholder">lorem ipsum</span> </h6>
          <p><span class="placeholder">lorem ipsum ipsum domet</span></p>
          <h6><span class="placeholder">lorem ipsum</span></h6>
          <p style="text-align:justify;"><span class="placeholder">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
          </span></p>
        </div>
      </div>
    </div>
    </div>
`;

const createProfileTemplate = (user) => {
  if (user.bio === undefined || user.bio === '') {
    user.bio = '-';
  }
  if (user.contact === undefined) {
    user.contact = '';
  }
  if (user.profesi === undefined || user.profesi === '') {
    user.profesi = '-';
  }
  if (user.country === undefined || user.country === '') {
    user.country = '-';
  }
  if (user.specialities === undefined || user.specialities === '') {
    user.specialities = '-';
  }

  return `
    <div class="container-profile">
      <div class="container-profile-main" tabindex="0">
        <div class="card profile" style="border-radius:5px; border:1px solid #c6c3be;">
          <img tabindex= "0" src="${user.image}" class="card-img-top lazyload" alt="user-profile">
          <div tabindex= "0" class="container-activity">
              <p tabindex= "0" class="text-muted fw-bold"  style="text-align:left; border-bottom:3px solid grey;">Activity </p>
              <h6 tabindex= "0"> Grade </h6>
              <h2 tabindex= "0" class="grade-user fw-bold"></h2>
              <h6 tabindex= "0" > Your Discussion</h6>
              <p tabindex= "0" class="length-disscussion-user"></p>
              <h6 tabindex= "0" > Your Answer Discussion</h6>
              <p tabindex= "0" class="length-reply-user"></p>
          </div>
          <div tabindex= "0" class="container-myskill" style="padding:10px;">
          <p tabindex= "0" class="text-muted fw-bold" style="border-bottom:3px solid grey;"> My Skills </p>
          <h6 tabindex= "0" >${user.specialities.replace(/(?:\r\n|\r|\n)/g, '<br>')}</h6>
          </div>
            <div class="card-body text-center">
            <button class=" btn btn-secondary text-light btn-sm" value="${user._id}" style="padding:11px; background-color:#344D67;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Change Profile</button>
            <button class=" btn btn-secondary text-light btn-sm"  style="padding:11px; background-color:#344D67;"data-bs-toggle="modal" data-bs-target="#staticBackdropChangePassword">Change Password</button>
          </div>
        </div>
      </div>
      <div class="container-about-profile-user" tabindex="0" style="border-radius:5px; border:1px solid #c6c3be;">
        <h2 tabindex= "0" class="fw-bold">${user.username}</h2>
        <p tabindex= "0"  class="fw-bold" style="color:#607EAA;">${user.profesi}</p>
        <h6 tabindex= "0" >Country</h6>
        <p tabindex= "0" >${user.country}</p>
        <div class="d-flex" style="border-bottom:3px solid grey; ">
          <button class="btn afterClick " id="buttonAboutProfile" style="margin-bottom:5px;"><i class="fa fa-user" aria-hidden="true"></i> About</button>
          <button class="btn " id="buttonDiscussionProfile" style="margin-bottom:5px;"><i class="fa fa-comments-o" aria-hidden="true"></i> Discussion</button>
          <button class="btn " id="buttonBookmarkProfile" style="margin-bottom:5px;"><i class="fa fa-bookmark" aria-hidden="true"></i> Bookmark</button>
        </div>
        <div tabindex= "0" class="content-profile-user scroll-item">
          <h6 tabindex= "0" >Contact</h6>
          <p tabindex= "0" >${user.contact}</p>
          <h6 tabindex= "0" > Email </h6>
          <p tabindex= "0" >${user.email}</p>
          <h6 tabindex= "0" >About</h6>
          <p tabindex= "0" style="text-align:justify;">${user.bio.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        </div>
      </div>
      <div class="p-3 footer-lite-profile" style="background-color:#f3f2ef;">
        <footer-lite></footer-lite>
      </div>
    </div>
    <form id= "edit-user">
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Change Profile</h5>
              <button type="reset" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
      <div class="modal-body">
      <div class="container-edit-profile">
    <div class="edit-profile" style="flex-wrap:wrap; justify-content:center;">
    <div class="header-edit-profile" style="position:relative;">
    <div class="square"></div>
    <div class="container-img" style="background-image:url('${user.image}'); width: 200px; height:200px; background-size:200px 200px; position:relative; z-index:1; margin:0 auto; border:5px solid white; top:10px;"></div>
    </div>
            <div class="mb-4" style="display:flex; justify-content:center; margin-top:20px;">
            <label id="label-image">
            <input class="form-control" type="file" id="edit-photo"  accept=".jpg, .jpeg, .png"><span> Select a file</span>
            </label>
            </div>
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
                <option name="countryselect" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option name="countryselect" value="Colombia">Colombia</option>
                <option name="countryselect" value="Comoros">Comoros</option>
                <option name="countryselect" value="Congo">Congo</option>
                <option name="countryselect" value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                <option name="countryselect" value="Cook Islands">Cook Islands</option>
                <option name="countryselect" value="Costa Rica">Costa Rica</option>
                <option name="countryselect" value="Cote d'Ivoire">Cote d'Ivoire</option>
                <option name="countryselect" value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
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
                <option name="countryselect" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option name="countryselect" value="Faroe Islands">Faroe Islands</option>
                <option name="countryselect" value="Fiji">Fiji</option>
                <option name="countryselect" value="Finland">Finland</option>
                <option name="countryselect" value="France">France</option>
                <option name="countryselect" value="France, Metropolitan">France, Metropolitan</option>
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
                <option name="countryselect" value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option>
                <option name="countryselect" value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option name="countryselect" value="Honduras">Honduras</option>
                <option name="countryselect" value="Hong Kong">Hong Kong</option>
                <option name="countryselect" value="Hungary">Hungary</option>
                <option name="countryselect" value="Iceland">Iceland</option>
                <option name="countryselect" value="India">India</option>
                <option name="countryselect" value="Indonesia">Indonesia</option>
                <option name="countryselect" value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
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
                <option name="countryselect" value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option name="countryselect" value="Korea, Republic of">Korea, Republic of</option>
                <option name="countryselect" value="Kuwait">Kuwait</option>
                <option name="countryselect" value="Kyrgyzstan">Kyrgyzstan</option>
                <option name="countryselect" value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option name="countryselect" value="Latvia">Latvia</option>
                <option name="countryselect" value="Lebanon">Lebanon</option>
                <option name="countryselect" value="Lesotho">Lesotho</option>
                <option name="countryselect" value="Liberia">Liberia</option>
                <option name="countryselect" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option name="countryselect" value="Liechtenstein">Liechtenstein</option>
                <option name="countryselect" value="Lithuania">Lithuania</option>
                <option name="countryselect" value="Luxembourg">Luxembourg</option>
                <option name="countryselect" value="Macau">Macau</option>
                <option name="countryselect" value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
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
                <option name="countryselect" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option name="countryselect" value="Moldova, Republic of">Moldova, Republic of</option>
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
                <option name="countryselect" value="Russian Federation">Russian Federation</option>
                <option name="countryselect" value="Rwanda">Rwanda</option>
                <option name="countryselect" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                <option name="countryselect" value="Saint LUCIA">Saint LUCIA</option>
                <option name="countryselect" value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                <option name="countryselect" value="Samoa">Samoa</option>
                <option name="countryselect" value="San Marino">San Marino</option>
                <option name="countryselect" value="Sao Tome and Principe">Sao Tome and Principe</option> 
                <option name="countryselect" value="Saudi Arabia">Saudi Arabia</option>
                <option name="countryselect" value="Senegal">Senegal</option>
                <option name="countryselect" value="Seychelles">Seychelles</option>
                <option name="countryselect" value="Sierra Leone">Sierra Leone</option>
                <option name="countryselect" value="Singapore">Singapore</option>
                <option name="countryselect" value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
                <option name="countryselect" value="Slovenia">Slovenia</option>
                <option name="countryselect" value="Solomon Islands">Solomon Islands</option>
                <option name="countryselect" value="Somalia">Somalia</option>
                <option name="countryselect" value="South Africa">South Africa</option>
                <option name="countryselect" value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                <option name="countryselect" value="Spain">Spain</option>
                <option name="countryselect" value="Sri Lanka">Sri Lanka</option>
                <option name="countryselect" value="St. Helena">St. Helena</option>
                <option name="countryselect" value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                <option name="countryselect" value="Sudan">Sudan</option>
                <option name="countryselect" value="Suriname">Suriname</option>
                <option name="countryselect" value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                <option name="countryselect" value="Swaziland">Swaziland</option>
                <option name="countryselect" value="Sweden">Sweden</option>
                <option name="countryselect" value="Switzerland">Switzerland</option>
                <option name="countryselect" value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option name="countryselect" value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option name="countryselect" value="Tajikistan">Tajikistan</option>
                <option name="countryselect" value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option name="countryselect" value="Thailand">Thailand</option>
                <option name="countryselect" value="Togo">Togo</option>
                <option name="countryselect" value="Tokelau">Tokelau</option>
                <option name="countryselect" value="Tonga">Tonga</option>
                <option name="countryselect" value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option name="countryselect" value="Tunisia">Tunisia</option>
                <option name="countryselect" value="Turkey">Turkey</option>
                <option name="countryselect" value="Turkmenistan">Turkmenistan</option>
                <option name="countryselect" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
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
                <option name="countryselect" value="Viet Nam">Viet Nam</option>
                <option name="countryselect" value="Virgin Islands (British)">Virgin Islands (British)</option>
                <option name="countryselect" value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                <option name="countryselect" value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                <option name="countryselect" value="Western Sahara">Western Sahara</option>
                <option name="countryselect" value="Yemen">Yemen</option>
                <option name="countryselect" value="Serbia">Serbia</option>
                <option name="countryselect" value="Zambia">Zambia</option>
                <option name="countryselect" value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div class="mb-4">
              <h5>Bio</h5>
              <textarea class="form-control" id="edit-bio" placeholder="Type your bio" rows="8">${user.bio}</textarea>
            </div>
            <div class="mb-4">
            <h5>My Skills</h5>
            <textarea class="form-control" id="edit-skill" placeholder="Type your skills" rows="5">${user.specialities}</textarea>
            </div>
            <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal"> Back </button>
            <button type="submit" class="btn btn-secondary" style="background-color: #344D67;" id="edit-simpan">Save</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</form>
<form id="form-changepwd">
  <div class="modal fade" id="staticBackdropChangePassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Change Password</h5>
          <button type="reset" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-change-page">
            <div class="change-page">
              <div class="mb-3">
                <input type="password"  minlength="8" maxlength="16" class="form-control " id="oldPwd" placeholder="Enter your old password" required>
              </div>
              <div class="mb-3">
                <input type="password"  minlength="8" maxlength="16" class="form-control" id="newPwd" placeholder="Enter your new password" required>
              </div>
              <div class="mb-3">
                <input type="password"  minlength="8" maxlength="16" class="form-control" id="confirmPwd" placeholder="Confirm your new password" required>
              </div>
              <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal"> Back </button>
              <button type="submit" class="btn btn-secondary" style="background-color: #344D67" id="editButton">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
`;
};

const createAboutProfileTemplate = (user) => {
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.contact === undefined) {
    user.contact = '';
  }
  if (user.profesi === undefined) {
    user.profesi = '-';
  }
  return `
  <div class="content-profile-user">
    <h6>Contact</h6>
    <p>${user.contact}</p>
    <h6> Email </h6>
    <p>${user.email}</p>
    <h6>About</h6>
    <p style="text-align:justify;">${user.bio.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
`;
};

const createProfileOtherTemplateSkeleton = () => `
<div class="container-profile placeholder-glow">
<div class="container-profile-main">
  <div class="card profile">
    <img style="width:200px; height:200px;" class="placeholder">
    <div class="container-activity">
        <p  class="fw-bold"  style="text-align:left; border-bottom:3px solid grey;"><span class="placeholder">lorem ipsum</span></p>
        <h6> <span class="placeholder">lorem ipsum</span> </h6>
        <h2 class="grade-user fw-bold"><span class="placeholder">lorem</span></h2>
        <h6><span class="placeholder">lorem ipsum</span></h6>
        <p class="length-disscussion-user"><span class="placeholder">lorem</span></p>
        <h6><span class="placeholder">lorem ipsum domet</span></h6>
        <p class="length-reply-user"><span class="placeholder">lorem</span></p>
    </div>
    <div class="container-myskill" style="padding:10px;">
    <p class=" fw-bold" style="border-bottom:3px solid grey;"><span class="placeholder">lorem ipsum</span> </p>
    <p class="fw-bold "><span class="placeholder">lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum 
    lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum lorem ipsum ipsum ipsum </span></p>
    </div>
  </div>
</div>
<div class="container-about-profile-user scroll-item">
  <h2 class="fw-bold"><span class="placeholder">lorem ipsum domet ipsum domet ipsum domet</span></h2>
  <p class="fw-bold "><span class="placeholder">lorem ipsum domet ipsum</span></p>
  <h6><span class="placeholder">lorem ipsum</span></h6>
  <p><span class="placeholder">lorem ipsum</span></p>
  <div class="d-flex" style="border-bottom:3px solid grey; ">
    <button class="btn " id="buttonAboutProfile" style="margin-bottom:5px;"><span class="placeholder">lorem ipsum</span></button>
    <button class="btn " id="buttonDiscussionProfile" style="margin-bottom:5px;"><span class="placeholder">lorem ipsum</span></button>
  </div>
  <div class="content-profile-user">
    <h6><span class="placeholder">lorem ipsum</span></h6>
    <p><span class="placeholder">lorem ipsum domet</span></p>
    <h6> <span class="placeholder">lorem ipsum</span> </h6>
    <p><span class="placeholder">lorem ipsum ipsum domet</span></p>
    <h6><span class="placeholder">lorem ipsum</span></h6>
    <p style="text-align:justify;"><span class="placeholder">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
    </span></p>
  </div>
</div>
</div>
</div>
`;

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
  if (user.specialities === undefined) {
    user.specialities = '-';
  }

  return `
    <div class="container-profile">
      <div class="container-profile-main">
        <div class="card profile">
          <img src="${user.image}" class="card-img-top lazyload">
          <div class="container-activity">
              <p  class="text-muted fw-bold"  style="text-align:left; border-bottom:3px solid grey;">Activity </p>
              <h6> Grade </h6>
              <h2 class="grade-user fw-bold"></h2>
              <h6> Your Discussion</h6>
              <p class="length-disscussion-user"></p>
              <h6> Your Answer Discussion</h6>
              <p class="length-reply-user"></p>
          </div>
          <div class="container-myskill" style="padding:10px;">
          <p class="text-muted fw-bold" style="border-bottom:3px solid grey;"> My Skills </p>
          <p class="fw-bold text-muted">${user.specialities.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
          </div>
        </div>
      </div>
      <div class="container-about-profile-user scroll-item">
        <h2 class="fw-bold">${user.username}</h2>
        <p class="fw-bold" style="color:#607EAA;">${user.profesi}</p>
        <h6>Country</h6>
        <p>${user.country}</p>
        <div class="d-flex" style="border-bottom:3px solid grey; ">
          <button class="btn afterClick " id="buttonAboutProfile" style="margin-bottom:5px;"><i class="fa fa-user" aria-hidden="true"></i> About</button>
          <button class="btn " id="buttonDiscussionProfile" style="margin-bottom:5px;"><i class="fa fa-comments-o" aria-hidden="true"></i> Discussion</button>        </div>
        <div class="content-profile-user">
          <h6>Contact</h6>
          <p>${user.contact}</p>
          <h6> Email </h6>
          <p>${user.email}</p>
          <h6>About</h6>
          <p style="text-align:justify;">${user.bio.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        </div>
      </div>
    </div>
    </div>
    `;
};
const createNavbarTemplateBeforeLogin = () => `
<nav class="navbar fixed-top navbar-expand-lg " id="navbar">
<div class="container-fluid">
  <a class="navbar-brand text-light fw-bold" href="#"><i class="fa fa-code fw-bold" aria-hidden="true"></i> WEBEER</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars text-white" aria-hidden="true"></i>
  </button>
  <div class="collapse navbar-collapse nav nav-responsive" id="navbarNav">
    <ul class="navbar-nav text-center">
      <li class="nav-item">
        <a class="nav-link text-light mx-1" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light  mx-1" href="#/about">About</a>
      </li>
      <li class="nav-item">
        <button class="btn btn-light mx-1 loginNav" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color:#FFE9B1; width:80px;">Login</button>
      </li>
      <li class="nav-item">
      <a class="btn btn-light mx-1" href="#/register">Register</a>
    </li>
    </ul>
  </div>
</div>
</nav>`;

const createNavbarTemplateAfterLogin = () => `
<nav class="navbar fixed-top navbar-expand-lg " id="navbar">
<div class="container-fluid">
<a class="navbar-brand text-light fw-bold" href="#"><i class="fa fa-code fw-bold" aria-hidden="true"></i> WEBEER</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars text-white" aria-hidden="true"></i>
  </button>
  <div class="collapse navbar-collapse nav nav-responsive" id="navbarNav">
    <ul class="navbar-nav text-center">
      <li class="nav-item">
        <a class="nav-link text-light" aria-current="page" href="#/profile">Profile</a>
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

const createSaveDiscussionButtonTemplate = () => `
  <button aria-label="save this discussion" id="likeButton" class="like btn p-0 mx-3" style="border:none; background-color:transparent;" title="Save Discussion Button">
  <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
  </button>
`;

const createUnsaveDiscussionButtonTemplate = () => `
  <button aria-label="unsave this discussion" id="likeButton" class="like btn p-0 mx-3" style="border:none; background-color:transparent;" title="Unsave Discussion Button">
  <i class="fa fa-bookmark fa-2x" aria-hidden="true"></i>
  </button>
`;

const createBookmarkEmpty = () => `
<div class="container-fluid bg-light p-2">
<h6> You haven't bookmarked a discussion yet </h6>
</div>
${createAddDiscussionButtonTemplate()}
`;

const createDiscussionEmpty = () => `
<div class="container-fluid bg-light p-2">
<h6> You have no discussions yet </h6>
</div>
${createAddDiscussionButtonTemplate()}
`;

const createSearchDiscussionEmpty = () => `
<div class="container-fluid p-2 bg-light">
<h6 class="p-2"> Oops, Discussion not found </h6>
</div>
${createAddDiscussionButtonTemplate()}
`;
const createSidebarCompany = () => `
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" id="sidebar">
<div class="navbar" style="display:none;"></div>
<a href="#/list" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" id="button" class="company">
<i class="fa fa-code fw-bold fa-2x" aria-hidden="true"></i>
  <span class="fs-4 fw-bold m-1 nav-text">Webeer</span>
</a>
<hr>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="display: none;">
<span class="navbar-toggler-icon"></span>
</button>
<ul class="nav nav-pills flex-column mb-auto">
  <li class="nav-item">
    <a href="#/dashboard" class="nav-link text-white" aria-current="page">
    <i class="fa fa-home" aria-hidden="true"></i>
      <span class="nav-text">Home</span>
    </a>
  </li>
  <li>
    <a href="#/list" class="nav-link text-white ">
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
<div tabindex="0" class="card-job-company">
  <div class="card-header" style="text-align:center;">
    <img src="${job.image}">
  </div>
  <div tabindex="0" class = "card-body">
    <h6 tabindex="0" >${job.profession}</h6>
    <p tabindex="0">${truncateString(job?.details.descriptionCompany, 200)}
  </div>
  <div class ="card-footer" style="border-top:1px solid gray; padding:5px;">
    <button value="${job._id}" class="btn btn-secondary" style=" background-color: #344D67;"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="edit-job">Edit</button>
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
  <div class="modal-dialog modal-dialog-scrollable  modal-xl" id="container-edit">
  </div>
</div>
`;
const createCardJobCompanySkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
<div class="card-job-company">
    <div class="card-header placeholder-wave" style="text-align:center;">
      <img class=" placeholder" style="width:200px; height:200px;">
    </div>
    <div class = "card-body placeholder-wave" style="margin-top:5px;">
      <h6><span class="placeholder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur!</span></h6>
      <p><span class="placeholder">${truncateString('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque veniam cum quaerat nam at similique error aliquam, vitae neque blanditiis atque, culpa doloremque tenetur, ad repellat enim hic distinctio ipsam quasi perspiciatis natus id ducimus. Beatae omnis sint possimus reiciendis itaque sit accusamus veniam iure! Et obcaecati id aspernatur, soluta temporibus quos ut quis voluptate pariatur explicabo sequi debitis magni tempore aperiam autem perspiciatis nam, assumenda quas magnam ipsa impedit corrupti iusto in officiis. Quaerat, beatae. Itaque totam autem laborum esse numquam et rerum quia a, sequi eligendi voluptates veniam sint consequatur nulla repudiandae laboriosam excepturi exercitationem inventore pariatur, id minima? Aspernatur necessitatibus eveniet iure officiis numquam voluptas rem perferendis? Inventore placeat, fugiat veritatis dolorum et beatae ab odio delectus ipsum sequi voluptatem dolorem earum consectetur, aspernatur qui est accusamus fugit totam minima dicta sit! Rem, nulla! Praesentium voluptate explicabo consectetur vero accusamus odio quaerat possimus, sed nulla dolorum quod at impedit suscipit quae consequuntur amet debitis, neque repellat. Facere nesciunt dignissimos esse suscipit placeat iste dolorem omnis nostrum, fugit repudiandae! Tempora distinctio reiciendis neque voluptas, autem beatae. Deleniti omnis tenetur distinctio alias ullam, quod magni. Dicta ratione adipisci incidunt, repellat officiis molliti', 200)}</span></p>
    </div>
    <div class ="card-footer placeholder-wave">
      <button class="btn  placeholder "  data-bs-toggle="modal" data-bs-target="#exampleModal" id="edit-job" >Edit</button>
      <button  class="btn  placeholder" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="delete-job">Delete</button>
    </div>
</div>`;
  }
  return template;
};
const createFormEditJob = (job) => `
<div class="modal-content">
<div class="modal-header" style="background-color: #344D67;">
  <h5 class="modal-title text-light fw-bold" id="exampleModalLabel">Edit Job Vacancy</h5>
  <button type="button" class="btn-close" style="background-color:white;" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="container-img" style="background-image:url('${job.image}'); width: 200px; height:200px; background-size:200px 200px; margin: 0 auto; border:2px solid grey;"> </div>
<form id="form-edit-job">
<div class="mb-3 row">
    <div class="col" style="display:flex; justify-content:center; margin-top:10px;">
    <label id="label-image">
      <input type="file" class="form-control  " id="image-job" accept=".jpg, .jpeg, .png" ><span> Select a file</span>
      </label>
    </div>
</div>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Company name</small></label>
  <div class="col">
    <input type="text" class="form-control  " id="company-job" value="${job.company}">
  </div>
</div>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Job position</small></label>
  <div class="col">
    <input type="text" class="form-control  " id="profession-job" value="${job.profession}" >
  </div>
</div>
<div class="mb-3 row">
  <label for="exampleInputEmail1" class="col-form-label"><small>Company's addressn</small></label>
  <div class="col">
    <input type="text" class="form-control  " id="address-job"  value="${job.address}">
  </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Company description</small></label>
    <div class="col">
        <textarea class="form-control" id="description-job" rows="7">${job.details.descriptionCompany}</textarea>
    </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Job description</small></label>
 <div class="col">
     <textarea class="form-control" id="descriptionProfession-job" rows="5" >${job.details.descriptionProfession}</textarea>
 </div>
</div>
<div class="mb-3 row">
 <label for="exampleInputEmail1" class="col-form-label"><small>Level</small></label>
    <div class="col-sm-5">
        <select class="form-select form-select-sm" aria-label="Default select example"  id="level-job">
            <option  name="levelselect" value="Entry">Entry</option>
            <option  name="levelselect" value="Intermediate">Intermediate</option>
            <option  name="levelselect" value="Expert">Expert</option>
        </select>
    </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class=" col-form-label"><small>Work from</small></label>
<div class="col-sm-5">
    <select class="form-select form-select-sm" aria-label="Default select example"  id="place-job">
        <option name="jobselect" value="Onsite">Onsite</option>
        <option name="jobselect" value="Remote">Remote</option>
        <option name="jobselect" value="Hybrid">Hybrid</option>
    </select>
</div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Time</small></label>
  <div class="col-sm-5">
    <select class="form-select form-select-sm" aria-label="Default select example" id="time-job">
      <option name="timeselect" value="Full Time">Full Time</option>
      <option name="timeselect" value="Part Time">Part Time</option>
    </select>
  </div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Range Salary</small></label>
<div class="col-sm-3">
    <input type="text" class="form-control  " id="salary-job" value="${job.details.salary}" >
</div>-
<div class="col-sm-3">
    <input type="text" class="form-control  " id="salary-job2" value="${job.details.salary2}" >
</div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Qualification</small></label>
<div class="col">
    <textarea class="form-control" id="qualification-job" rows="5">${job.details.qualification}</textarea>
</div>
</div>
<div class="mb-3 row">
<label for="exampleInputEmail1" class="col-form-label"><small>Company Links</small></label>
    <div class="col">
        <input type="text" class="form-control  " id="link-job" value="${job.details.link}" >
    </div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-secondary" style="background-color: #344D67" id="editJobButton">Save changes</button>
</div>
</form>
</div>
</div>
`;

const createProfileCompany = (user) => {
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.specialities === undefined) {
    user.specialities = '-';
  }
  if (user.address === undefined) {
    user.address = '-';
  }
  if (user.industry === undefined) {
    user.industry = '-';
  }
  if (user.bio === undefined) {
    user.bio = '-';
  }
  if (user.employee === undefined) {
    user.employee = '';
  }
  if (user.employee2 === undefined) {
    user.employee2 = '';
  }
  if (user.founded === undefined) {
    user.founded = '-';
  }
  if (user.website === undefined) {
    user.website = '-';
  }
  return `
<div class="container-profile-company">
  <div class="header-profile-company">
  <div class="square"></div>
    <div class="content-header-profile-company">
    <img tabindex= "0" src="${user.image}" class="lazyload img-profile-company" alt="image profile company">
      <div tabindex= "0" class="profile-company">
        <p tabindex= "0" class="fw-bolder fs-2 my-0">${user.username}</p>
        <p tabindex= "0" class="text-muted my-0" style="font-size:12px;">${user.specialities} | ${user.address}</p>
      </div>
    </div>
    </div>
  <div tabindex= "0" class="body-profile-company">
    <p tabindex= "0" class="fw-bold my-0"> Overview </p>
    <p tabindex= "0" class="text-muted my-0">${user.bio.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
    <p tabindex= "0" class="fw-bold my-0">Industry</p>
    <p tabindex= "0" class="text-muted my-0">${user.industry}</p>
    <p tabindex= "0" class="fw-bold my-0">Company size</p>
    <p tabindex= "0" class="text-muted my-0">${user.employee} - ${user.employee2} Employee</p>
    <p tabindex= "0" class="fw-bold my-0"> Location </p>
    <p tabindex= "0" class="text-muted my-0">${user.address}</p>
    <p tabindex= "0" class="fw-bold my-0">Founded</p>
    <p tabindex= "0" class="text-muted my-0">${user.founded}</p>
    <p tabindex= "0" class="fw-bold my-0">Specialities</p>
    <p tabindex= "0" class="text-muted my-0">${user.specialities}</p>
    <p tabindex= "0" class="fw-bold my-0">Website</p>
    <a class="text-primay my-0" href="${user.website}">${user.website}</a>
    <div class="card-footer my-2">
    <button value="${user._id}" class="btn text-light" style=" background-color: #344D67;"  data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="btn-edit-company"> Change Profile </button>
    <button value="${user._id}" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btn-edit-pwd"> Change Password </button>
    </div>
    </div>
</div>
<form id = "edit-password-company">
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" style=" background-color: #344D67;">
          <h5 class="modal-title text-light fw-bold" id="staticBackdropLabel">CHANGE PASSWORD</h5>
          <button type="reset" class="btn-close" style="background-color:white;" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label">Old Password</label>
            <div class="col">
              <input type="password"  minlength="8" maxlength="16" class="form-control  " id="old-password">
            </div>
            <label for="exampleInputEmail1" class="form-label">New Password</label>
            <div class="col">
              <input type="password"  minlength="8" maxlength="16" class="form-control  " id="new-password">
            </div>
            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
            <div class="col">
              <input type="password"  minlength="8" maxlength="16" class="form-control  " id="confirm-password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn text-light" style=" background-color: #344D67;"  id="editPwdButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
<form id = "edit-profile-company">
  <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable  modal-xl">
      <div class="modal-content">
        <div class="modal-header" style=" background-color: #344D67;">
          <h5 class="modal-title text-light fw-bold" id="staticBackdropLabel">CHANGE PROFILE</h5>
          <button type="reset" class="btn-close" style="background-color:white;" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-img" style="background-image:url('${user.image}'); width: 200px; height:200px; background-size:200px 200px; margin: 0 auto; border:2px solid grey;"> </div>

          <div class="mb-3 row">
            <div class="col" style="display:flex; justify-content:center; margin-top:20px">
            <label id = "label-image">
              <input type="file" class="form-control  " id="edit-logo-company" accept=".jpg, .jpeg, .png"><span> Select a file</span>
              </label>
            </div>
            <label for="exampleInputEmail1" class="form-label">Name Company</label>
            <div class="col">
              <input type="text" class="form-control  " id="edit-username" value="${user.username}">
            </div>
            <label for="exampleInputEmail1" class="form-label">Address Company</label>
            <div class="col">
              <input type="text" class="form-control  " id="edit-address" value="${user.address}">
            </div>
            <label for="exampleInputEmail1" class="form-label">About Company</label>
            <div class="col">
              <textarea class="form-control  " id="edit-about" rows="10">${user.bio}</textarea>
            </div>
            <label for="exampleInputEmail1" class="form-label">Employee Range</label>
            <div class="mb-3 row">
              <div class="col-sm-3">
                <input type="text" class="form-control  " id="edit-employee"value="${user.employee}">
              </div>
              -
              <div class="col-sm-3">
                <input type="text" class="form-control  " id="edit-employee2"value="${user.employee2}">
              </div>
            </div>
            <label for="exampleInputEmail1" class="form-label">Website</label>
            <div class="col">
              <input type="text" class="form-control  " id="edit-website"value="${user.website}">
            </div>
            <label for="exampleInputEmail1" class="form-label">Industry</label>
            <div class="col">
              <input type="text" class="form-control  " id="edit-industry"value="${user.industry}">
            </div>
            <label for="exampleInputEmail1" class="form-label">Founded</label>
            <div class="col">
              <input type="text" class="form-control" id="edit-founded"value="${user.founded}">
            </div>
            <label for="exampleInputEmail1" class="form-label">Specialities</label>
            <div class="col">
              <input type="text" class="form-control" id="edit-specialities"value="${user.specialities}">
            </div>
          </div>
          <div class="modal-footer">
            <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn text-light" style=" background-color: #344D67;" id="editSaveButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
`;
};
const createDetailCompanyTemplate = (company) => {
  if (company.bio === undefined) {
    company.bio = '-';
  }
  if (company.specialities === undefined) {
    company.specialities = '-';
  }
  if (company.address === undefined) {
    company.address = '-';
  }
  if (company.industry === undefined) {
    company.industry = '-';
  }
  if (company.bio === undefined) {
    company.bio = '-';
  }
  if (company.employee === undefined) {
    company.employee = '';
  }
  if (company.employee2 === undefined) {
    company.employee2 = '';
  }
  if (company.founded === undefined) {
    company.founded = '-';
  }
  if (company.website === undefined) {
    company.website = '-';
  }
  return `
<div class="container-profile-company-other">
  <div class="header-profile-company-other">
  <div class="square"></div>
    <div class="content-header-profile-company">
    <img tabindex= "0" src="${company.image}" class="img-profile-company lazyload" alt="image company">
      <div class="profile-company" tabindex="0">
        <p tabindex= "0" class="fw-bolder fs-2 ">${company.username}</p>
        <p tabindex= "0" class="text-muted " style="font-size:12px;">${company.specialities} | ${company.address}</p>
      </div>
    </div>
    <div class="footer-profile-company">
    <button class="btn m-1 activated" id="about-other-company">About</button>
    <button class="btn m-1 " id="jobs-other-company">Jobs</button>
    </div>
    </div>
  <div class="body-profile-company-other" tabindex="0">
  <div class="company-overview">
    <p tabindex= "0" class="fw-bold"> Overview </p>
    <p tabindex= "0" class="text-muted">${company.bio.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
  </div>
    <p tabindex= "0" class="fw-bold ">Industry</p>
    <p tabindex= "0" class="text-muted">${company.industry}</p>
    <p tabindex= "0" class="fw-bold ">Company size</p>
    <p tabindex= "0" class="text-muted">${company.employee} - ${company.employee2} Employee</p>
    <p tabindex= "0" class="fw-bold "> Location </p>
    <p tabindex= "0" class="text-muted">${company.address}</p>
    <p tabindex= "0" class="fw-bold ">Founded</p>
    <p tabindex= "0" class="text-muted">${company.founded}</p>
    <p tabindex= "0" class="fw-bold ">Specialities</p>
    <p tabindex= "0" class="text-muted">${company.specialities}</p>
    <p tabindex= "0" class="fw-bold">Website</p>
    <a tabindex= "0" class="text-primay " href="${company.website}" target="_blank">${company.website}</a>
    </div>
</div>`;
};
const createBodyOtherCompany = (company) => {
  if (company.bio === undefined) {
    company.bio = '-';
  }
  if (company.specialities === undefined) {
    company.specialities = '-';
  }
  if (company.address === undefined) {
    company.address = '-';
  }
  if (company.industry === undefined) {
    company.industry = '-';
  }
  if (company.bio === undefined) {
    company.bio = '-';
  }
  if (company.employee === undefined) {
    company.employee = '';
  }
  if (company.employee2 === undefined) {
    company.employee2 = '';
  }
  if (company.founded === undefined) {
    company.founded = '-';
  }
  if (company.website === undefined) {
    company.website = '-';
  }
  return `<div class="company-overview">
    <p class="fw-bold"> Overview </p>
    <p class="text-muted">${company.bio.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
  </div>
    <p class="fw-bold ">Industry</p>
    <p class="text-muted">${company.industry}</p>
    <p class="fw-bold ">Company size</p>
    <p class="text-muted">${company.employee} - ${company.employee2} Employee</p>
    <p class="fw-bold "> Location </p>
    <p class="text-muted">${company.address}</p>
    <p class="fw-bold ">Founded</p>
    <p class="text-muted">${company.founded}</p>
    <p class="fw-bold ">Specialities</p>
    <p class="text-muted">${company.specialities}</p>
    <p class="fw-bold">Website</p>
    <a class="text-primay " href="${company.website}">${company.website}</a>`;
};
const createDetailCompanySkeletonTemplate = () => `
<div class="container-profile-company placeholder-glow">
  <div class="header-profile-company">
    <div class="content-header-profile-company">
    <img style="width:200px; height:200px;"class="img-profile-company placeholder">
      <div class="profile-company">
        <p class="fw-bolder fs-2 "><span class="placeholder">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi </span></p>
        <p class="text-muted  style="font-size:12px;"><span class="placeholder">Lorem ipsum  sit amet</span>  <span class="placeholder">Lorem ipsum  sit amet</span></p>
      </div>
    </div>
    </div>
  <div class="body-profile-company">
    <p class="fw-bold "><span class="placeholder">Lorem ipsum</span></p>
    <p class="text-muted "><span class="placeholder">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eligendi assumenda quis ipsam, dignissimos quod id. Eum nesciunt quasi reiciendis porro quis eligendi corporis architecto? Eius, hic nisi odit magnam, suscipit quis dolorum, iste cum eaque maxime nostrum laudantium sed eveniet aliquam consequuntur in rem ut praesentium qui aliquid.

    </span></p>
    <p class="fw-bold"><span class="placeholder">Lorem ipsum</span></p>
    <p class="text-muted "><span class="placeholder">Lorem ipsum</span></p>
    <p class="fw-bold"><span class="placeholder">Lorem ipsum</span></p>
    <p class="text-muted "><span class="placeholder">Lorem ipsum</span>  <span class="placeholder">Lorem ipsum</span></p>
    <p class="fw-bold "><span class="placeholder">Lorem ipsum</span></p>
    <p class="text-muted "><span class="placeholder">Lorem ipsum</span></p>
    <p class="fw-bold"><span class="placeholder">Lorem ipsum</span></p>
    <p class="text-muted"><span class="placeholder">Lorem ipsum</span></p>
    <p class="fw-bold"><span class="placeholder">Lorem ipsum</span></p>
    <p class="text-muted "><span class="placeholder">Lorem ipsum</span></p>
    <p class="fw-bold "><span class="placeholder">Lorem ipsum</span></p>
    <a class="text-muted " ><span class="placeholder">Lorem ipsum</span></a>
    <div class="card-footer my-2">
    <button  class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="btn-edit-company"> <span class="placeholder">Lorem ipsum</span></button>
    <button  class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btn-edit-pwd"> <span class="placeholder">Lorem ipsum</span></button>
    </div>
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
            <div class="col">
              <input type="password"  minlength="8" maxlength="16" class="form-control  " id="old-password">
            </div>
            <label for="exampleInputEmail1" class="form-label">New Password</label>
            <div class="col">
              <input type="password"  minlength="8" maxlength="16" class="form-control  " id="new-password">
            </div>
            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
            <div class="col">
              <input type="password"  minlength="8" maxlength="16" class="form-control  " id="confirm-password">
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
</div>`;

const createItemJobCompanyOther = (job) => `
  <div class="container-job-other" tabindex="0">
  <img tabindex= "0" src="${job.image}" class="job-other-img lazyload" alt="image profile company">
    <div class="text-job-other">
    <h5 tabindex= "0" >${job.company}</h5>
    <h6 tabindex= "0" >${job.profession}</h6>
    <p tabindex= "0" class="text-muted">${showFormattedDate(job.createdAt)}</p>
    <a class="btn btn-secondary btn-sm" style="background-color: #344D67; display:flex; align-items:center; justify-content:center; width:80px" href="#/detailjob/${job._id}"> VISIT </a>
    </div>
  </div>
  `;
export {
  createDetailCompanyTemplate,
  createDetailCompanySkeletonTemplate,
  DetailJobsSkeleton,
  createDiscussionItemTemplateSkeleton,
  createDiscussionItemTemplate,
  createDiscussionDetailTemplateSkeleton,
  createDiscussionDetailTemplate,
  createAddDiscussionTemplate,
  createAddDiscussionButtonTemplate,
  createFilterListTemplateSkeleton,
  createFilterListTemplate,
  createFilterCategoryTemplateAddDiscussion,
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
  createDetailJobPageTemplate,
  createDetailJobPageSkeleton,
  createItemJobCompanyOther,
  createBodyOtherCompany,
  createCardJobCompanySkeleton,
  createAboutProfileTemplate,
};