document.addEventListener('DOMContentLoaded', function() {
    var ctx=document.getElementById('myChart');

    var graphique = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
            datasets: [{
                label: 'Stock des grillages',
                backgroundColor: '#f87979',
                borderColor: 'rgb(242,255,250)',
                data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
            }]
        },
    })

    function getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5

    }

    document.getElementById("SelectBox").addEventListener("change",swapGraph);
    document.getElementById("SelectBox").addEventListener("change",onHide)        ;

    function onHide(){
        if (document.getElementById("SelectBox").value == "default"){
            document.getElementById("myChart").style.visibility = 'hidden';
        }
        else document.getElementById("myChart").style.visibility ='visible';

    }

    function swapGraph(){
        if(document.getElementById("SelectBox").value == "blindax"){
            graphique.data.datasets[0].data[0] = [60];
            graphique.data.datasets[0].data[1] = [60];
            graphique.data.datasets[0].data[2] = [60];
            graphique.data.datasets[0].data[3] = [60];
            graphique.data.datasets[0].data[4] = [60];
            graphique.data.datasets[0].data[5] = [60];
            graphique.data.datasets[0].data[6] = [60];

        }
        else
        {
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






function getChartStatistique() {
        var elChart = document.getElementById("myChart1");
        if (elChart != undefined) {

            new Chart(elChart.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                    datasets: [{
                        label: 'Stock des grillages',
                        backgroundColor: '#f87979',
                        borderColor: 'rgb(242,255,250)',
                        data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
                    }]
                },
            })

        }
    }

    getChartStatistique();





