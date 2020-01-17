document.addEventListener('DOMContentLoaded', function() {
    function getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5

    }

    function getChartStockage() {
        var elChart = document.getElementById("myChart");
        if (elChart != undefined) {

            new Chart(elChart.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                    datasets: [{
                        label: 'Stock des grillages',
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