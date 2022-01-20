const axios =  require('axios');

const api = axios.create({
     baseURL: "https://www.fruityvice.com/api"

});

module.exports = api;