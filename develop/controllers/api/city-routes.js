const express = require('express');
const router = require("express").Router();
const { City, Activity, User } = require("../../models");

//to work with handlebars
router.get('/city', async (req, res) => {
  const cityData = await City.findAll();
  res.render('city', { cityData });
});

router.get("/", async (req, res) => {
  // includes its associated Products
  try {
    const newCity = await City.findAll({
      include: [
        {
          model: Activity,
          attributes: ["id", "name", 'type', 'address', 'city_id'],
        },
        {
            model: User,
            attributes: ['id']
        }
      ],
    });
   res.json(newCity);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    // finds one category by its `id` value
    // includes its associated Products
    try{
        const newCity = await City.findOne({
        where: {
            id: req.params.id
        },

        include: [
            {
                model: Activity,
                attributes: ["id", "name", 'type', 'address'],
            },
            {
                model: User,
                attributes: ['id']
            }
    ],
        });
        if (!newCity){
        res.status(404).json({ message: 'No city found with this id'});
        return;
        }
        res.json(newCity);

        } catch (err) {
        console.log(err);
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
