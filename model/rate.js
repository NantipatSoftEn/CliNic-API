var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var sequelize = require('./config');

const rate = sequelize.define('rate', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,

  },
  currency: {
    type: Sequelize.STRING
  },
  rate_cur: {
    type: Sequelize.FLOAT
  }
});

// sequelize.sync() 
//   .then(() => rate.create({
//     id: '',
//     currency: 'USD',
//     rate_cur: 34
//   }));
// sequelize.sync()
//     .then(() => rate.create({
//       id: '',
//       currency: 'EU',
//       rate_cur: 40
//     }));
// sequelize.sync()
// .then(() => rate.create({
//     id: '',
//     currency: 'THAI',
//     rate_cur: 20
//  }));

module.exports = rate;