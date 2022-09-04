const axios = require("axios");

module.exports = (baseUrl) => {
    console.log('::HIT API',baseUrl)
    return axios.create({
        baseURL: baseUrl
    });
}