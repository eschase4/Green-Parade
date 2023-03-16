const router = require('express').Router();
const Song = require('../../models');

router.get('/', async (req, res) => {});

router.post('/playlist', async (req, res) => {
  try {
    const songData = Song.findAll({});

    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});
