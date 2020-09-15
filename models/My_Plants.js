const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class My_Plants extends Model {}

//console.log('='.repeat(50) + '\n models/my_plants.js : line 6 \n' + '='.repeat(50));

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
      //commented out because post failed when this was present
      //validate: {
          //len: [100]
      //}
    },
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
