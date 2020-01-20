
document.addEventListener('DOMContentLoaded', function() {
    function getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5

    }

    document.getElementById("SelectBox").addEventListener("change",hideCanvas);
    function hideCanvas(){
        var myChart=document.getElementById('myChart');
        var myChart2=document.getElementById('myChart2');
        var choixSelect = document.getElementById('SelectBox').value;

        if (choixSelect == "metal"){
            myChart.style.visibility='visible';
            myChart2.style.visibility='hidden';
        }
        else{
            myChart.style.visibility='hidden';
            myChart2.style.visibility='visible';
        }
    }

    function getChartStockage() {
        var elChart = document.getElementById("myChart");
        var elChart2 = document.getElementById("myChart2");

        if (elChart != undefined) {

            new Chart(elChart.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                    datasets: [{
                        label: 'Stock des grillages en metal',
                        backgroundColor: '#0c0104',
                        borderColor: 'rgb(242,255,250)',
                        data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
                    }]
                },
            })

        }
        if (elChart2 != undefined){
            new Chart(elChart2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                    datasets: [{
                        label: 'Stock des grillages blindax',
                        backgroundColor: '#0c0104',
                        borderColor: 'rgb(242,255,250)',
                        data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
                    }]
                },
            })
        }
    }

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
    getChartStockage();


});




