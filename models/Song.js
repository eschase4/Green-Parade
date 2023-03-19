const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    songName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    albumArt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;
