const { Song } = require('../models');

const SongData = [
  {
    songName: 'Flowers',
    artistName: 'Miley Cyrus',
  },
  {
    songName: 'TQG',
    artistName: 'SZA',
  },
  {
    songName: 'River',
    artistName: 'Miley Cyrus',
  },
];
const seedSong = () => Song.bulkCreate(SongData);

module.exports = seedSong;
