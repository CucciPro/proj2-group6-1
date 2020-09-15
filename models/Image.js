// make model for imges
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Image extends Model {}
Image.init(
    {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
    },
      image_file: {
        type: DataTypes.BLOB('long'),
        allowNull:false,

      },
      plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
      
  },{
    sequelize,
    modelName: 'Image'
  })
  
module.exports = Image;

    
