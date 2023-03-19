// const addToPlaylist = document.querySelector('#newSongData');
const removeSongBtn = document.querySelectorAll('.removeSongBtn');

async function deleteSong(e) {
  //   e.preventDefault();
  const card = e.target.closest('.card');
  const albumArt = card.querySelector('#albumArt').getAttribute('src');
  const songName = card.querySelector('#songName').textContent;
  const id = card.querySelector('#id').textContent;
  const artistName = card.querySelector('#artistName').textContent;
  const songObj = {
    id,
    albumArt,
    songName,
    artistName,
  };
  console.log(card);
  console.log(songObj, 'removeSong.js');
  fetch(`/playlist/${songObj.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(songObj),
  }).then(window.location.reload());
}

removeSongBtn.forEach((element) => {
  element.addEventListener('click', deleteSong);
});

module.exports = deleteSong;
