var express  = require('express')
var Resource = require('express-resource')
var app = express();

 //var router = express.Router();

var userController              = require('../service/UserServices');

app.resource('test', userController);

//app.resource('', );


module.exports = app;