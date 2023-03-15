const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Songs extends Model {}

Songs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    songName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'songs',
  }
);

module.exports = Songs;
