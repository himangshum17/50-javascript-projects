const tagsEl = document.querySelector('#tags');
const textAreaEl = document.querySelector('textarea');
const reloadBtn = document.querySelector('.reload');

// focusing the textarea
textAreaEl.focus();

// createing the tags
const createTags = input => {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());
  tagsEl.innerText = '';
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    const delBtn = document.createElement('button');
    tagEl.classList.add('tag');
    tagEl.textContent = tag;
    delBtn.classList.add('delete');
    delBtn.textContent = 'X';
    tagEl.append(delBtn);
    tagsEl.append(tagEl);
  });
};

// Highlighting the tags
const hightLightTags = tag => {
  tag.classList.add('highlight');
};

// Unhighlighting the tags
const unHightLightTags = tag => {
  tag.classList.remove('highlight');
};

// Pick Random Tags
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

// Selecting the random tags
const randomTagsSelect = callback => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    hightLightTags(randomTag);

    setTimeout(() => {
      unHightLightTags(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      hightLightTags(randomTag);
      party.confetti(randomTag);
      setTimeout(() => {
        callback();
      }, 2000);
    }, 100);
  }, times * 100);
};

const reloadBtnHandler = () => {
  reloadBtn.classList.add('visible');
};
reloadBtn.addEventListener('click', function () {
  tagsEl.innerText = '';
  setTimeout(() => {
    this.classList.remove('visible');
  }, 200);
});

// eventlisting on textarea
textAreaEl.addEventListener('keyup', e => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomTagsSelect(reloadBtnHandler);
  }
});
