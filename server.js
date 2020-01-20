var express = require('express');
// const nodemailer = require('nodemailer');

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

app.post('/',function(req,res){
  res.send('');
});

app.post('/followers',function(req,res){
    console.log('Test d API');


});




// async function makeRequest() {
//
//   let res = await axios.head('http://webcode.me');
//
//   console.log(`Status: ${res.status}`)
//   console.log(`Server: ${res.headers.server}`)
//   console.log(`Date: ${res.headers.date}`)
//   return "test";
// }
//
// makeRequest();






