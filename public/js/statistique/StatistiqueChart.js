let graphique = [];
let dataX = [];
let dataY = [];


document.addEventListener('DOMContentLoaded', function() {

    // Cette array vas être une fonction qui vas changer en fonction de la requete SQL


    var ctx=document.getElementById('myChart');




    // dataY = recupY();
    // dataX = recupX();
    /** Derniere modif, modification de performGetRequest pour avoir 2 params
     *  ou alors faire passer
     * @param dataY
     * @param dataX
     * @returns {Promise<void>}
     */
/**
   function myFunction(Filtre, Mois) {
        return SELECT FROM "FILTRE' ET "MOIS;
        }
        window.myFunction(BoutonFILTREY, boutonTIMEX);    // Will also return 20
 **/

    async function performGetRequest() {

    let response = await fetch(`http://localhost:4000/api/fulldata`);

    let data = await response.json();
    // console.log(data);

    // donnee = data.map(function (item) {
    //     return item.janvier;
    // });

     dataX = data.map(function (item) {
         let val = data[1][1];
         return val.jour;

     });
    console.log(dataX);

     dataY = data.map(function (item) {

         let val = data[1][0];
         return val.vente;
    });
    // console.log(dataY);


        var graphique = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: dataX,
                datasets: [{
                    label: 'Test',
                    data: dataY,
                    fill: false,
                    lineTension : 0.2,
                    borderWidth: 10,
                }],
            },
        });
    }

    performGetRequest();

});

// function getRandomInt() {
//     return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// }
async function performGetRequest() {
    var resultElement = await document.getElementById('getResult1');
    resultElement.innerHTML = '';

    let response = await fetch(`http://localhost:4000/api/fulldata`);
    let data = await response.json()

    resultElement.innerHTML = '<div class="bg-red-300 flex">' + '<p class="">' + "Status -> " + '<p>' +
        response.status + ' ' + response.statusText + '</div>' +
        '<p class="text-xl">Content:</p>' + '<p class="">' + '<p>' +
        '<pre>' + JSON.stringify(data, null, '\t') + '</pre>';
}

async function performGetRequest1() {
    var resultElement = await document.getElementById('getResult2');
    resultElement.innerHTML = '';

    let response = await fetch(`http://localhost:4000/api/fulldata`);
    let data = await response.json();
    test = Object.values(data[1]);
    let digit = Object.values(data[1])[0];
    resultElement.innerHTML = test + 'Le n°0 de lalgo est ' + digit;
}

// var resultElement = await document.getElementById('getResult2');
// resultElement.innerHTML = '';
//
// let response = await fetch(`http://localhost:4000/api/informations`);
// let data = await response.json();
// test = Object.values(data[1]);
// let digit = Object.values(data[1])[0];
// resultElement.innerHTML = test + 'Le n°0 de lalgo est ' + digit;

