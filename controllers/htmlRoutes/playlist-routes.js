const router = require('express').Router();

router.get('/api/playlist', (req, res) => {
  try {
    console.info(`${req.method} request received to add a review`);
    // const songData = Song.findAll({});

    const { songName, artistName, albumArt } = req.body;
    console.log(songName, 'html routes');
    const postSongData = {
      songName,
      artistName,
      albumArt,
    };
    console.log(postSongData, 'html routes ln 59');
    // res.status(200).json(postSongData);
    res.render('playlist', {
      postSongData,
    });
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

module.exports = router;
