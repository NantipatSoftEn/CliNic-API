var express  = require('express')
var Resource = require('express-resource')
var app = express();

 //var router = express.Router();

var userServices          = require('../service/UserServices');
var reserationServices = require('../service/ReserationServices');

app.resource('user', userServices );
app.resource('reseration',  reserationServices );

//app.resource('', );


module.exports = app;