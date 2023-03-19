const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {

    const temp = true;
    if (temp) {
      res.render("search", {
        logged_in: req.session.logged_in
      });
      return;
    }
    res.redirect("/login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/itinerary", async (req, res) => {
  try {
    // const cityData = await City.findAll();
    const temp = true;
    if (temp) {
      res.render("itinerary", {
        logged_in: req.session.logged_in
      });
      return;
    }
    res.redirect("/login");
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/email", async (req, res) => {
  try {
    // const userData = await User.findAll({
    // // attributes: { exclude: ['password'] },
    // // order: [['name', 'ASC']],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));
    if (req.session.logged_in) {
      res.render("email", {
        logged_in: req.session.logged_in
      });
    }
    res.redirect("/login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
