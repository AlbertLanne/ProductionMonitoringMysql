var ctx = document.getElementById('myLineChart');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Mon 1ere dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Mon 2eme dataset',
            fill: true,
            lineTension: 0,
            data: [15, 22, 18, 30, 10, 22],
            backgroundColor: [
                'rgba(255,0,60,0.2)',
                'rgba(203,23,235,0.2)',
                'rgba(129,0,255,0.2)',
                'rgba(156,56,192,0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(39,0,255,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }
        ]
    },
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

var ctxG = document.getElementById('myLineGreen');
var myLineGreen = new Chart(ctxG, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Mon 1ere dataset',
            fill: true,
            data: [5, 10, 5, 10, 15, 10],
            backgroundColor: [
                'rgba(0,255,77,0.2)',
                'rgba(3,255,61,0.2)',
                'rgba( 6,255,46,0.2)',
                'rgba(9,255,30,0.2)',
                'rgba(12,255,15,0.2)',
                'rgba(15,255,0,0.2)'
            ],
            borderColor: [
                'rgb(0,255,68)',
                'rgba(2,234,58, 1)',
                'rgba( 5,213,48, 1)',
                'rgba( 7,192,38, 1)',
                'rgba(12,150,19, 1)',
                'rgb(18,108,0)'
            ],
            borderWidth: 2
        },{
            label: 'Mon 2eme dataset',
            fill: true,
            lineTension: 0.5,
            data: [15, 20, 10, 15, 25, 15],
            backgroundColor: [
                'rgba(0,255,77,0.2)',
                'rgba(3,255,61,0.2)',
                'rgba( 6,255,46,0.2)',
                'rgba(9,255,30,0.2)',
                'rgba(12,255,15,0.2)',
                'rgba(15,255,0,0.2)'
            ],
            borderColor: [
                'rgb(0,255,68)',
                'rgba(2,234,58, 1)',
                'rgba( 5,213,48, 1)',
                'rgba( 7,192,38, 1)',
                'rgba(12,150,19, 1)',
                'rgb(18,108,0)'
            ],
            borderWidth: 0.2
        },
            {
                label: 'Mon 3eme dataset',
                fill: true,
                lineTension: 0.5,
                data: [4, 8, 3, 13, 6, 9],
                backgroundColor: [
                    'rgba(0,255,77,0.2)',
                    'rgba(3,255,61,0.2)',
                    'rgba( 6,255,46,0.2)',
                    'rgba(9,255,30,0.2)',
                    'rgba(12,255,15,0.2)',
                    'rgba(15,255,0,0.2)'
                ],
                borderColor: [
                    'rgb(0,255,68)',
                    'rgba(2,234,58, 1)',
                    'rgba( 5,213,48, 1)',
                    'rgba( 7,192,38, 1)',
                    'rgba(12,150,19, 1)',
                    'rgb(18,108,0)'
                ],
                borderWidth: 0.2
            }
        ]
    },
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

var ctxB = document.getElementById('myLineBlue');
var myLineBlue = new Chart(ctxB, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Mon 1ere dataset',
            data: [30, 190, 30, 195, 20, 122],
            backgroundColor: [
                'rgba(255,11,161,0.1)',

            ],
            borderColor: [
                'rgb(0,184,255)',
                'rgba(54, 162, 235, 1)',
                'rgb(22,0,255)',
                'rgb(0,189,192)',
                'rgba(0,255,241,0.2)',
                'rgb(0,157,255)'
            ],
            borderWidth: 3
        },{
            label: 'Mon 2eme dataset',
            fill: true,
            lineTension: 0.1,
            data: [220, 220, 180, 200, 150, 150],
            backgroundColor: [
                'rgba(4,0,255,0.43)',

            ],
            borderColor: [
                'rgb(0,184,255)',
                'rgba(54, 162, 235, 1)',
                'rgb(22,0,255)',
                'rgb(0,189,192)',
                'rgba(0,255,241,0.2)',
                'rgb(0,157,255)'
            ],
            borderWidth: 3
        }
        ]
    },
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

var ctxP = document.getElementById('myLinePurple');
var myLinePurple = new Chart(ctxP, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Mon 1ere dataset',
            fill: true,
            data: [100, 130, 150, 100, 150, 192],
            backgroundColor: [
                'rgba(255,191,0,0.2)',
                'rgba(255,199,0,0.2)',
                'rgba(255,208,0,0.2)',
                'rgba(255,216,0,0.2)',
                'rgba( 255,225,05,0.2)',
                'rgba(255,234,0,0.2)'
            ],
            borderColor: [
                'rgb(255,250,0)',
                'rgba(225,221,0, 1)',
                'rgba(196,193,0, 1)',
                'rgba(166,164,0, 1)',
                'rgba(137,136,0, 1)',
                'rgb(108,108,0)'
            ],
            borderWidth: 2
        },{
            label: 'Mon 2eme dataset',
            fill: true,
            lineTension: 0.5,
            data: [150, 150, 100, 180, 150, 250],
            backgroundColor: [
                'rgba(255,191,0,0.2)',
                'rgba(255,199,0,0.2)',
                'rgba(255,208,0,0.2)',
                'rgba(255,216,0,0.2)',
                'rgba( 255,225,05,0.2)',
                'rgba(255,234,0,0.2)'
            ],
            borderColor: [
                'rgb(255,250,0)',
                'rgba(225,221,0, 1)',
                'rgba(196,193,0, 1)',
                'rgba(166,164,0, 1)',
                'rgba(137,136,0, 1)',
                'rgb(108,108,0)'
            ],
            borderWidth: 0.2
        },
            {
                label: 'Mon 3eme dataset',
                fill: true,
                lineTension: 0.5,
                data: [40, 30, 50, 130, 80, 93],
                backgroundColor: [
                    'rgba(255,191,0,0.2)',
                    'rgba(255,199,0,0.2)',
                    'rgba(255,208,0,0.2)',
                    'rgba(255,216,0,0.2)',
                    'rgba( 255,225,05,0.2)',
                    'rgba(255,234,0,0.2)'
                ],
                borderColor: [
                    'rgb(255,250,0)',
                    'rgba(225,221,0, 1)',
                    'rgba(196,193,0, 1)',
                    'rgba(166,164,0, 1)',
                    'rgba(137,136,0, 1)',
                    'rgb(108,108,0)'
                ],
                borderWidth: 0.2
            }
        ]
    },
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
