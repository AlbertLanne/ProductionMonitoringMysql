const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");
const papa = require('papaparse');
const file = fs.createReadStream('Fichier.csv');

function recup()
{
    var nomFichierCSV = document.getElementById("newCSV").value;
    //var emplacementFichier = "home/administrateur/ProjetFiltres/test/" + nomFichierCSV;
    //console.log("test");
    alert("test1");

    var count = 0; // cache the running count
    papa.parse(file, {
        worker: true, // Don't bog down the main thread if its a big file
        step: function(result) {
            // do stuff with result
        },
        complete: function(results, file) {
            alert('parsing complete read' + count + 'records.');
        }
    });
    /*var test = Papa.parse("./home/administrateur/ProjetFiltres/test/Fichier.csv", {
        delimiter: ",",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        escapeChar: '"',
        header: true,
        transformHeader: undefined,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: undefined,
        error: undefined,
        download: false,
        downloadRequestHeaders: undefined,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined,
        transform: undefined,
        delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
    });

    alert("test"); */
/*    let stream = fs.createReadStream(emplacementFichier);
    let csvData = [];
    let csvStream = fastcsv
        .parse()
        .on("data", function(data) {
            csvData.push(data);
        })
        .on("end", function() {
            // remove the first line: header
            csvData.shift();

            // create a new connection to the database
            const connection = mysql.createConnection({
                host: "localhost",
                user: "louis",
                password: "tsiris123",
                database: "mydb"
            });

            // open the connection
            connection.connect(error => {
                if (error) {
                    console.error(error);
                } else {
                    let query =
                        "INSERT INTO Client (nom_Client, id_Commande) VALUES ('test', '3');";
                    //connection.query(query, [csvData], (error, response) => {
                    //    console.log(error || response);
                    //});
                }
            });
        });

    stream.pipe(csvStream);*/


}