const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const itineraryRoutes = require('./itineraryRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use('/itinerary', itineraryRoutes);

module.exports = router;