const Playlist = require('./Playlist');
const User = require('./User');
const Song = require('./Song');

User.hasMany(Playlist, {
  foreignKey: 'playlist_id',
});

Playlist.hasMany(Song, {
  foreignKey: 'song_id',
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

Song.belongsToMany(User, {
  through: {
    model: Playlist,
  },
});
module.exports = User;
