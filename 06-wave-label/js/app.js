function wavyLabels() {
  const labels = document.querySelectorAll('label');

  labels.forEach(function (label) {
    let labelText = label.textContent;
    let labelTextArr = labelText.split('');
    label.textContent = '';
    labelTextArr
      .map((letter, i) => {
        let spanEl = document.createElement('span');
        spanEl.style.transitionDelay = `${i * 48}ms`;
        spanEl.textContent = letter;
        label.append(spanEl);
      })
      .join('');
  });
}
wavyLabels();
