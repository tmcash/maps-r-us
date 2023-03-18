const { Activity } = require('../models');

const activityData = [
  {
    name: 'Santa Fe Plaza',
    type: 'Recreation',
    address: 'Lincoln Ave',
    city_id: 2,
    user_id: 1,
  },
  {
    name: 'Palace of the Governors',
    type: 'Sights & Museums',
    address: '105 W Palace Ave',
    city_id: 2,
    user_id: 1,
  },
  {
    name: 'Shrine of Our Lady of Guadalupe',
    type: 'Religious Place',
    address: '417 Agua Fria St',
    city_id: 2,
    user_id: 1,
  },
  {
    name: 'Loretto Chapel',
    type: 'Sights & Museums',
    address: '211 Old Santa Fe Trl',
    city_id: 2,
    user_id: 1,
  },
];

const seedActivity = () => Activity.bulkCreate(activityData);

module.exports = seedActivity;
