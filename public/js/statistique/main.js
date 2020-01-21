// async function performGetRequest() {
//         var resultElement = await document.getElementById('getResult1');
//         resultElement.innerHTML = await '';
//         fetch(`http://localhost:4000/api/informations`)
//             .then(response => response.json())
//             .then(json => {
//                 resultElement.innerHTML = '<pre class="bg-red-300">' +  json.status + ' ' + json.statusText + '</pre>' +
//                     '<p class="text-xl">Headers:</h5>' + json;
//             });
// }
async function performGetRequest()
{
    var resultElement = await document.getElementById('getResult1');
    resultElement.innerHTML =  '';
    let response = await fetch(`http://localhost:4000/api/informations`);
    let data = await response.json()
    resultElement.innerHTML = '<pre class="bg-red-300">' +  response.status + ' ' + response.statusText + '</pre>' +
        '<p class="text-xl">Headers:</p></h5>'+'<p class="font-thin">' + data + '<p>' +
        '<pre>'+ JSON.stringify(data, null, '\t') + '</pre>' ;
}




/*

fetch('http://localhost:4000/api/informations')
    .then((response) => {
        // return response.json();
        return '<p class="text-2xl">Résultat:</p>' +
            '<p class="text-xl">Status:</p>'+
            '<pre class="bg-red-300">' + response.status + '' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' + response.json() +'<pre>'+ JSON.stringify(response.data, null, '\t') + '</pre>';
    })
    .then((myJson) => {
        resultElement.innerHTML = myJson;
    });

*/









// async function avecAsync() {
//     const res = await fetch('http://localhost:4000/api/informations');
//     const json = await res.json();
//     resultElement.innerHTML = '<pre class="bg-red-300">' + awres.status + ' ' + res.statusText + '</pre>' +
//         '<p class="text-xl">Headers:</h5>' + res.json() + json.field;
// }

// avecAsync et sansAsync sont EXACTEMENT pareil, c'est juste la syntaxe qui change
// const a = sansAsync();
// const b = avecAsync();


// function performGetRequest() {
//     var resultElement = document.getElementById('getResult1');
//     resultElement.innerHTML = '';
//
//
//     fetch('http://localhost:4000/api/informations')
//         .then(res => {
//             try {
//                 if (res.ok) {
//                     resultElement.innerHTML = '<pre class="bg-red-300">' + res.status + ' ' + res.statusText + '</pre>' +
//                         '<p class="text-xl">Headers:</h5>' + res.json();
//                 } else {
//                     throw new Error(res)
//                 }
//             }
//             catch (err) {
//                 console.log(err.message)
//                 return WHATEVER_YOU_WANT_TO_RETURN
//             }
//         })
//         .then (resJson => {
//             return resJson.data
//         })
//         .catch(err => console.log(err))

// function performGetRequest1() {
//     var resultElement = document.getElementById('getResult1');
//     resultElement.innerHTML = '';
//
//     axios.get('http://localhost:4000/api/informations')
//         .then(function (response) {
//             resultElement.innerHTML = generateSuccessHTMLoutput(response);
//         })
//         .catch(function (error) {
//             resultElement.innerHTML = generateErrorHTMLoutput(error);
//         });
// }
// function generateSuccessHTMLoutput(response) {
//     return '<h4>Result:</h4>' + '<h5>Status:</h5>'+ '<pre>' + response.status + '' + response.statusText + '</pre>' +
//         '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(response.headers, null, '\t') + '</pre>' +
//         '<h5>Data:</h5>' +     '<pre>'+ JSON.stringify(response.data, null, '\t') + '</pre>';
// }
// function generateErrorHTMLoutput(error) {
//     return '<h4>Result:</h4>' +'<h5>Message</h5>'+ '<pre>'+ error.message + '</pre>' +
//         '<h5>Status:</h5>'+ '<pre>' + error.response.status + '' + error.response.statusText + '</pre>' +
//         '<h5>Headers:</h5>' + '<pre>'+ JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
//         '<h5>Data:</h5>' +     '<pre>'+ JSON.stringify(error.response.data, null, '\t') + '</pre>';
// }
//
//
// function performGetRequest2() {
//     var resultElement = document.getElementById('getResult2');
//     var todoId = document.getElementById('todoId').value;
//     resultElement.innerHTML = '';
//
//     axios.get('http://localhost:4000/api/informations', {
//         params: {
//             salesid: todoId
//         }
//     })
//         .then(function (response) {
//             resultElement.innerHTML = generateSuccessHTMLoutput(response);
//         })
//         .catch(function (error) {
//             resultElement.innerHTML = generateErrorHTMLoutput(error);
//         });
// }
// performGetRequest2();
performGetRequest();
