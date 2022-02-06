const axios = require('axios')

module.exports = api = axios.create({
    baseURL: process.env.Api_baseUrl,
    headers: { 'Content-Type': 'application/json' }
});
