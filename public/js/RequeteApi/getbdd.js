var axios = require('axios');

async function makeRequest() {

    let res = await axios.head('http://webcode.me');

    console.log(`Status: ${res.status}`)
    console.log(`Server: ${res.headers.server}`)
    console.log(`Date: ${res.headers.date}`)
return "test";
}

