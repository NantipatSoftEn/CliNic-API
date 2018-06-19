var express = require('express')
var Resource = require('express-resource')
var app = express();

//var router = express.Router();

var userServices = require('../service/UserServices');
var reserationServices = require('../service/ReserationServices');
var symptomServices = require('../service/SymptomServices');
var profilepatentServices = require('../service/ProfilePatentServices');
var medicineServices = require('../service/MedicineServices');
var periodServices = require('../service/PeriodServices');
var datecloseServices = require('../service/DateCloseServices');

app.resource('user', userServices);
app.resource('reseration', reserationServices);
app.resource('symptom', symptomServices);
app.resource('profilepatent', profilepatentServices);
app.resource('medicine', medicineServices);
app.resource('period',  periodServices);
app.resource('dateclose', datecloseServices);
//app.resource('', );


module.exports = app;