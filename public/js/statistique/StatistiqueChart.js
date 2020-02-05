let graphique = [];
// let dataX = [];
let dataY = [];
var dataX = ['1', '8', '10', '10', '9', '7','5'];

document.addEventListener('DOMContentLoaded', function() {

    // Cette array vas être une fonction qui vas changer en fonction de la requete SQL

    var ctx=document.getElementById('myChart');
    async function performGetRequest() {

    let response = await fetch(`http://localhost:4000/api/fulldata`);

    let data = await response.json();

    dataY = data.map(function (item) {
        return item.vente;
    });
    //     dataX = data.map(function (item) {
    //     return item.jour;
    // });
    console.log(dataX);

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



    async function TakeMonth() {
        var dataX = ['1', '8', '10', '10', '9', '7', '5'];
        var dataY = ['5', '3', '4', '8', '10', '11', '10', '9'];
        var data = graphique.config.data;
        data.datasets[0].data = dataY;
        // data.datasets[1].data = rain_dataset;
        data.labels = dataX;
        TakeMonth.update();
    }


    TakeMonth()


});




// function getRandomInt() {
//     return Math.floor(Math.random() * (50 - 5 + 1)) + 5
// }
async function performGetRequest() {
    var resultElement = await document.getElementById('getResult1');
    resultElement.innerHTML = '';

    let response = await fetch(`http://localhost:4000/api/fulldata`);
    let data = await response.json();
    resultElement.innerHTML = '<div class="bg-red-300 flex">' + '<p class="">' + "Status -> " + '<p>' +
        response.status + ' ' + response.statusText + '</div>' +
        '<p class="text-xl">Content:</p>' + '<p class="">' + '<p>' +
        '<pre>' + JSON.stringify(data, null, '\t') + '</pre>';
}


    async function performGetRequest1() {
        var resultElement2 = await document.getElementById('getResult2');
        resultElement2.innerHTML = '';
        let response = await fetch(`http://localhost:4000/api/filtres`);
        let data = await response.json();
        resultElement2.innerHTML = '<div class="bg-red-300 flex">' + '<p class="">' + "Status -> " + '<p>' +
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

