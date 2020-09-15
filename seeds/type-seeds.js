const { Species_Type } = require('../models');

const typeData = [
  {
    type_name: "Tree"
  },
  {
    type_name: "Flower"
  },
  {
    type_name: "Shrub"
  },
  {
    type_name: "Cactus"
  }
];

const seedMyTypes = () => Species_Type.bulkCreate(typeData);

module.exports = seedMyTypes;