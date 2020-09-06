const { Plants } = require('../models');

const plantsData = [
  {
    user_id: 1, 
    species_id: 1, 
    identifier: '1st Bay Leaf Tree Along Back Wall', 
    acquired_date: TIMESTAMP('2019-05-23'),
    acquired_source: 'Lowe\s',
    acquired_origin: 'Civano Growers',
    acquired_width: 7,
    acquired_height: 10,
    acquired_additional_info: 'The tree has lots of bright green leaves and new growth.'
  },
  {
    user_id: 1, 
    species_id: 1, 
    identifier: '2nd Bay Leaf Tree Along Back Wall', 
    acquired_date: TIMESTAMP('2019-05-23'),
    acquired_source: 'Lowe\'s',
    acquired_origin: 'Civano Growers',
    acquired_width: 7,
    acquired_height: 10,
    acquired_additional_info: 'The tree has lots of bright green leaves but little new growth.'
  },
];

const seedMyPlants = () => Plants.bulkCreate(plantsData);

module.exports = seedMyPlants;