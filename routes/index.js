var express = require('express')
var Resource = require('express-resource')
var app = express();

//var router = express.Router();

var rateController = require('../Controller/rateController');



app.resource('rate', rateController);
//app.resource('', );


module.exports = app;