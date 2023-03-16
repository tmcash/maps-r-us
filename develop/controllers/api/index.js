const router = require('express').Router();
const userRoutes = require('./user-routes');
const hotelRoutes = require('./hotel-routes');

router.use('/users', userRoutes);
router.use('/hotel', hotelRoutes);

module.exports = router;