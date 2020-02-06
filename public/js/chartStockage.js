var graphique = [];
ctx = document.getElementById('myChart').getContext("2d");
let gradient = ctx.createLinearGradient(0, 0, 0, 600);
gradient.addColorStop(0, 'orange');
gradient.addColorStop(1, 'purple');

var label = [];
var testArray= [{"production":"12","mois":"janvier"},{"production":"5","mois":"février"},{"production":"9","mois":"mars"},{"production":"17","mois":"avril"},{"production":"6","mois":"mai"},{"production":"8","mois":"juin"},{"production":"17","mois":"juillet"},{"production":"7","mois":"aout"},{"production":"10","mois":"septembre"}];
var chartData = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [{
        label: 'Stock',
        data: [7,2,5,9,8,6],
        backgroundColor: gradient

    }]


};

function updateData(){
    chartData.datasets[0].data = testArray.map(item => Number(item.production));
    chartData.labels = testArray.map(item => item.mois);
    graphique.update();


}


function graphInit() {
    graphique = new Chart(ctx, {
        type: 'bar',
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



function handleChartTimeChange(){

}

function handleChartDataChange(){

}





function changeToBar() {
         graphique.destroy();
         graphique = new Chart(ctx, {
             type: 'bar',
             data: chartData
         });
     };

function changeToLine(){

        graphique.destroy();
        graphique = new Chart(ctx, {
            type: 'line',
            data: chartData
        });

}

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


