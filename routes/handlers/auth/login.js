const apiAdapter = require('../../apiAdapter');
const jwt = require('jsonwebtoken');

const {
    URL_SERVICE_USER,
    JWT_SECRET
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req,res) => {
   
    try {
        const auth = await api.post('/sessions', req.body);

        //const data = auth.data;

        console.log(auth);

    } catch (error){
        console.log(error.response)
    }
}
