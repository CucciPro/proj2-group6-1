const seedUsers = require('./user-seeds');
const seedSpecies = require('./species-seeds');
const seedMyPlants = require('./my-plants-seeds');
const seedPlantHistory = require('./plant-history-seeds');
const seedMyTypes = require('./type-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedSpecies();
  console.log('\n----- SPECIES SEEDED -----\n');

  await seedMyPlants();
  console.log('\n----- MY PLANTS SEEDED -----\n');

  await seedPlantHistory();
  console.log('\n----- PLANT HISTORY SEEDED -----\n');

  await seedMyTypes();
  console.log('\n----- PLANT TYPES SEEDED -----\n');

  

  process.exit(0);
};

seedAll();