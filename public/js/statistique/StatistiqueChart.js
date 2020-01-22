
let test;

function getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}
 function putdata() {
    let response =  fetch(`http://localhost:4000/api/informations`);
    // let data = await response.json();
    // resultElement.innerHTML = JSON.stringify(data, null, '\t') ;
    // let truc = JSON.stringify(data, null, '\t');

     let clone = JSON.parse(JSON.stringify(this.response));
     clone[0].data = data;
     this.barChartData = clone;
     console.log(clone);


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
    // resultElement.innerHTML = JSON.stringify(data[1], null, '\t') + ' '+
    //     JSON.stringify(test, null, '\t');
}


document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart');

    var graphique = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
            datasets: [{
                label: 'Data useless',
                backgroundColor: "rgba(192,0,15,0.4)",
                borderColor: "rgb(192,140,148)",
                borderCapStyle: 'butt',
                fill: false,
                data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
            }],
        },
    })


    document.getElementById("SelectBox").addEventListener("change", swapGraph);
    document.getElementById("SelectBox").addEventListener("change", onHide);

    function onHide() {
        if (document.getElementById("SelectBox").value == "default") {
            document.getElementById("myChart").style.visibility = 'hidden';
        } else document.getElementById("myChart").style.visibility = 'visible';

    }

    function swapGraph() {
        if (document.getElementById("SelectBox").value == "blindax") {
            graphique.data.datasets[0].data[0] = [60];
            graphique.data.datasets[0].data[1] = [60];
            graphique.data.datasets[0].data[2] = [60];
            graphique.data.datasets[0].data[3] = [60];
            graphique.data.datasets[0].data[4] = [60];
            graphique.data.datasets[0].data[5] = [60];
            graphique.data.datasets[0].data[6] = [60];

        } else {
            graphique.data.datasets[0].data[0] = [40];
            graphique.data.datasets[0].data[1] = [40];
            graphique.data.datasets[0].data[2] = [60];
            graphique.data.datasets[0].data[3] = [60];
            graphique.data.datasets[0].data[4] = [60];
            graphique.data.datasets[0].data[5] = [60];
            graphique.data.datasets[0].data[6] = [60];
        }


        // graphique.config.data.labels =["Test","Charlie"];
        graphique.update();

    }


    onHide();
});




