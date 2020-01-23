// const xlabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'];

chartIt();
async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('myChart');
    const graphique = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
            datasets: [{
                label: 'nb de filtre',
                backgroundColor: "rgba(192,0,15,0.4)",
                borderColor: "rgb(192,140,148)",
                borderCapStyle: 'butt',
                fill: false,
                data: data.xy
            }],
        },
    })
}

async function getData() {
// j'a suivit le tuto getDATA et appeler dans la chart. ont l'utilise comme obj pour X,Y
    const xs = [];
    const xy = [];


    let response = await fetch(`http://localhost:4000/api/informations`);
    // le mec du tuto taff avec un .csv donc c'est .text mais nous c'est .json je crois
    // Si tu changes .text par json tu as une erreur du coup perso j'ai crée une nouvelle var
    let data = await response.text();
    const table = data.split('\n').slice(1);

    table.forEach(row => {
        const columns = row.split(',');
        const year = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'];
        const temp = columns[1];

        xs.push(year); // le tuto dit de faire comme ça
        xy.push(['4', '5', '6', '1', '2']); // je sais pas comment verif si push fonctionne

    });
    return {xs,xy};
}




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

