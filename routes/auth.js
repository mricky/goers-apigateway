var express = require('express');
var router = express.Router();
var cors = require('cors')
const authHandler = require('../handler/auth')

router.post('/login',cors(),authHandler.login)
router.post('/register', authHandler.register)

module.exports = router