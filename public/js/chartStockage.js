
document.addEventListener('DOMContentLoaded', function() {


    var ctx = document.getElementById('myChart');



    async function performGetRequest() {
        let response = await fetch(`http://localhost:4000/api/fulldata`);
        let data = await response.json();
        let donnee = data.map(function (item) {
            return item.total;
        });
        let labels = data.map(function (item) {
            return item.filtre;
        });

        console.log(donnee);
        console.log(labels);
        var graphique = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Test',
                    data: donnee
                }],
            },
        });
    }
performGetRequest();
});

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




