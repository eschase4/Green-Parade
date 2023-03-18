const router = require('express').Router();
const Song = require('../../models');

router.post('/playlist', async (req, res) => {
  try {
    console.info(`${req.method} request received to add a review`);
    // const songData = Song.findAll({});
    const { songName, artistName, albumArt } = req.body;
    const postSongData = {
      songName,
      artistName,
      albumArt,
    };
    console.log(postSongData);
    // res.status(200).json(songData);
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

// module.exports = router;
