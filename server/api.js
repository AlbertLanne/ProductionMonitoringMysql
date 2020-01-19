const express = require('express');
var mysql = require('mysql');
const router = express.Router();

var renvoi = [];
router.get('/', async (req, res) => {

//  informations  prend l'array vous pouvez faire un test avec un array statique comme ci dessous en commentaire

 // informations = [{"salesid":1,"quantity":11,"date":"2020-01-31T23:00:00.000Z"},{"salesid":2,"quantity":3,"date":"2018-12-31T23:00:00.000Z"},{"salesid":7,"quantity":9,"date":"2018-08-31T22:00:00.000Z"}]
    const informations = await loadProductsCollection();
    res.send(await informations);
});

    async function loadProductsCollection() {
    var con = mysql.createConnection('mysql://uisomclwcgug5cj5:58Eg8vzqeQ4Rx0zxjhFw@bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com:3306/bfgvnm6ajhbocjxbjmly');
    connection = con.connect(function (err) {
        if (err) throw err;
        //Select all customers and return the result object:
        con.query("SELECT * FROM `producttable`", function (err, result, fields) {
            if (err) throw err;
           renvoi = result;
            });
        });
        return renvoi;
    }

module.exports = router;
