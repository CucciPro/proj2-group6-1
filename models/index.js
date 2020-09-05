const User = require('./User');
const Plants = require('./Plants');
const Plant_History = require('./Plant_History');

Plants.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Plants.hasMany(Plant_History, {
  foreignKey: 'plantId',
  onDelete: 'CASCADE'
});

Plant_History.belongsTo(Plants, {
  foreignKey: 'plantId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Plants,
  Plant_History
};