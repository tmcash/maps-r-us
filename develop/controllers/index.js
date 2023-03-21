const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const itineraryRoutes = require('./itineraryRoutes');
const emailRoutes = require('./emailRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/itinerary', itineraryRoutes);
router.use('/email', emailRoutes);

module.exports = router;