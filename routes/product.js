const express = require('express');
const router = express.Router();
var cors = require('cors')
const productHandler = require('../handler/products')

router.get('/',cors(),  productHandler.getAll)

module.exports = router