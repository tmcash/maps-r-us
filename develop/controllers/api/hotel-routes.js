const router = require('express').Router();
const { Hotel } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { name, city } = req.body;
        const hotel = await Hotel.create({ name, city });
        res.status(201).json(hotel);
    } catch (error) {
        console.error('Error saving hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/city/:cityId', async (req, res) => {
    try {
        const hotel = await Hotel.findAll({
        where: { city_id: req.params.cityId }
    });
    res.status(200).json(hotel);
    } catch (error) {
    console.error('Error retrieving hotels:', error);
    res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;