const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Plants extends Model {}

Plants.init(
  {
    plantid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    botanical_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    common_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plant_type: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    acquired_date: DataTypes.DATETIME,
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
    acquired_additional_info: DataTypes.TEXT, 
    care_hardiness_zones: DataTypes.STRING,
    care_sun_tolerance: DataTypes.STRING, 
    care_drainage: DataTypes.STRING,
    care_water_requirements: DataTypes.STRING,
    care_feeding_schedule: DataTypes.STRING,
    care_growth_rate: DataTypes.STRING,
    care_mature_width: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    care_mature_height: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    care_spacing: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    care_depth: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
    },
    care_when_to_plant: DataTypes.STRING,
    care_additional_info: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'plants'
  }
);

module.exports = Plants;
