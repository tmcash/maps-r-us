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


// GET a single location
router.get("/:id", async (req, res) => {
    try {
      const dbCityData = await City.findByPk(req.params.id,{
        include: [{ model: User, through: Activity, as: 'city_users' }]
      });
      if (!dbCityData) {
        res.status(404).json({ message: 'No location found with this id!' });
        return;
      }
  
      res.status(200).json(dbCityData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.post("/", async (req, res) => {
    try {
      const newCity = await City.create({
        ...req.body,
        user_id: req.session.user_id
      });
  
      res.status(200).json(newCity);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const citytData = await City.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!citytData) {
        res.status(404).json({ message: "No city found with this id!" });
        return;
      }
  
      res.status(200).json(citytData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;

