const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// API SERVER HTTP AXIOS HERE
const app = express();

// MIDDLEWARE

app.use(bodyParser.json());
app.use(cors());

const fulldata = require('./api');
const filtres = require('./api');


// Le lien avec le serveur d'api   ==>  http://localhost:4000/api/informations
app.use('/api/', fulldata);
app.use('/api/', filtres);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`L'api fonctionne sur le port ${port}`));
