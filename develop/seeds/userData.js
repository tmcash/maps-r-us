const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'Erin',
    email: 'erin@erin.com',
    password: '12345678',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;