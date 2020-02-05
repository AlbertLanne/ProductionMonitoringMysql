const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const nodemailer = require('nodemailer');

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



    var fulldata = [{"jour":"Lundi","vente":"5", "date":"2018-10-10"},{"jour":"Mardi","vente":"1", "date":"2017-10-01"},
        {"jour":"Mercredi","vente":"10", "date":"2018-01-01"},{"jour":"Jeudi","vente":"7", "date":"2018-01-01"},
        {"jour":"Vendredi","vente":"3", "date":"2018-06-01"},{"jour":"Samedi","vente":"12", "date":"2018-02-08"},
        {"jour":"Dimanche","vente":"2", "date":"2018-03-01"}]

    // const fulldata = await GetDataFromDB("SELECT * FROM `producttable`");
    console.log(fulldata);
    res.send(await fulldata);
});


router.get('/filtres', async (req, res) => {


    var filtres = [{"jour":"Lundi","vente":"5", "date":"2018-10-10"},{"jour":"Mardi","vente":"1", "date":"2017-10-01"},
        {"jour":"Mercredi","vente":"10", "date":"2018-01-01"},{"jour":"Jeudi","vente":"7", "date":"2018-01-01"},
        {"jour":"Vendredi","vente":"3", "date":"2018-06-01"},{"jour":"Samedi","vente":"12", "date":"2018-02-08"},
        {"jour":"Dimanche","vente":"2", "date":"2018-03-01"}]

    // const filtresData = await GetDataFromDB("SELECT * FROM `producttable` WHERE jour = 'lundi'");
    res.send(await filtres);
});


router.post('/sendMail',function(req,res){
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "dadaslashfaq@gmail.com", // generated ethereal user
            pass: "ranpmdxbrxtkitjm" // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false,
        }
    });

    let mailOptions = {
        from: '"Aredi" <dadaslashfaq@gmail.com>', // sender address
        to: "arediyt@gmail.com", // list of receivers
        subject: "Notification intefiltre", // Subject line
        text: "Le stock part en couille", // plain text body
        html: "<b>Auto destruction dans trois deux un</b>" // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(error);
        }
        console.log('Le message a ete correctement envoye');
        res.render('index');


    });

    console.log('testAPI');


});







module.exports = router;
