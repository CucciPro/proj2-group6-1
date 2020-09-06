const { Species } = require('../models');

const speciesData = [
  {
    botanical_name: 'Laurus Nobilis', 
    common_name: 'Bay Leaf', 
    plant_type: 'Tree', 
    hardiness_zones: '10-12',
    sun_tolerance: 'Full sun : 6 hours+ of direct sunlight.  Partial sun : 3-6 hours of sunlight.', 
    drainage: 'Well drained',
    water_requirements: 'Once established, water occasionally; more in extreme heat or containers.',
    feeding_schedule: 'Beginning of spring and late fall.',
    growth_rate: 'Moderate',
    mature_width: 60,
    mature_height: 300,
    spacing: 120,
    depth: 48,
    when_to_plant: 'Spring',
    additional_info: 'This is additioinal information about how to care for the plant ...'
  },
];

const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;