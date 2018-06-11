'use strict';
const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.server, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


    // create table
     sequelize.sync(); 

    // sequelize.sync()
    // .then(() => model.users.create({
    //   id: '',
    // refId: '5730213',
    // name: 'arm',
    // email: 'arm@gmail.com',
    // username: 'admin',
    // phone:'084448',
    // pin:'1150',
    // password: 'asaasdada',
    // createdAt:'',
    // updatedAt:''
    // }));
const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;
model.users = require('../model/User')(sequelize, Sequelize);
model.locations = require('../model/Location')(sequelize, Sequelize);
model.users.hasMany(model.locations);
model.locations.belongsTo(model.users);
module.exports = model;