
document.addEventListener('DOMContentLoaded', function() {

    var ctx=document.getElementById('myChart');

var charlie = [];
    var testlol = [];

    function ajaxGet(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    }

    ajaxGet("http://localhost:4000/api/informations",function(reponse){
         charlie =  console.log(reponse);
        console.log(JSON.parse(charlie));
    });

testlol.jsonarray.map(function(e){
    console.log(e.name);
});



getFullName(charlie);


        var graphique = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                datasets: [{
                    label: 'age',//'Stock des grillages en metal',
                    backgroundColor: [
                        'rgba(255,99,132,0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: 'rgb(242,255,250)',
                    data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
                }]
            },
        })




function getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;

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
                    graphique.data.datasets[0].data[0] = [10];
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




