const router = require('express').Router();
const loginRoutes = require('./login-routes');
const playlistRoutes = require('./playlist-routes');
const searchRoutes = require('./search-routes');

router.use('/', loginRoutes);
router.use('/', playlistRoutes);
router.use('/', searchRoutes);

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
