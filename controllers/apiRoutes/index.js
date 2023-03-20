const router = require('express').Router();
const loginRoutes = require('./login-routes');
const playlistRoutes = require('./playlist-routes');
const userRoutes = require('./userRoutes');
const { User } = require('../../models');

router.use('/', loginRoutes);
router.use('/', playlistRoutes);
router.use('/', userRoutes);

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/', async (req, res) => {
//   res.render('home', {
//     loggedIn: req.session.loggedIn,
//   });
// });

module.exports = router;
