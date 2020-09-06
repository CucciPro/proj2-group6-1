const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant_History extends Model {}

Plant_History.init(
  {
    history_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dtstamp: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }, 
    rec_type: DataTypes.STRING, 
    loc: DataTypes.STRING,
    in_ground: DataTypes.BOOLEAN,
    direct_sunlight_hours: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    watering_schedule: DataTypes.STRING,
    additional_info: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'plant_history'
  }
);

module.exports = Plant_History;
