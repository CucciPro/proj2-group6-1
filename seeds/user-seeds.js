const { User } = require('../models');

const userData = [
  {
    user_name: 'Gwen',
    user_email: 'nnormansv+proj2.user01@gmail.com',
    user_pass: '9635',
  },
  {
    user_name: 'Paulie',
    user_email: 'nnormansv+proj2.user02@gmail.com',
    user_pass: 'k9h5',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;