const router = require("express").Router();
const { City, Activity, User } = require("../../models");

// GET all locations
router.get('/', async (req, res) => {
  try {
    const dbCityData = await City.findAll();
    res.status(200).json(dbCityData);
  } catch (err) {
    res.status(500).json(err);
  }
});



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
