
// requestAnimeAwait();

/*  // PROTOTYPE QUI RETOURNE UN MSG BDD EN LIGNE OU HORS LIGNE
function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://localhost:4000/api/informations')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLoutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLoutput(error);
        });
}
function generateSuccessHTMLoutput(response) {
    return '<h4>Result:</h4>' + '<h5>Status:</h5>'+ '<pre>' + response.status + '' + response.statusText + '</pre>' +
        '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +     '<pre>'+ JSON.stringify(response.data, null, '\t') + '</pre>';
}
function generateErrorHTMLoutput(error) {
    return '<h4>Result:</h4>' +'<h5>Message</h5>'+ '<pre>'+ error.message + '</pre>' +
        '<h5>Status:</h5>'+ '<pre>' + error.response.status + '' + error.response.statusText + '</pre>' +
        '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +     '<pre>'+ JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';

    axios.get('http://localhost:4000/api/informations', {
        params: {
            salesid: todoId
        }
    })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLoutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLoutput(error);
        });
}
performGetRequest2();
 */

