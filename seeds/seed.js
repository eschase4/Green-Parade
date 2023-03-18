const seqeulize = require('../config/connection');
const seedUsers = require('./userData.js');
const seedSong = require('./songData.js');
const seedPlaylist = require('./playlistData.js');

const seedAll = async () => {
  await seqeulize.sync({ force: true });
  await seedUsers();
  await seedSong();
  await seedPlaylist();
  process.exit(0);
};

seedAll();
