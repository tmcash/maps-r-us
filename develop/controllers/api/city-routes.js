const router = require('express').Router();
const { City } = require('../../models');

router.post('/', async (req, res) => {

try {
    const newCity = await City.create({
    ...req.body,
    user_id: req.session.user_id,
    });

    res.status(200).json(newCity);
} catch (err) {
    res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
try {
    const citytData = awaitCity.destroy({
    where: {
        id: req.params.id,
        user_id: req.session.user_id,
    },
    });

    if (!citytData) {
    res.status(404).json({ message: 'No city found with this id!' });
    return;

    }

    res.status(200).json(citytData);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;