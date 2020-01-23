
document.addEventListener('DOMContentLoaded', function() {

    var labels = [];
    var donnee = [];

    var ctx=document.getElementById('myChart');


    async function performGetRequest() {
        let response = await fetch(`http://localhost:4000/api/informations`);
        let data = await response.json();
        let labels = data.map(function(e){
            return e.id;
        });
        let donnee = data.map(function(e){
            return e.first_name;
        });
        console.log(donnee);
        console.log(labels);
    }







    // function ajaxGet(url, callback) {
    //     var req = new XMLHttpRequest();
    //     req.open("GET", url);
    //     req.addEventListener("load", function () {
    //         if (req.status >= 200 && req.status < 400) {
    //             // Appelle la fonction callback en lui passant la réponse de la requête
    //             callback(req.responseText);
    //         } else {
    //             console.error(req.status + " " + req.statusText + " " + url);
    //         }
    //     });
    //     req.addEventListener("error", function () {
    //         console.error("Erreur réseau avec l'URL " + url);
    //     });
    //     req.send(null);
    // }
    //
    // ajaxGet("http://localhost:4000/api/informations",function(reponse){
    //      charlie =  console.log(reponse);
    //     console.log(JSON.parse(charlie));
    // });


    performGetRequest();


    var graphique = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: donnee
            }],
        },
    });




// function getRandomInt() {
//     return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
//
// }
//
//     document.getElementById("SelectBox").addEventListener("change",swapGraph);
//     document.getElementById("SelectBox").addEventListener("change",onHide)        ;
//
//     function onHide(){
//         if (document.getElementById("SelectBox").value == "default"){
//             document.getElementById("myChart").style.visibility = 'hidden';
//         }
//          else document.getElementById("myChart").style.visibility ='visible';
//
//     }
//
//  function swapGraph(){
//                 if(document.getElementById("SelectBox").value == "blindax"){
//                     graphique.data.datasets[0].data[0] = [10];
//                     graphique.data.datasets[0].data[1] = [60];
//                     graphique.data.datasets[0].data[2] = [60];
//                     graphique.data.datasets[0].data[3] = [60];
//                     graphique.data.datasets[0].data[4] = [60];
//                     graphique.data.datasets[0].data[5] = [60];
//                     graphique.data.datasets[0].data[6] = [60];
//
//                 }
//                 else
//                 {
//                     graphique.data.datasets[0].data[0] = [40];
//                     graphique.data.datasets[0].data[1] = [40];
//                     graphique.data.datasets[0].data[2] = [60];
//                     graphique.data.datasets[0].data[3] = [60];
//                     graphique.data.datasets[0].data[4] = [60];
//                     graphique.data.datasets[0].data[5] = [60];
//                     graphique.data.datasets[0].data[6] = [60];
//                 }
//
//
//
//                 // graphique.config.data.labels =["Test","Charlie"];
//                 graphique.update();
//
//     }




     // onHide();
});




