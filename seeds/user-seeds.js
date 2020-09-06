const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    user_name: 'Gwen',
    user_email: 'nnormansv+proj2.user01@gmail.com',
    user_pass : bcrypt.hashSync('9635', 10),
  },
  {
    user_name: 'Paulie',
    user_email: 'nnormansv+proj2.user02@gmail.com',
    user_pass: bcrypt.hashSync('k9h5', 10),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;