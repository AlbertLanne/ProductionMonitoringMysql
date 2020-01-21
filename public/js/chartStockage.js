document.addEventListener('DOMContentLoaded', function() {

    var ctx=document.getElementById('myChart');

// var jsonfile = performGetRequest();

    let jsonfile = {
        "jsonarray": [{
            "name": "Joe",
            "age": 12
        }, {
            "name": "Tom",
            "age": 14
        }]
    };

    let name = [];
    let age = [];

    try {
        jsonfile.jsonarray.map((item) => {
            age.push(item.age);
            name.push(item.name);

        });

        var graphique = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: [...name], //['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
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
                    data: [...age]//[getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
                }]
            },
        })
    }catch(error){
        console.log(error);

    }

 // var data = jsonfile.jsonarray.map(function(e){
 //     console.log(e.age);
 //     return e.age;
 //
 // });





    function getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5

    }

    // document.getElementById("SelectBox").addEventListener("change",swapGraph);
    document.getElementById("SelectBox").addEventListener("change",onHide)        ;

    function onHide(){
        if (document.getElementById("SelectBox").value == "default"){
            document.getElementById("myChart").style.visibility = 'hidden';
        }
         else document.getElementById("myChart").style.visibility ='visible';

    }

 // function swapGraph(){
 //                if(document.getElementById("SelectBox").value == "blindax"){
 //                    graphique.data.datasets[0].data[0] = data;
 //                    graphique.data.datasets[0].data[1] = [60];
 //                    graphique.data.datasets[0].data[2] = [60];
 //                    graphique.data.datasets[0].data[3] = [60];
 //                    graphique.data.datasets[0].data[4] = [60];
 //                    graphique.data.datasets[0].data[5] = [60];
 //                    graphique.data.datasets[0].data[6] = [60];
 //
 //                }
 //                else
 //                {
 //                    graphique.data.datasets[0].data[0] = [40];
 //                    graphique.data.datasets[0].data[1] = [40];
 //                    graphique.data.datasets[0].data[2] = [60];
 //                    graphique.data.datasets[0].data[3] = [60];
 //                    graphique.data.datasets[0].data[4] = [60];
 //                    graphique.data.datasets[0].data[5] = [60];
 //                    graphique.data.datasets[0].data[6] = [60];
 //                }
 //
 //
 //
 //                // graphique.config.data.labels =["Test","Charlie"];
 //                graphique.update();
 //
 //    }



     onHide();
        });




