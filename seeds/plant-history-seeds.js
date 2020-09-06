const { Plant_History } = require('../models');

const plantHistoryData = [
  {
    plant_id: 1, 
    dtstamp: '2019-05-24  09:20:00', 
    rec_type: 'General', 
    loc: 'Outdoors',
    in_ground: 0,
    direct_sunlight_hours: 8,
    watering_schedule: 'Morning',
    additional_info: 'Planted.  Can\'t wait to cook with my bay leaves.'
  },
  {
    plant_id: 1, 
    dtstamp: '2019-06-08 09:20:00', 
    rec_type: 'General', 
    loc: 'Outdoors',
    in_ground: 0,
    direct_sunlight_hours: 8,
    watering_schedule: 'Morning & Afternoon',
    additional_info: 'Most leaves have turned brown.  Adding additional watering in the afteroon, at least until temperatures drop back to below 93 degrees.'
  },
  {
    plant_id: 1, 
    dtstamp: '2019-09-15 09:20:00', 
    rec_type: 'Feeding', 
    loc: 'Outdoors',
    in_ground: 0,
    direct_sunlight_hours: 8,
    watering_schedule: 'Morning',
    additional_info: 'Fed 1/4 cup of x brand plant food.'
  },
  {
    plant_id: 2, 
    dtstamp: '2019-05-24 09:20:00', 
    rec_type: 'General', 
    loc: 'Outdoors',
    in_ground: 0,
    direct_sunlight_hours: 8,
    watering_schedule: 'Morning',
    additional_info: 'Planted.  Can\'t wait to cook with my bay leaves.'
  },
  {
    plant_id: 2, 
    dtstamp: '2019-06-08 09:20:00', 
    rec_type: 'General', 
    loc: 'Outdoors',
    in_ground: 0,
    direct_sunlight_hours: 8,
    watering_schedule: 'Morning & Afternoon',
    additional_info: 'Some leaves are starting to turn brown.  Adding additional watering in the afteroon, at least until temperatures drop back to below 93 degrees.'
  },
  {
    plant_id: 2, 
    dtstamp: '2019-09-15 09:20:00', 
    rec_type: 'Feeding', 
    loc: 'Outdoors',
    in_ground: 0,
    direct_sunlight_hours: 8,
    watering_schedule: 'Morning',
    additional_info: 'Fed 1/2 cup of x brand plant food.'
  },
];

const seedPlantHistory = () => Plant_History.bulkCreate(plantHistoryData);

module.exports = seedPlantHistory;