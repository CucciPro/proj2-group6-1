const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant_Species extends Model {}

Plant_Species.init(
  {
    species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    botanical_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    common_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },  
    hardiness_zones: DataTypes.STRING,
    sun_tolerance: DataTypes.STRING, 
    drainage: DataTypes.STRING,
    water_requirements: DataTypes.STRING,
    feeding_schedule: DataTypes.STRING,
    growth_rate: DataTypes.STRING,
    mature_width: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        }
    },
    mature_height: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        }
    },
    spacing: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        }
    },
    depth: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        }
    },
    when_to_plant: DataTypes.STRING,
    additional_info: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'species'
  }
);

module.exports = Plant_Species;
