var graphique = [];
ctx = document.getElementById('myChart').getContext("2d");
let gradient = ctx.createLinearGradient(0, 0, 0, 600);
gradient.addColorStop(0, 'orange');
gradient.addColorStop(1, 'purple');

var label = [];
var testArray= [{"production":"200","mois":"2010"},{"production":"210","mois":"2011"},{"production":"230","mois":"2012"},{"production":"250","mois":"2013"},{"production":"300","mois":"2014"},{"production":"210","mois":"2015"},{"production":"240","mois":"2016"},{"production":"242","mois":"2017"},{"production":"234","mois":"2018"}];
var testArray2= [{"production":"5","mois":"yolo"},{"production":"5","mois":"février"},{"production":"9","mois":"mars"},{"production":"17","mois":"avril"},{"production":"6","mois":"mai"},{"production":"8","mois":"juin"},{"production":"17","mois":"juillet"},{"production":"7","mois":"aout"},{"production":"10","mois":"septembre"}];

var chartData = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [{
        label: 'Stock',
        data: [7,2,5,9,8,6],
        backgroundColor: gradient

    }]


};

function updateData(){
    var year =  document.getElementById('Yearly').checked;
    var monthly = document.getElementById('Monthly').checked;
    var weekly = document.getElementById('Weekly').checked;
    var metal = document.getElementById('metal').checked;
    var papier = document.getElementById('papier').checked;

    console.log(year);
    console.log(metal);

    if (year === true && metal === true){
        chartData.datasets[0].data = testArray.map(item => Number(item.production));
        chartData.labels = testArray.map(item => item.mois);
        graphique.update();
    }
    else if (monthly === true && metal === true){
        chartData.datasets[0].data = testArray2.map(item => Number(item.production));
        chartData.labels = testArray2.map(item => item.mois);
        graphique.update();
    }

    else if (weekly === 1 && metal === 1){

    }

    else if (year === 1 && papier === 1){

    }

    else if (monthly === 1 && papier === 1){

    }

    else if (weekly === 1 && papier === 1){

    }
}


function graphInit() {
    graphique = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {

                    }
                }]
            },
       responsive:true }
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



