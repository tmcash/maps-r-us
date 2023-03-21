const router = require('express').Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


router.post('/send-email', (req, res) => {
  const { city, name, type, address } = req.body;

  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mapsrus6@gmail.com",
    pass: "kqkrmcknduhwjmnd"
  },
});

const mailOptions = {
  from: 'mapsrus6@gmail.com',
  to: req.body.email,
  subject: `Your Travel Itinerary for ${city}`,
  text: `Here are your travel plans when you visit ${city}! \n
        Activity Type: ${type}\n
        ${name} \n
        Address: ${address}`
};


transporter.sendMail(mailOptions, (error, info) => {
  console.log('Inside sendMail callback');
  if (error) {
    console.log(error);
    res.send('Error sending email');
  } else {
    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully');
  }
});
});

module.exports = router;
