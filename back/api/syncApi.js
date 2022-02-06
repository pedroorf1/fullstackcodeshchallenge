const axios = require('axios')

module.exports = syncApi = axios.create({
    baseURL: process.env.Url_Local,
    headers: { 'Content-Type': 'application/json' }
});
