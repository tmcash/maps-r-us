const router = require("express").Router();
const { City, Activity, User } = require("../models");


router.get("/", async (req, res) => {
  // We find all activities in the db and set the data equal to activityData
  const activityData = await Activity.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over activityData and then add .get({ plain: true }) each object to serialize it.
  const activities = activityData.map((activity) => activity.get({ plain: true }));
  console.log(activities);
  // We render the template, 'all', passing in actitivities, a new array of serialized objects.
  res.render("itinerary", { activities });
});


  module.exports = router;

