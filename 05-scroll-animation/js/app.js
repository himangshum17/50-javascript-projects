function scrollAnimation() {
  const allBoxes = document.querySelectorAll('.box');
  window.addEventListener('scroll', function () {
    const triggerBottom = (window.innerHeight / 5) * 4;
    allBoxes.forEach(function (item) {
      const boxTop = item.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  });
}
scrollAnimation();
