const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class My_Plants extends Model {}

My_Plants.init(
  {
    plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [100]
      }
    },
    acquired_date: DataTypes.DATE,
    acquired_source: DataTypes.STRING,
    acquired_origin: DataTypes.STRING,
    acquired_width: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    acquired_height: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    acquired_additional_info: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'my_plants'
  }
);

module.exports = My_Plants;
