// const xlabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'];
const xlabels = [];
const ytemps = [];

chartIt();

let test = 20;

function getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}

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
async function chartIt() {
    await getData();
    const ctx = document.getElementById('myChart');
    const graphique = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Value of filter',
                backgroundColor: "rgba(192,0,15,0.4)",
                borderColor: "rgb(192,140,148)",
                borderCapStyle: 'butt',
                fill: false,
                data: ytemps
            }],
        },
    })
}

async function getData() {
    let response = await fetch(`http://localhost:4000/api/informations`);
    let data = await response.text();
    console.log( data);
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = colums[0];
        xlabels.push(year);
        const temp = columns[1];
        ytemps.push(temp);
        console.log(year, temp);

    });
}




