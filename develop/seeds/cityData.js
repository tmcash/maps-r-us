const { City } = require('../models');

const cityData = [
  {
    id: 1,
    name: 'Charleston',
  },
  {
    id: 2,
    name: 'Santa Fe',
  },
  {
    id: 3,
    name: 'Savannah',
  },
  {
    id: 4,
    name: 'New Orleans',
  },
];

const seedCity = () => City.bulkCreate(cityData);

module.exports = seedCity;
