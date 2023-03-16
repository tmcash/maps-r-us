const router = require('express').Router();
const { City } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { name, city } = req.body;
        const cityName = await City.create({ name, city });
        res.status(201).json(cityName);
    } catch (error) {
        console.error('Error saving city:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;