const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Songs extends Model { }

Songs.init(
  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true 
    },

    songName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    artistName: {
      type: DataTypes.STRING,
      allowNull: false
    }
);

module.exports = Songs;