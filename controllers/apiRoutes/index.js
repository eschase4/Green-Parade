const router = require('express').Router();

const { User, Song } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const dbUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUser) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const isValidPassword = await dbUser.comparePassword(req.body.password);

    if (!isValidPassword) {
      return res.status(404).json({ message: 'Incorrect Password!' });
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      return res
        .status(200)
        .json({ message: 'You have logged in succesfully!' });
    });
  } catch (error) {
    return res.status(500).json({ message: 'There was a problem logging in!' });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const dbUser = await User.create(req.body);
    const plainUser = dbUser.get({ plain: true });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(201).json(plainUser);
    });
  } catch (error) {
    res.status(500).json({ message: 'There was an error signing up!' });
  }
});

// /api/playlist
router.post('/playlist', async (req, res) => {
  try {
    console.info(`${req.method} request received to add a review`);
    const songData = Song.findAll({});
    console.log('hello');
    res.status(200).json(songData);
  } catch (err) {
    console.log('hello, but in error form');
    res.status(500).json(err);
  }
});

module.exports = router;
