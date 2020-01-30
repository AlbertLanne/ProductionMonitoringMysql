
let newdata = [];
var graphique = [];
let labels = [];
let donnee = [];

document.addEventListener('DOMContentLoaded', function() {


    var ctx = document.getElementById('myChart');
    async function performGetRequest() {
        let response = await fetch(`http://localhost:4000/api/fulldata`);
        let data = await response.json();
         donnee = data.map(function (item) {
            return item.total;
        });
         labels = data.map(function (item) {
            return item.filtre;
        });

        newdata = data.map(function(item){
            return item.year;
        });
        console.log(newdata);
        console.log(donnee);
        console.log(labels);
        graphique = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Test',
                    data: donnee
                }],
            },
        });
    }
performGetRequest();
});

var MyInit = {
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'no-cors',
    cache: 'default'

};


function sendMail() {
    fetch(`http://localhost:4000/api/sendMail`, MyInit);


}

function addData(chart, data) {
    chart.data.datasets.labels = 'Testi';
    chart.data.datasets.push(data);
    chart.update();
    console.log('done');
}


function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


