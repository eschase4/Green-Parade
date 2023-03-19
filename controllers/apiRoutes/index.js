const router = require('express').Router();
const loginRoutes = require('./login-routes');
const playlistRoutes = require('./playlist-routes');
const userRoutes = require('./userRoutes');

router.use('/', loginRoutes);
router.use('/', playlistRoutes);
router.use('/', userRoutes);

module.exports = router;
