const axios = require('axios');

module.exports = (baseUrl) => {
    console.log('::HIT API',baseUrl)
    return axios.create({
        baseUrl: baseUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}