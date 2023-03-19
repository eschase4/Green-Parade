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
      songId: req.body.id,
      songName: req.body.songName,
      artistName: req.body.artistName,
      albumArt: req.body.albumArt,
    });
    console.log(postSongData);
    res.render('playlist', {
      postSongData,
    });
    // res.status(200).json(postSongData);
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

// router.delete('/playlist/:id', async (req, res) => {
//   try {
//     console.info(
//       `${req.method} request received to delete song from your playlist`
//     );
//     console.log(req.params);
//     const deleteSongData = await Song.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!deleteSongData) {
//       res.status(404).json({ message: 'No song found with this id!' });
//       return;
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
