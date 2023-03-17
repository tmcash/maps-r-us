const router = require('express').Router();
const userRoutes = require('./user-routes');
const hotelRoutes = require('./hotel-routes');
const activityRoutes = require('./activity-routes');
const foodRoutes = require('./food-routes');
const cityRoutes = require('./city-routes');

router.use('/users', userRoutes);
router.use('/hotel', hotelRoutes);
router.use('/activity', activityRoutes);
router.use('/food', foodRoutes);
router.use('/city', cityRoutes);

module.exports = router;