const router = require('express').Router();
const { Food } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { name, city } = req.body;
        const food = await Food.create({ name, city });
        res.status(201).json(food);
    } catch (error) {
        console.error('Error saving food:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/city/:cityId', async (req, res) => {
    try {
        const food = await Food.findAll({
        where: { city_id: req.params.cityId }
    });
    res.status(200).json(food);
    } catch (error) {
    console.error('Error retrieving restaurants:', error);
    res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;