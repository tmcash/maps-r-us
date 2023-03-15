const router = require('express').Router();
const { Hotel } = require('../../models');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

app.post('/hotels', async (req, res) => {
    try {
        const { name, city, address } = req.body;
        const hotel = await Hotel.create({ name, city, address });
        res.status(201).json(hotel);
    } catch (error) {
        console.error('Error saving hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;