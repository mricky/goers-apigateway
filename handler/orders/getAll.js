const apiAdapter = require('../../routes/apiAdapter');

const {
    URL_SERVICE_PRODUCT
} = process.env

const api = apiAdapter(URL_SERVICE_PRODUCT);

module.exports = async (req,res) => {
   
    try 
    {
        const orders = await api.get('/orders',req.body);
      
        const data = orders.data

        return res.json(data);
    } catch (error){
        
        if(error.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'error',message: 'service unavailable'});

        }
        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}