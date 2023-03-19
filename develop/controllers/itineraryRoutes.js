const router = require("express").Router();
const { City, Activity, User } = require("../models");

router.get("/", async (req, res) => {
  // We find all cities in the db and set the data equal to cityData
  const cityData = await City.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over cityData and then add .get({ plain: true }) each object to serialize it.
  const cities = cityData.map((city) => city.get({ plain: true }));
  // We render the template, 'all', passing in cities, a new array of serialized objects.
  res.render("itinerary", { cities });
});

// router.get('/', async (req, res) => {
//     try {
//         const cityData = await City.findAll();
//         const cities = cityData.map((city) => city.get({ plain: true }));
//         res.render('itinerary', { cities });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });


module.exports = router;

