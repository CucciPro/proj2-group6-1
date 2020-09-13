const User = require('./User');
const Plant_Species = require('./Plant_Species');
const My_Plants = require('./My_Plants');
const Plant_History = require('./Plant_History');

My_Plants.belongsTo(User, {
  foreignKey: 'userId'
});

My_Plants.hasMany(Plant_History, {
  foreignKey: 'plantId'
});

Plant_History.belongsTo(My_Plants, {
  foreignKey: 'plantId'
});

module.exports = {
  User,
  Plant_Species,
  My_Plants,
  Plant_History
};