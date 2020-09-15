const User = require('./User');
const Plant_Species = require('./Plant_Species');
const My_Plants = require('./My_Plants');
const Plant_History = require('./Plant_History');
const Image = require('./Image')

My_Plants.belongsTo(User, {
  foreignKey: 'user_id'
});

My_Plants.hasMany(Plant_History, {
  foreignKey: 'plant_id'
});
My_Plants.hasMany(Image, {
  foreignKey: 'plant_id',
  onDelete: 'CASCADE'
});

Plant_History.belongsTo(My_Plants, {
  foreignKey: 'plant_id'
});

module.exports = {
  User,
  Plant_Species,
  My_Plants,
  Plant_History,
  Image
};