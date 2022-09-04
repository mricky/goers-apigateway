const apiAdapter = require('../../routes/apiAdapter');
const {
    URL_SERVICE_USER
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req,res) => {
   
    try {
       
        const auth = await api.post('/users', req.body);

        const data = auth.data.data;
       
        return res.json(data);
    } catch (error){
        if(error.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'error',message: 'service unavailable'});

        }
        const {status, data} = error.response;
        return res.status(status).json(data);
       
    }

}
