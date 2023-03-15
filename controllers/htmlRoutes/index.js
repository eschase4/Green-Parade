const axios = require('axios');
const router = require('express').Router();
const { authChecker } = require('../../utils/authChecker');

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});

// 2:02:00 in dan video
router.get('/search/:searchTerm', authChecker, async (req, res) => {
  // authChecker,
  const { searchTerm } = req.params;

  const options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/search`,
    params: { q: `${searchTerm}` },
    headers: {
      'X-RapidAPI-Key': 'ad5b30d7f0msh951a6816b6e5b25p1e1d8ejsn505eec47fad7',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  const deezerResponse = await axios.request(options);

  const tracks = deezerResponse.data.data.map((track) => ({
    id: track.id,
    songName: track.title,
    image: track.album.cover_medium,
    artistName: track.artist.name,
  }));

  console.log(tracks);
  res.render('search', {
    tracks,
  });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
