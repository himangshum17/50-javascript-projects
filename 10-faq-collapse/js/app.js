const faqToggleBtns = document.querySelectorAll('.faq-container .faq button');
// const faqToggleBtn = document

faqToggleBtns.forEach(faqToggleBtn => {
  faqToggleBtn.addEventListener('click', () => {
    faqToggleBtns.forEach(function (faqToggleBtn) {
      faqToggleBtn.parentNode.classList.remove('active');
    });
    faqToggleBtn.parentNode.classList.add('active');
  });
});
