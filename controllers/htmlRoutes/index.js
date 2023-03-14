const axios = require('axios');
const router = require('express').Router();
// const { authChecker } = require('../../utils/authChecker');

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});

// 2:02:00 in dan video
router.get('/search/:searchTerm', async (req, res) => {
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
  // .then((response) => response.data)
  // .catch((error) => {
  // console.error(error);
  // });
  // if (deezerResponse.data.data.type === 'track') {
  const tracks = deezerResponse.data.data.map((track) => ({
    id: track.id,
    songname: track.title,
    image: track.artist.picture,
    artistName: track.artist.name,
  }));

  // const tracks = deezerResponse.map((track) => ({
  //   id: track.id,
  //   songname: track.title,
  //   image: track.artist.picture,
  //   artistName: track.artist.name,
  // }));

  // const trackObj = {};
  console.log(tracks, 'hEY IT ME');
  res.render('search', {
    tracks,
  });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
