function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLoutput(response);
        })
        .catch(function (error) {

resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}
function generateSuccessHTMLoutput(response) {
    return '<h4>Result:</h4>' + '<h5>Status:</h5>'+ '<pre>' + response.status + '' + response.statusText + '</pre>' +
    '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +     '<pre>'+ JSON.stringify(response.data, null, '\t') + '</pre>';
}
performGetRequest1();
