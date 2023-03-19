const { Song } = require('../models');

const SongData = [
  {
    songName: 'Flowers',
    artistName: 'Miley Cyrus',
    albumArt:
      'https://e-cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/250x250-000000-80-0-0.jpg',
  },
  {
    songName: 'TQG',
    artistName: 'SZA',
    albumArt:
      'https://e-cdns-images.dzcdn.net/images/cover/2395f7044f081465b2d0014721ed56b3/250x250-000000-80-0-0.jpg',
  },
  {
    songName: 'River',
    artistName: 'Miley Cyrus',
    albumArt:
      'https://e-cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/250x250-000000-80-0-0.jpg',
  },
];
const seedSong = () => Song.bulkCreate(SongData);

module.exports = seedSong;
