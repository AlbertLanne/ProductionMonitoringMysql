const express = require('express');
var mysql = require('mysql');
const router = express.Router();


var output = []





async function GetDataFromDB(requete) { //Cette fonction est désormais générale à toutes les requêtes.
                                        //Elle prends en paramètre la requête et renvoie son resultat

    var con = mysql.createConnection('mysql://uisomclwcgug5cj5:58Eg8vzqeQ4Rx0zxjhFw@bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com:3306/bfgvnm6ajhbocjxbjmly');
    connection = con.connect(function (err) {
        if (err) throw err;
        else
            console.log(" -- Connection réeussie! -- ");
        con.query(requete, function (err, result, fields) {
            if (err) throw err;
            output = result;
            con.destroy();
        });
    });
    return output;
}


// Ci-dessous les API. Pour être peuplées, elles utilisent GetDataFromDB prenant en paramètre la requête SQL.


router.get('/fulldata', async (req, res) => {

    const fulldata = await GetDataFromDB("SELECT * FROM `producttable`");

    console.log(fulldata);

    res.send(await fulldata);
});


router.get('/filtres', async (req, res) => {


    const filtresData = await GetDataFromDB("SELECT * FROM `producttable` WHERE year = '2018'");

    res.send(await filtresData);
});





module.exports = router;
