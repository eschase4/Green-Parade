const router = require('express').Router();
const { Song } = require('../../models');
const { authChecker } = require('../../utils/authChecker');

router.get('/playlist', authChecker, async (req, res) => {
  try {
    const dbPlaylistData = await Song.findAll();
    const tracks = dbPlaylistData.map((track) => ({
      id: track.id,
      songName: track.songName,
      albumArt: track.albumArt,
      artistName: track.artistName,
    }));

    res.render('playlist', {
      tracks,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

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
    console.log(postSongData);
    res.render('playlist', {
      postSongData,
    });
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

router.delete('/playlist/:id', async (req, res) => {
  try {
    console.info(
      `${req.method} request received to delete song from your playlist`
    );
    console.log(req.params);
    const deleteSongData = await Song.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteSongData) {
      res.status(404).json({ message: 'No song found with this id!' });
      return;
    }
    res.status(200).json(deleteSongData);
    // window.location.replace('/playlist');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
