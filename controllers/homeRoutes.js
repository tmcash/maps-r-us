const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth").default;

router.get("/", async (req, res) => {
  try {

    if (req.session.loggedIn) {
      res.render("search", {
        loggedIn: req.session.loggedIn
      });
      return;
    }
    res.redirect("/login");
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });



module.exports = router;
