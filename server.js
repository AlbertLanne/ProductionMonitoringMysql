var express = require('express');
const nodemailer = require('nodemailer');

var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(public, 'index.html'));
});
app.use('/', express.static(public));
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Le serveur web fonctionne sur le port ${port}`));



// app.post('/api/mail', (req, res) => {
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'AlertMonitoringInterfiltre@gmail.com',
//       password: 'W8qVQFa6jz3XVxM'
//     }
//   })
//
//   let mailOptions = {
//     from: 'AlertMonitoringInterfiltre@gmail.com',
//     to: 'arediyt@gmail.com',
//     subject: 'Test d alerte',
//     text: 'ceci est une alerte'
//   }
//
//   transporter.sendMail(mailOptions, function (err, res) {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       console.log('Email sent:' + info.response);
//     }
//   })
// });





// const port = app.listen(8080);
// app.listen(port, () => console.log(`Le serveur fonctionne est tourne sur le port ${port}`));
