const { Plant_Species } = require('../models');

const speciesData = [
  {
    botanical_name: 'Laurus Nobilis', 
    common_name: 'Bay Leaf', 
    type_id: 1, 
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
    additional_info: 'This is additioinal information about how to care for the plant ...',
  },
  {
    botanical_name: 'Monstera Deliciosa', 
    common_name: 'Monstera Swiss Cheese Plant', 
    type_id: 2, 
    hardiness_zones: '5-10',
    sun_tolerance: 'Part sun (3 to 6 hours morning sun', 
    drainage: 'Moist',
    water_requirements: 'Keep moist first year; 1x per week after',
    feeding_schedule: 'Beginning of spring and late fall.',
    growth_rate: 'Moderate',
    mature_width: 48,
    mature_height: 48,
    spacing: 60,
    depth: 48,
    when_to_plant: 'Spring',
    additional_info: 'This is additioinal information about how to care for this plant ...',
  },
];

const seedSpecies = () => Plant_Species.bulkCreate(speciesData);

module.exports = seedSpecies;