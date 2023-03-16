// const addToPlaylist = document.querySelector('#newSongData');
const addSongBtn = document.querySelector('#addSongBtn');

async function newSong(e) {
  e.preventDefault();
  console.log('hello');
  const songObj = {
    albumArt: document.querySelector('#albumArt').value,
    songName: document.querySelector('#songName').value.trim(),
    artistName: document.querySelector('#artistName').value.trim(),
  };
  console.log(songObj);
}

addSongBtn.addEventListener('click', newSong);
