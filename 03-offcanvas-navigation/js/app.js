function openNav() {
  const navigationEl = document.querySelector('#navigation');
  const togglenavigationBtn = document.querySelector('#togglenavigation');

  togglenavigationBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    navigationEl.classList.toggle('active');
  });
}

openNav();
