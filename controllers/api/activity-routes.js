const router = require('express').Router();
const { Activity } = require('../../models');



router.post('/', async (req, res) => {
    try {
        // const { name, type, address, to_do, } = req.body;
        // const activity = await Activity.create({ name, type, address, to_do });
       console.log(req.body);
        const activityData = await Activity.create(req.body);
        res.status(201).json(activityData);
    } catch (error) {
        console.error('Error saving activity:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Get route works in insomnia if you go to /api/activity/city/2
router.get('/city/:cityId', async (req, res) => {
    try {
        const activities = await Activity.findAll({
        where: { city_id: req.params.cityId }
    });
    res.status(200).json(activities);
    } catch (error) {
    console.error('Error retrieving activities:', error);
    res.status(500).json({ message: 'Internal server error' });
    }
});





module.exports = router;