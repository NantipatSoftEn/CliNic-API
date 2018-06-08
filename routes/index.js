var express = require('express')
var Resource = require('express-resource')
var app = express();

//var router = express.Router();

var rateController = require('../Controller/rateController');
var moneyController             = require('../Controller/moneyController');


app.resource('rate', rateController);

app.resource('money', moneyController);
//app.resource('', );


module.exports = app;