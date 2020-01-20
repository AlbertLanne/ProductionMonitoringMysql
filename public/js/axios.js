
var axios = require('axios');

function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://localhost:4000/api/informations')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLoutput(response);
        })
        .catch(function (error) {

            resultElement.innerHTML = console.log("prout schnek");
        });
}
function generateSuccessHTMLoutput(response) {
    return '<h4>Result:</h4>' + '<h5>Status:</h5>'+ '<pre>' + response.status + '' + response.statusText + '</pre>' +
        '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +     '<pre>'+ JSON.stringify(response.data, null, '\t') + '</pre>';
}
performGetRequest1();