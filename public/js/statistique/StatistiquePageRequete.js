let graphiqueUn = [];
// let dataX = [];
let dataY = [];
var dataX = ['1', '8', '10', '10', '9', '7','5'];

document.addEventListener('DOMContentLoaded', function() {

    // Cette array vas être une fonction qui vas changer en fonction de la requete SQL
    var ctx=document.getElementById('myChartUn');

    async function performGetRequest() {

        let response = await fetch(`http://localhost:4000/api/filtres`);
        let data = await response.json();
        dataY = data.map(function (item) {
            return item.vente;
        });
        dataX = data.map(function (item) {
            return item.jour;
        });
        console.log(dataX);

            graphiqueUn = new Chart(ctx.getContext('2d'), {
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

async function Requete1SurApi() {
    var resultElement = await document.getElementById('getResult1');
    resultElement.innerHTML = '';
    let response = await fetch(`http://localhost:4000/api/filtres`);
    let data = await response.json();
    resultElement.innerHTML = '<div class="bg-red-300 flex">' + '<p class="">' + "Le status est = " + '<p>' +
        response.status + ' ' + response.statusText + '</div>' +
        '<p class="text-xl">Content:</p>' + '<p class="">' + '<p>' +
        '<pre>' + JSON.stringify(data, null, '\t') + '</pre>';
}

// var resultElement = await document.getElementById('getResult2');
// resultElement.innerHTML = '';
//
// let response = await fetch(`http://localhost:4000/api/informations`);
// let data = await response.json();
// test = Object.values(data[1]);
// let digit = Object.values(data[1])[0];
// resultElement.innerHTML = test + 'Le n°0 de lalgo est ' + digit;

