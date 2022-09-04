const express = require('express');
const router = express.Router();
var cors = require('cors')
const ordersHandler = require('../handler/orders')

router.get('/',cors(), ordersHandler.getAll)
router.post('/',cors(),ordersHandler.create);
module.exports = router