/*const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");
const papa = require('papaparse');
const file = fs.createReadStream('Fichier.csv');*/

async function recup()
{
    var MyInit = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'

    };
    var nomFichierCSV = document.getElementById("newCSV").value;
    let data = await fetch('http://localhost:4000/api/SearchCSV', MyInit);
    console.log(nomFichierCSV);
}