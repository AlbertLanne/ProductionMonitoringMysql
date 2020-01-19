const axios = require('public/js/statistique/api/axios');

async function getNumberOfFollowers() {

    let res = await axios.get('https://api.github.com/users/albertlanne');

    let nOfFollowers = res.data.followers;
    let location = res.data.location;

    console.log(`# of followers: ${nOfFollowers}`)
    console.log(`Location: ${location}`)
}

getNumberOfFollowers();
