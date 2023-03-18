const User = require('./User');
const Activity = require('./activity');
const City = require('./city');
const Food = require('./food');
const Hotel = require('./hotel');

Activity.belongsTo(City, {
    foreignKey: 'city_id',
  });




module.exports = { User, Activity, City, Food, Hotel };

