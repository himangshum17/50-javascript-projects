function soundBoard() {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const containerel = document.querySelector('.container');

  sounds.forEach(function (sound) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = sound;
    button.addEventListener('click', function () {
      stopSounds();
      document.getElementById(sound).play();
    });
    containerel.append(button);
  });

  function stopSounds() {
    sounds.forEach(function (sound) {
      document.getElementById(sound).pause();
      document.getElementById(sound).currentTime = 0;
    });
  }
}

soundBoard();
