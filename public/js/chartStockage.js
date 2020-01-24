
document.addEventListener('DOMContentLoaded', function() {


    var ctx=document.getElementById('myChart');


    async function performGetRequest() {
        let response = await fetch(`http://localhost:4000/api/informations`);
        let data = await response.json();
        let donnee = data.map(function(item){
            return item.salesid;
        });
        let labels = data.map(function(item){
            return item.date;
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




