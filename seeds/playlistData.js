const { Playlist } = require('../models');

const playlistData = [
  {
    user_id: 1,
    song_ids: 1,
  },
  {
    user_id: 2,
    song_ids: 2,
  },
  {
    user_id: 3,
    song_ids: 3,
  },
];
const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;
