const User = require('./User');
const Plant_Species = require('./Plant_Species');
const My_Plants = require('./My_Plants');
const Plant_History = require('./Plant_History');

My_Plants.belongsTo(User, {
  foreignKey: 'user_id'
});

My_Plants.hasMany(Plant_History, {
  foreignKey: 'plant_id'
});

Plant_History.belongsTo(My_Plants, {
  foreignKey: 'plant_id'
});

module.exports = {
  User,
  Plant_Species,
  My_Plants,
  Plant_History
};