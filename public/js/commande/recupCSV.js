async function recup()
{
    var nomFichierCSV = document.getElementById("newCSV").value;
    let response = await fetch('http://localhost:4000/api/SearchCSV');
    let data = await response.json();
    testArray("Ceci est un test");
    alert('test');
    }