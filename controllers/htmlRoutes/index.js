const axios = require('axios');
const router = require('express').Router();
// const { authChecker } = require('../../utils/authChecker');

// I BROKE THE AUTH, MAKE SURE TO COMMENT IT BACK IN

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});

// 2:02:00 in dan video, and/or check github to see how dan put the authChecker in
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

  const deezerResponse = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });

  const artistObj = {
    id: deezerResponse.data.id,
    name: deezerResponse.data.artist.name,
    image: deezerResponse.data.artist.picture,
    type: deezerResponse.type,
  };
  console.log(artistObj, 'hEY IT ME');
  res.render('search', {
    artistObj,
  });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
