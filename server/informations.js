const express = require('express');
var mysql = require('mysql');
const router = express.Router();

router.get('/', async (req, res) => {
  const informations = await loadProductsCollection();
  res.send(await informations);
  // res.send(await informations.find([]).toArray());
});

async function loadProductsCollection() {
  var con = mysql.createConnection('mysql://uisomclwcgug5cj5:58Eg8vzqeQ4Rx0zxjhFw@bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com:3306/bfgvnm6ajhbocjxbjmly');
  connection = con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM `producttable`", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
}


// async function loadProductsCollection() {
//
//   var client = mysql.createConnection({
//     host: "bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com",
//     user: "uisomclwcgug5cj5",
//     password: "58Eg8vzqeQ4Rx0zxjhFw",
//     database: "bfgvnm6ajhbocjxbjmly"
//   });
//
//   client.connect(function (err) {
//     if (err) throw err;
//     //Select all customers and return the result object:
//     client.query("SELECT * FROM `producttable`", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
// });
// }


module.exports = router;







//
// var con = mysql.createConnection({
//   host: "bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com",
//   user: "uisomclwcgug5cj5",
//   password: "58Eg8vzqeQ4Rx0zxjhFw",
//   database: "bfgvnm6ajhbocjxbjmly"
// });
//
// data = con.connect(function(err) {
//   if (err) throw err;
//   //Select all customers and return the result object:
//   con.query("SELECT * FROM `producttable`", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
//
// });
// module.exports = data;

// // get post
//
// router.get('/', async (req, res) => {
//     const products = await loadProductsCollection();
//     res.send(await products.find({}).toArray());
// });
//
// // add post
//
// router.post('/', async (req, res) => {
//     const products = await loadProductsCollection();
//     await products.insertOne({
//         text: req.body.text,
//         createdAt: new Date(),
//     });
//     res.status(201).send();
// });
// // delete post
// router.delete('/:id', async (req, res) => {
//     const products = await loadProductsCollection();
//     await products.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
//     res.status(200).send();
// });
//
// async function loadProductsCollection() {
//   const client = await mongodb.MongoClient.connect(
//     'mongodb://heroku_qpw8l5w0:e70s379qqad0o9fuks9lupbs4a@ds235417.mlab.com:35417/heroku_qpw8l5w0', {
//       useNewUrlParser: true,
//     },
//   );
//   return client.db('heroku_qpw8l5w0').collection('products');
// }
