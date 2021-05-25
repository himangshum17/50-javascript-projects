function toggleSearch() {
  const searchEl = document.querySelector('.search');
  const searchInput = document.querySelector('#search-input');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', function () {
    searchEl.classList.toggle('active');
    searchInput.focus();
  });
}
toggleSearch();
