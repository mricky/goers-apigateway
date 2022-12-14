const apiAdapter = require('../../routes/apiAdapter');

const {
    URL_SERVICE_PRODUCT
} = process.env

const api = apiAdapter(URL_SERVICE_PRODUCT);

module.exports = async (req,res) => {

    try 
    {
        const product = await api.get('/products',req.body);
      
        const data = product.data

        return res.json(data);
    } catch (error){
        
        if(error.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'error',message: 'service unavailable'});

        }
        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}