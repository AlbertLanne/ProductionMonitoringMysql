
document.addEventListener('DOMContentLoaded', function() {


    var ctx=document.getElementById('myChart');


    async function performGetRequest() {

        var testicule = [{"jour":"Lundi","vente":"5"},{"jour":"Mardi","vente":"1"},{"jour":"Mercredi","vente":"10"},{"jour":"Jeudi","vente":"7"},{"jour":"Vendredi","vente":"3"},{"jour":"Samedi","vente":"12"},{"jour":"Dimanche","vente":"2"}]



        let response = await fetch(`http://localhost:4000/api/fulldata`);
        let data = await response.json();
        let donnee = testicule.map(function(item){
            return item.vente;
        });
        let labels = testicule.map(function(item){
            return item.jour;
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




