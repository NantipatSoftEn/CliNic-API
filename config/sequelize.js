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
// sequelize.sync();
// sequelize.sync()
//     .then(() => model.users.create({
//         id: '',
//         name: 'arm',
//         lastname: 'horyshit',
//         telephone: '08878',
//         gender: 'male',
//         symptomId: 1,
//         typeUser: 1,
//         status: 1,
//         createdAt: '',
//         updatedAt: ''
//     }));

// sequelize.sync()
//     .then(() => model.symptom.create({
//         id: '',
//         symptomname: 'headage',
//         other: 'sdfdsfs'
//     }));
const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;
model.users = require('../model/User')(sequelize, Sequelize);
model.symptom = require('../model/Symptom')(sequelize, Sequelize);
model.users.belongsTo(model.symptom);
model.symptom.hasOne(model.users);
module.exports = model;