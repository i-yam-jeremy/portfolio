const pages = ['home', 'about-me', 'skills', 'projects'];
let activePage = 'home';
function selectPage(id) {
  activePage = id;
  for (const page of pages) {
    if (page === id) {
      $('#' + page).show();
      $('#mobile-' + page).show();
    }
    else {
      $('#' + page).hide();
      $('#mobile-' + page).hide();
    }
  }
}

function updateHomeGuidingLines() {

  const header = document.getElementById("home-header");

  const topLeftPoint = [window.innerWidth/2 - header.clientWidth/2, window.innerHeight/2 - header.clientHeight/2];

  for (const svgElement of document.getElementsByClassName("home-guiding-line")) {
    const polygon = svgElement.children[0];
    polygon.setAttribute('points', `0,-60 -60,0 ${topLeftPoint[0]},${topLeftPoint[1]}`);
    svgElement.setAttribute('width', window.innerWidth/2);
    svgElement.setAttribute('height', window.innerHeight/2);
  }
}

function checkForMobile() {
  if (window.innerWidth < window.innerHeight) {
    $('#mobile').show();
    $('#desktop').hide();
    selectPage(activePage);
  }
  else {
    $('#mobile').hide();
    $('#desktop').show();
    selectPage(activePage);
  }
}

let isMobileNavSidePaneOpen = false;
function toggleMobileNavSidePane() {
  if (isMobileNavSidePaneOpen) {
    $('#hamburger-button').removeClass('hamburger-button-open');
    $('#hamburger-button').addClass('hamburger-button-closed');
  }
  else {
    $('#hamburger-button').addClass('hamburger-button-open');
    $('#hamburger-button').removeClass('hamburger-button-closed');
  }
  isMobileNavSidePaneOpen = !isMobileNavSidePaneOpen;
}

let skillCategoriesExpanded = {
  'languages': false,
  'front-end': false,
  'graphics': false,
  'other': false,
};
function toggleMobileSkillCategoryExpandContract(skill) {
  const downArrow = $(`#mobile-skill-${skill}-down-arrow`);
  const category = $(`#mobile-skill-${skill}-category`);
  if (skillCategoriesExpanded[skill]) {
    downArrow.removeClass('open')
    downArrow.addClass('closed');
    category.removeClass('open')
    category.addClass('closed');
  }
  else {
    downArrow.removeClass('closed')
    downArrow.addClass('open');
    category.removeClass('closed')
    category.addClass('open');
  }
  skillCategoriesExpanded[skill] = !skillCategoriesExpanded[skill];
  console.log(skill, skillCategoriesExpanded);
}

document.addEventListener("DOMContentLoaded", () => {
  selectPage('home');
  checkForMobile();
  updateHomeGuidingLines();
});

window.addEventListener('resize', () => {
  checkForMobile();
  updateHomeGuidingLines();
});
