function progressSteps() {
  const progressEl = document.querySelector('.progress');
  const prevBtn = document.querySelector('#prev');
  const nextBtn = document.querySelector('#next');
  const circles = document.querySelectorAll('.circle');
  const contents = document.querySelectorAll('.content');
  let step = 1;
  nextBtn.addEventListener('click', function () {
    step++;
    if (step > circles.length) {
      step = circles.length;
    }
    updateSteps();
  });
  prevBtn.addEventListener('click', function () {
    step--;
    if (step < 1) {
      step = 1;
    }
    updateSteps();
  });

  function updateSteps() {
    circles.forEach(function (circle, i) {
      if (i < step) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
    contents.forEach(function (content, i) {
      if (i < step) {
        contents.forEach(function (content) {
          content.classList.remove('active');
        });
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    const actives = document.querySelectorAll('.circle.active');
    progressEl.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (step === 1) {
      prevBtn.disabled = true;
    } else if (step === circles.length) {
      nextBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }
  }
}

progressSteps();
