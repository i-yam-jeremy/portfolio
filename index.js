const pages = ['home', 'about-me', 'skills', 'projects'];

function selectPage(id) {
  for (const page of pages) {
    if (page === id) {
      $('#' + page).show();
    }
    else {
      $('#' + page).hide();
    }
  }
}

function updateHomeGuidingLines() {

  const header = document.getElementById("home-header");

  const topLeftPoint = [window.innerWidth/2 - header.clientWidth/2, window.innerHeight/2 - header.clientHeight/2];

  for (const svgElement of document.getElementsByClassName("home-guiding-line")) {
    const polygon = svgElement.children[0];
    polygon.setAttribute('points', `0,0 ${topLeftPoint[0] + 20},${topLeftPoint[1]} ${topLeftPoint[0]},${topLeftPoint[1] + 20}`);
    svgElement.setAttribute('width', window.innerWidth/2);
    svgElement.setAttribute('height', window.innerHeight/2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  selectPage('home');
  updateHomeGuidingLines();
});

window.addEventListener('resize', () => {
  updateHomeGuidingLines();
});
