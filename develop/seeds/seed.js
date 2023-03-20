const sequelize = require('../config/connection');
const { City, User, Activity } = require('../models');
const SeedActivityData = require('./activityData.json');
const SeedUserData = require('./userData.json');
const SeedCityData = require('./cityData.json');
// const seedUser = require('./userData');
// const seedCity = require('./cityData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await seedUser();
  // await seedCity();

  const userSeed = await User.bulkCreate(SeedUserData);
  const citySeed = await City.bulkCreate(SeedCityData);
  const activitySeed = await Activity.bulkCreate(SeedActivityData);

  process.exit(0);
};

seedDatabase();
