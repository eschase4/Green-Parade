const router = require('express').Router();
const { Song } = require('../../models');

router.post('/playlist', async (req, res) => {
  try {
    console.info(
      `${req.method} request received to add a new song to your playlist`
    );
    const postSongData = await Song.create({
      songId: req.body.id,
      songName: req.body.songName,
      artistName: req.body.artistName,
      albumArt: req.body.albumArt,
    });

    res.render('playlist', {
      postSongData,
    });
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

module.exports = router;
