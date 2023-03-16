const router = require('express').Router();
const { Activity } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { name, city } = req.body;
        const activity = await Activity.create({ name, city });
        res.status(201).json(activity);
    } catch (error) {
        console.error('Error saving activity:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;