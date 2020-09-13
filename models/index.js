const User = require('./User');
const Species = require('./Plant_Species');
const My_Plants = require('./My_Plants');
const Plant_History = require('./Plant_History');
const Image = require('./Image')

My_Plants.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

My_Plants.hasMany(Plant_History, {
  foreignKey: 'plantId',
  onDelete: 'CASCADE'
});
My_Plants.hasMany(Image, {
  foreignKey: 'plant_id',
  onDelete: 'CASCADE'
});

Plant_History.belongsTo(My_Plants, {
  foreignKey: 'plantId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Species,
  My_Plants,
  Plant_History,
  Image
};