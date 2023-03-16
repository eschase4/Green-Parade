const router = require('express').Router();
const Song = require('../../models');

const addSong = document.getElementById('#addSongBtn');
console.log(addSong);
router.get('/', async (req, res) => {});

addSong.addEventListener('click', () => {
  console.log('event listener works');
  router.post('/playlist', async (req, res) => {
    try {
      const songData = Song.findAll({});
      console.log('hello');
      res.status(200).json(songData);
    } catch (err) {
      console.log('hello, but in error form');
      res.status(500).json(err);
    }
  });
});

module.exports = router;
