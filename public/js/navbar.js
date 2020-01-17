

  document.getElementById("navbar").innerHTML += '<nav class="items-baseline relative bg-black w-full flex flex-wrap items-center justify-between py-2">\n' +
        '    <div class="xs:justify-end justify-center sm:w-auto w-full flex flex-no-shrink items-stretch h-12">\n' +
        '        <a href="/" class="flex-no-grow flex-no-shrink relative my-2 mx-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark text-3xl">Interfiltre</a>\n' +
        '<a href="" class="flex-no-grow flex-no-shrink relative my-2 mx-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark text-3xl" id="dateheure"></a>\n' +
        '    </div>\n' +
        '    <div class="text-center text-white sm:w-auto w-full  rounded-lg flex-wrap">\n' +
        '        <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">\n' +

        '            <a href="../statistique.html" class="text-center no-underline  border-b-4 border-white mx-3 py-2 m-2 sm:inline-block hover:bg-gray-800  hover:border-blue-600" href="../statistique.html">Statistique</a>\n' +
        '            <a href="/stockage.html" class="text-center no-underline  border-b-4 border-white mx-3 py-2 m-2 sm:inline-block hover:bg-gray-800  hover:border-blue-600" >stockage</a>\n' +
        '            <a href="/connexion.html" class="text-center no-underline  border-b-4 border-white mx-3 py-2 m-2 sm:inline-block hover:bg-gray-800  hover:border-blue-600" >Connexion</a>\n' +
        '\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</nav></div>';

  function getDateTime() {
    var date = new Date().toLocaleString(); // dd:mm:y
    document.getElementById("dateheure").innerHTML = date;
    setTimeout(getDateTime, 1000); // mise à jour du contenu "getDateTime" toutes les secondes
  }

  getDateTime();

