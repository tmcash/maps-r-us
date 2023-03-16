const sequelize = require('../config/connection');
const { User, Activity, City, Food, Hotel  } = require('../models');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const activities = await Activity.bulkCreate(activityData);
  const cities = await City.bulkCreate(cityData);
  const foods = await Food.bulkCreate(foodData);
  const hotels = await Hotel.bulkCreate(hotelData);


  process.exit(0);
};

seedDatabase();