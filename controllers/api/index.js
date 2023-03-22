const router = require('express').Router();
const userRoutes = require('./user-routes');
const activityRoutes = require('./activity-routes');
const cityRoutes = require('./city-routes');


router.use('/users', userRoutes);
router.use('/activity', activityRoutes);
router.use('/city', cityRoutes);


module.exports = router;