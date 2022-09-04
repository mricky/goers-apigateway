const apiAdapter = require('../../routes/apiAdapter');
const jwt = require('jsonwebtoken');
var cors = require('cors')
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_ACCESS_TOKEN_EXPIRED
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req,res) => {
   
    try {
        const auth = await api.post('/sessions', req.body);
        const data = auth.data.data;
        const token = jwt.sign({data},JWT_SECRET,{expiresIn: JWT_ACCESS_TOKEN_EXPIRED}) 
    
        return res.json({
            status: 'success',
            data : {
                token:token
            }
        })
    } catch (error){
        if(error.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'error',message: 'service unavailable'});

        }
        const {status, data} = error.response;
        return res.status(status).json(data);
       
    }

}
