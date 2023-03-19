const router = require('express').Router();
const { Song } = require('../../models');

router.post('/playlist', async (req, res) => {
  try {
    console.info(
      `${req.method} request received to add a new song to your playlist`
    );
    // const songData = Song.findAll({});
    // const { songName, artistName, albumArt } = req.body;
    const postSongData = await Song.create({
      songName: req.body.songName,
      artistName: req.body.artistName,
      albumArt: req.body.albumArt,
    });
    console.log(postSongData);
    // res.render('playlist', {
    //   postSongData,
    // });
    res.status(200).json(postSongData);
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

module.exports = router;
