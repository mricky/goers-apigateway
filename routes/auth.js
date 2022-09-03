var express = require('express');
var router = express.Router();

const authHandler = require('./handlers/auth')

router.post('/login',authHandler.login)

module.exports = router