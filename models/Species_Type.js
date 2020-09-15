const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Species_Type extends Model {}

Species_Type.init(
    {
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'species_type'
    }
);
    
    module.exports = Species_Type;