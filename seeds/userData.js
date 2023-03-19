const { User } = require('../models');

const userData = [
  {
    username: 'number1',
    email: 'number1@gmail.com',
    password: 'number1',
  },
  {
    username: 'number2',
    email: 'number2@gmail.com',
    password: 'number2',
  },
  {
    username: 'number3',
    email: 'number2@gmail.com',
    password: 'number3',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
