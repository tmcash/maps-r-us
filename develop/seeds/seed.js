const sequelize = require('../config/connection');
const { City, User, Activity } = require('../models');

const SeedActivityData = require('./activityData.json');
const seedUser = require('./userData');
const seedCity = require('./cityData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedCity();

  const activitySeed = await Activity.bulkCreate(SeedActivityData);

  process.exit(0);
};

seedDatabase();
