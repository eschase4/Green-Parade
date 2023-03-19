const router = require('express').Router();

router.get('/login', async (req, res) => {
  res.render('login');
});

// 2:02:00 in dan video

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
