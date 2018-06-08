var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var sequelize = require('./config');

const money = sequelize.define('money', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.FLOAT
  },
  type_id: {
    type: Sequelize.INTEGER
  },
  edit: {
    type: Sequelize.STRING
  },
  rate_id: {
    type: Sequelize.INTEGER,
  }
});
sequelize.sync()
  .then(() => money.create({
    id: '',
    amount: 10000,
    type_id: 1,
    edit: 'edit testing',
    'rate_id':1
  }));
  module.exports = money;