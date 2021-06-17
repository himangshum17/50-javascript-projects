function getKeycodes() {
  const wrapper = document.querySelector('#wrapper');
  window.addEventListener('keydown', function (event) {
    wrapper.textContent = '';
    const firstdivEl = document.createElement('div');
    const firstsmallEl = document.createElement('small');
    firstsmallEl.textContent = 'event.key';
    firstdivEl.classList.add('key');
    firstdivEl.textContent = `${event.code === '' ? 'Space' : event.code}`;
    firstdivEl.append(firstsmallEl);

    const seconddivEl = document.createElement('div');
    const secondsmallEl = document.createElement('small');
    secondsmallEl.textContent = 'event.keyCode';
    seconddivEl.classList.add('key');
    seconddivEl.textContent = event.keyCode;
    seconddivEl.append(secondsmallEl);

    const thirddivEl = document.createElement('div');
    const thirdsmallEl = document.createElement('small');
    thirdsmallEl.textContent = 'event.code';
    thirddivEl.classList.add('key');
    thirddivEl.textContent = event.code;
    thirddivEl.append(thirdsmallEl);

    wrapper.append(firstdivEl, seconddivEl, thirddivEl);
  });
}

getKeycodes();
