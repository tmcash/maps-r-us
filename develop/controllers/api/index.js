const router = require('express').Router();
const userRoutes = require('./user-routes');
const hotelRoutes = require('./hotel-routes');
const activityRoutes = require('./activity-routes');

router.use('/users', userRoutes);
router.use('/hotel', hotelRoutes);
router.use('/activity', activityRoutes);

module.exports = router;