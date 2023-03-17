// const addToPlaylist = document.querySelector('#newSongData');
const addSongBtn = document.querySelectorAll('.addSongBtn');

async function newSong(e) {
  //   e.preventDefault();
  const card = e.target.closest('.card');
  const albumArt = card.querySelector('#albumArt').getAttribute('src');
  const songName = card.querySelector('#songName').textContent;
  const artistName = card.querySelector('#artistName').textContent;
  console.log(songName);
  const songObj = {
    albumArt,
    songName,
    artistName,
  };
  console.log(songObj);
}

addSongBtn.forEach((element) => {
  //   console.log(element);
  element.addEventListener('click', newSong);
});

// addSongBtn.addEventListener('click', newSong);
