const router = require('express').Router();
const loginRoutes = require('./login-routes');
const playlistRoutes = require('./playlist-routes');
const searchRoutes = require('./search-routes');

router.use('/', loginRoutes);
router.use('/', playlistRoutes);
router.use('/', searchRoutes);

module.exports = router;
