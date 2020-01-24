
document.addEventListener('DOMContentLoaded', function() {


    var ctx=document.getElementById('myChart');
    async function performGetRequest() {
        let response = await fetch(`http://localhost:4000/api/informations`);
        let data = await response.json();
        let ValueX = data.map(function(item){
            return item.id;
        });
        let ValueY = data.map(function(item){
            return item.first_name;
        });

        console.log(ValueX);
        console.log(ValueY);
        var graphique = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                ValueY: ValueY,
                datasets: [{
                    label: 'Test',
                    backgroundColor: "rgba(192,0,15,0.4)",
                    borderColor: "rgb(192,140,148)",
                    borderCapStyle: 'butt',
                    fill: false,
                    data: ValueX
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

    let response = await fetch(`http://localhost:4000/api/informations`);
    let data = await response.json()

    resultElement.innerHTML = '<div class="bg-red-300 flex">' + '<p class="">' + "Status -> " + '<p>' +
        response.status + ' ' + response.statusText + '</div>' +
        '<p class="text-xl">Content:</p>' + '<p class="">' + '<p>' +
        '<pre>' + JSON.stringify(data, null, '\t') + '</pre>';
}

async function performGetRequest1() {
    var resultElement = await document.getElementById('getResult2');
    resultElement.innerHTML = '';

    let response = await fetch(`http://localhost:4000/api/informations`);
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

