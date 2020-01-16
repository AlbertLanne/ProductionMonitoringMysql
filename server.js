var express = require('express');
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


// const port = app.listen(8080);
// app.listen(port, () => console.log(`Le serveur fonctionne est tourne sur le port ${port}`));
