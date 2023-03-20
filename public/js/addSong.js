// const addToPlaylist = document.querySelector('#newSongData');
const addSongBtn = document.querySelectorAll('.addSongBtn');

async function newSong(e) {
  //   e.preventDefault();
  const card = e.target.closest('.card');
  const albumArt = card.querySelector('#albumArt').getAttribute('src');
  const songName = card.querySelector('#songName').textContent;
  const artistName = card.querySelector('#artistName').textContent;
  const songObj = {
    albumArt,
    songName,
    artistName,
  };
  console.log(songObj, 'addSong.js');
  fetch('/playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(songObj),
  });
  function revealCheck() {
    const x = card.querySelector('#myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    }
  }
  revealCheck();
}

addSongBtn.forEach((element) => {
  element.addEventListener('click', newSong);
});

module.exports = newSong;
