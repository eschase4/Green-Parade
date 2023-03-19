const router = require('express').Router();
const { Playlist, Song } = require('../../models');

router.get('/playlist', async (req, res) => {
  try {
    // console.info(`${req.method} request received to add a review`);
    // // const songData = Song.findAll({});

    // const { songName, artistName, albumArt } = req.body;
    // console.log(songName, 'html routes');
    // const postSongData = {
    //   songName,
    //   artistName,
    //   albumArt,
    // };
    // console.log(postSongData, 'html routes ln 59');
    // // res.status(200).json(postSongData);
    // res.render('playlist', {
    //   postSongData,
    // });
    const dbPlaylistData = await Song.findAll({
      // include: [
      //   {
      //     model: Song,
      //   },
      // ],
    });
    console.log(dbPlaylistData, 'api/playlistroutes');
    // res.status(200).json(dbPlaylistData);
    const tracks = dbPlaylistData.map((track) => ({
      id: track.id,
      songName: track.songName,
      albumArt: track.albumArt,
      artistName: track.artistName,
    }));

    res.render('playlist', {
      tracks,
    });
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

module.exports = router;
