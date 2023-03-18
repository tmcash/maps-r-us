const User = require('./User');
const Activity = require('./activity');
const City = require('./city');
const Food = require('./food');
const Hotel = require('./hotel');

Activity.hasOne(City, {
    foreignKey: 'city_id',
  });


User.hasMany(Activity, {
    foreignKey: 'user_id'
});


module.exports = { User, Activity, City, Food, Hotel };

