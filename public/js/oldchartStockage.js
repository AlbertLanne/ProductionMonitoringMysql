//
// let newdata = [];
// var graphique = [];
// let labels = [];
// let donnee = [];
//
//
//
// document.addEventListener('DOMContentLoaded', function() {
//
//     var testArray= [{"production":"12","mois":"janvier"},{"production":"5","mois":"février"},{"production":"9","mois":"mars"},{"production":"17","mois":"avril"},{"production":"6","mois":"mai"},{"production":"8","mois":"juin"},{"production":"17","mois":"juillet"},{"production":"7","mois":"aout"},{"production":"10","mois":"septembre"}];
//     var testArray2= [{"production":"5","mois":"Yolomode"},{"production":"5","mois":"février"},{"production":"9","mois":"mars"},{"production":"17","mois":"avril"},{"production":"6","mois":"mai"},{"production":"8","mois":"juin"},{"production":"17","mois":"juillet"},{"production":"7","mois":"aout"},{"production":"10","mois":"septembre"}];
//
//
//
//     async function performGetRequest() {
//         var gradctx =  document.getElementById('myChart').getContext("2d");
//         var ctx = document.getElementById('myChart');
//         var ctx1 = document.getElementById('myChart2');
//         var ctx2 = document.getElementById('myChart3');
//         var ctx3 = document.getElementById('myChart4');
//         var ctx4 = document.getElementById('myChart5');
//         var ctx5= document.getElementById('myChart6');
//
//
//         let response = await fetch(`http://localhost:4000/api/fulldata`);
//         let data = await response.json();
//          donnee = testArray.map(function (item) {
//             return item.production;
//         });
//          labels = testArray.map(function (item) {
//             return item.mois;
//         });
//
//         newdata = data.map(function(item){
//             return item.year;
//         });
//         console.log(newdata);
//         console.log(donnee);
//         console.log(labels);
//
//         //couleurs du graph
//         let gradient = gradctx.createLinearGradient(0, 0, 0, 600);
//
//         //gradient bar & line
//         gradient.addColorStop(0, 'orange');
//         gradient.addColorStop(1, 'purple');
//
//
//
//         graphique = new Chart(ctx.getContext('2d'), {
//             type: 'bar',
//             data: {
//                 labels: labels,
//                 datasets: [{
//                     label: 'Test',
//                     data: donnee,
//                     backgroundColor: gradient,
//                     hoverBackgroundColor:'rgb(64,252,52)'
//                 }],
//             },
//         });
//     }
// performGetRequest();
// });
//
//
// //Configuration du fetch de l'envoi à l'API sendMail pour envoyer un mail.
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
//
//
// function sendMail() {
//     fetch(`http://localhost:4000/api/sendMail`, MyInit);
//
//
// }
//
// function bobDylan() {
// graphique.destroy();
// console.log('destruction du graphique');
//     graphique = new Chart(ctx.getContext('2d'), {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Test',
//                 data: newdata
//
//             }],
//         },
//     });
//
// }
//
//
// function removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
//     chart.update();
// }
//
// function changeGraphType(type){
//     var gradctx =  document.getElementById('myChart').getContext("2d");
//
//     let gradient = gradctx.createLinearGradient(0, 0, 0, 600);
//     var ctx = document.getElementById('myChart');
//
//     //gradient bar & line
//     gradient.addColorStop(0, 'orange');
//     gradient.addColorStop(1, 'purple');
//
//
//     graphique.destroy();
//
//     if(type==='pie'){
//         graphique = new Chart(ctx.getContext('2d'), {
//             type: type,
//             data: {
//                 labels: labels,
//                 datasets: [{
//                     label: 'Ceci est un test',
//                     data: donnee,
//
//                     backgroundColor: gradient,  //['#FF3254','#85ff2d','#ffdb0f','#FF3254','#FF3254','#FF3254','#FF3254','#FF3254','#FF3254'],
//                     hoverBackgroundColor:'rgb(252,10,19)'
//                 }],
//             },
//         });
//     }
//     else if(type==='line'){
//     graphique = new Chart(ctx.getContext('2d'), {
//         type: type,
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Grillage blindax',
//                 data: donnee,
//
//                 backgroundColor:gradient,
//             }],
//         },
//     });
//     }
//     else{
//         graphique = new Chart(ctx.getContext('2d'), {
//             type: type,
//             data: {
//                 labels: labels,
//                 datasets: [{
//                     label: 'Test',
//                     data: donnee,
//
//                     backgroundColor:gradient,
//                     hoverBackgroundColor:'rgb(64,252,52)'
//                 }],
//             },
//         });
//     }
//
// }
//
//
//
