const sequelize = require('../config/connection');
// const { User, Activity, City, Food, Hotel  } = require('../models');

// const userData = require('./userData.json');
// const activityData = require('./activityData.json');
// const cityData = require('./cityData.json');

const seedUser = require('./userData');
const seedCity = require('./cityData');
const seedActivity = require('./activityData');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await seedUser();
  await seedCity();
  await seedActivity();


  

  
  // const activities = await Activity.bulkCreate(activityData);
  // const cities = await City.bulkCreate(cityData);


  process.exit(0);
};

seedDatabase();