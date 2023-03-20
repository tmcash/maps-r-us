// //email script
// var nodemailer = require("nodemailer");


// const html = ` `;

// const emails = [],

// async function main() {

//  const transporter =  nodemailer.createTransport({
//     service: "gmail",
//   auth: {
//     user: "mapsrus6@gmail.com",
//     pass: "kqkrmcknduhwjmnd
//     ",
//   },
//   tls: {
//     rejectUnauthorized: false,
//   }
//   });

//   const info = await transporter.sendEmail({
//     from: "mapsrus@gmail.com",
//     to: emails,
//     subject: "Here is your Travel Itinerary!",
//     html: html,
//   })
//   console.log("Message sent: " + info.messageId);

// }

// main()
//   .catch(e => console.log(e));

//email script
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mapsrus6@gmail.com",
    pass: "kqkrmcknduhwjmnd"
  },
});

var mailOptions = {
  from: "mapsrus6@gmail.com",
  to: "",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
