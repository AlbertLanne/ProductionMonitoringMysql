var graphique = [];
ctx = document.getElementById('myChart').getContext("2d");


//
//
// let response = await fetch(`http://localhost:4000/api/filtres`);
// let data = await response.json();
// dataY = data.map(function (item) {
//     return item.vente;
// });
// dataX = data.map(function (item) {
//     return item.jour;
// });


var label = [];
var testArray= [{"production":"12","mois":"janvier"},{"production":"5","mois":"février"},{"production":"9","mois":"mars"},{"production":"17","mois":"avril"},{"production":"6","mois":"mai"},{"production":"8","mois":"juin"},{"production":"17","mois":"juillet"},{"production":"7","mois":"aout"},{"production":"10","mois":"septembre"}];
var chartData = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [{
        label: 'Stock',
        data: [7,2,5,9,8,6],
        backgroundColor : '',
    }]
};

function updateData(){
    chartData.datasets[0].data = testArray.map(item => Number(item.production));
    chartData.labels = testArray.map(item => item.mois);

    let gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'yellow');
    gradient.addColorStop(1, 'white');
    chartData.datasets[0].backgroundColor= gradient;
    graphique.update();
}

function ChangeAPI(){
    var filtres = [{"jour":"Lundi","vente":"5", "date":"2018-10-10"},{"jour":"Mardi","vente":"1", "date":"2017-10-01"},
        {"jour":"Mercredi","vente":"10", "date":"2018-01-01"},{"jour":"Jeudi","vente":"7", "date":"2018-01-01"},
        {"jour":"Vendredi","vente":"3", "date":"2018-06-01"},{"jour":"Samedi","vente":"12", "date":"2018-02-08"},
        {"jour":"Dimanche","vente":"2", "date":"2018-03-01"}]

    var test = [{"production":"102","mois":"janvier"},{"production":"520","mois":"février"},{"production":"900","mois":"mars"},{"production":"170","mois":"avril"},{"production":"600","mois":"mai"},{"production":"888","mois":"juin"},{"production":"178","mois":"juillet"},{"production":"788","mois":"aout"},{"production":"180","mois":"septembre"}];

    chartData.datasets[0].data = test.map(item => Number(item.production));
    chartData.labels = test.map(item => item.mois);

    let gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'Red');
    gradient.addColorStop(1, 'white');
    chartData.datasets[0].backgroundColor= gradient;
    graphique.update();
}
function FiltreFP(){
    var filtres = [{"jour":"Lundi","vente":"5", "date":"2018-10-10"},{"jour":"Mardi","vente":"1", "date":"2017-10-01"},
        {"jour":"Mercredi","vente":"10", "date":"2018-01-01"},{"jour":"Jeudi","vente":"7", "date":"2018-01-01"},
        {"jour":"Vendredi","vente":"3", "date":"2018-06-01"},{"jour":"Samedi","vente":"12", "date":"2018-02-08"},
        {"jour":"Dimanche","vente":"5", "date":"2018-03-01"}, {"jour":"Dimanche","vente":"2", "date":"2018-03-01"},
        {"jour":"Dimanche","vente":"3", "date":"2018-03-01"}]

    var test = [{"production":"102","mois":"janvier"},{"production":"520","mois":"février"},{"production":"900","mois":"mars"},{"production":"170","mois":"avril"},{"production":"600","mois":"mai"},{"production":"888","mois":"juin"},{"production":"178","mois":"juillet"},{"production":"788","mois":"aout"},{"production":"180","mois":"septembre"}];

    chartData.datasets[0].data = filtres.map(item => Number(item.vente));
    chartData.labels = test.map(item => item.mois);

    let gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'cyan');
    gradient.addColorStop(1, 'white');
    chartData.datasets[0].backgroundColor= gradient;
    graphique.update();
}
function Year(){
    var filtres = [{"year":"2000","vente":"5", "date":"2018-10-10"},{"year":"2001","vente":"1", "date":"2017-10-01"},
        {"year":"2002","vente":"10", "date":"2018-01-01"},{"year":"2003","vente":"7", "date":"2018-01-01"},
        {"year":"2004","vente":"3", "date":"2018-06-01"},{"year":"2005","vente":"12", "date":"2018-02-08"},
        {"year":"2006","vente":"2", "date":"2018-03-01"}]

    chartData.labels = filtres.map(item => item.year);

    let gradient = ctx.createLinearGradient(0, 0, 0, 600);

    graphique.update();
}
function Month(){
    var test = [{"production":"102","mois":"janvier"},{"production":"520","mois":"février"},{"production":"900","mois":"mars"},{"production":"170","mois":"avril"},{"production":"600","mois":"mai"},{"production":"888","mois":"juin"},{"production":"178","mois":"juillet"},{"production":"788","mois":"aout"},{"production":"180","mois":"septembre"}];
    chartData.labels = test.map(item => item.mois);
    graphique.update();
}

function graphInit() {
    graphique = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// fpFiltre()
// psm()

// function changeToBar() {
//     graphique.destroy();
//     graphique = new Chart(ctx, {
//         type: 'bar',
//         data: chartData
//     });
// };
//
// function changeToLine(){
//
//     graphique.destroy();
//     graphique = new Chart(ctx, {
//         type: 'line',
//         data: chartData
//     });
//
// }
//
// var MyInit = {
//     headers:{
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     mode: 'no-cors',
//     cache: 'default'
//
// };
