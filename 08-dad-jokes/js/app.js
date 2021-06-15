function jokes() {
  const jokesEl = document.querySelector('#joke');
  const jokesBtn = document.querySelector('#jokebtn');

  jokesBtn.addEventListener('click', generateJokes);

  async function generateJokes() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch('https://icanhazdadjoke.com/', config);
      const data = await response.json();
      jokesEl.textContent = data.joke;
    } catch (error) {
      console.error(error);
    }
  }
  generateJokes();
}

jokes();
