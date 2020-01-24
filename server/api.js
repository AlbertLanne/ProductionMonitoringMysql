const express = require('express');
var mysql = require('mysql');
const router = express.Router();

var renvoi = [];
router.get('/', async (req, res) => {

    // informations  prend l'array vous pouvez faire un test avec un array statique comme ci dessous en commentaire

    // const informations = await loadProductsCollection();
    informations = [{
        "id": 40,
        "first_name": "Jeanette",
        "last_name": "Penddreth",
        "email": "jpenddreth0@census.gov",
        "gender": "Female",
        "ip_address": "26.58.193.2"
    }, {
        "id": 2,
        "first_name": "Giavani",
        "last_name": "Frediani",
        "email": "gfrediani1@senate.gov",
        "gender": "Male",
        "ip_address": "229.179.4.212"
    }, {
        "id": 3,
        "first_name": "Noell",
        "last_name": "Bea",
        "email": "nbea2@imageshack.us",
        "gender": "Female",
        "ip_address": "180.66.162.255"
    }, {
        "id": 4,
        "first_name": "Willard",
        "last_name": "Valek",
        "email": "wvalek3@vk.com",
        "gender": "Male",
        "ip_address": "67.76.188.26"
    }];
    // const informations = await loadProductsCollection();
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
