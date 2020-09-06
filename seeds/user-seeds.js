const { User } = require('../models');

const userData = [
  {
    user_name: 'Gwen',
    user_email: 'nnormansv+proj2.user01@gmail.com',
    user_pass: '9635',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;