const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/signup', async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.email = newUser.email;
        req.session.loggedIn = true;
  
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// router.post('/signup', async (req, res) => {
//     try {
//     const dbUserData = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//     });

//     req.session.save(() => {
//         req.session.loggedIn = true;

//         res.status(200).json(dbUserData);
//     });
//     } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//     }
// });

// Login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!'});
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
      
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});




// router.post('/login', async (req, res) => {
//     try {
//     const dbUserData = await User.findOne({
//         where: {
//         email: req.body.email,
//     },
//     });

//     if (!dbUserData) {
//         res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//     return;
//     }

//     const validPassword = await dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//     res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//     return;
//     }

//     req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.loggedIn = true;

//     res
//         .status(200)
//         .json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//     } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//     }
// });

// Logout
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
