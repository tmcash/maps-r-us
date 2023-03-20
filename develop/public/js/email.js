//email script
var nodemailer = require("nodemailer");




var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mapsrus@gmail.com",
    pass: "maps-r-us6$",
  },
  tls: {
    rejectUnauthorized: false,
  }
});

var mailOptions = {
  from: "mapsrus@gmail.com",
  to: "myfriend@yahoo.com",
  subject: "Here is your Travel Itinerary!",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
    transporter.close();
  }
});
