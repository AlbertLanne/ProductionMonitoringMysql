const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require("nodemailer");


// API SERVER HTTP AXIOS HERE
const app = express();

app.get('/api',(req,res) => {
    res.send('Rien ici, verifiez les routes dispo.')
})
app.get('/',(req,res) => {
    res.send('Bienvenue sur l\'api ❤❤❤!' +
        '<h2>Docs :</h2>' +
        '<p>  https://www.redhat.com/fr/topics/middleware/what-is-middleware</p> <br>' +
        '<p>  https://www.redhat.com/fr/topics/api/what-are-application-programming-interfaces</p>')

})
app.use((req,res,next)=>{
    console.log(' L\'URL utilisé est la suivante : ' + req.url)
    next()
})

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




