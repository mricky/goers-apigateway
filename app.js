require('dotenv').config();

var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/orders');

const verifyToken = require('./middlewares/verifyToken')
var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter)
app.use('/auth',authRouter);
app.use('/products',verifyToken,productRouter);
app.use('/orders',verifyToken,orderRouter)

module.exports = app;
