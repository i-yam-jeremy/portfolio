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

document.addEventListener("DOMContentLoaded", () => {
  selectPage('home');
});
