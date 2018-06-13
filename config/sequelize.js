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
    sequelize.sync()
    .then(() => model.symptom.create({
        id: '',
        symptomname: 'headage',
        other: 'sdfdsfs'
    }))
    .then(() => model.users.create({
        id: '',
        name: 'arm',
        lastname: 'horyshit',
        telephone: '08878',
        gender: 'male',
        symptomId: 1,
        typeUser: 1,
        status: 1,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.period.create({
        id: '',
        periodTime: '2012-06-18 16:26:21',
        maxUser: 10,
        countUser: 2,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.reseration.create({
        id: '',
        queue: 1,
        userId: 1,
        periodId: 1,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.dateclose.create({
        id: '',
        date: '2012-06-18 16:26:21',
        house: '16:26:21',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.medicine.create({
        id: '',
        medicineName: 'parasettamal',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.profilepatent.create({
        id: '',
        userId: 1,
        medicineId: 1,
        diagnose: 'Not ok',
        createdAt: '',
        updatedAt: ''
    }))


const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;


model.reseration = require('../model/Reseration')(sequelize, Sequelize);
model.period = require('../model/Period')(sequelize, Sequelize);
model.users = require('../model/User')(sequelize, Sequelize);
model.symptom = require('../model/Symptom')(sequelize, Sequelize);
model.profilepatent = require('../model/Profilepatent')(sequelize, Sequelize);
model.medicine = require('../model/Medicine')(sequelize, Sequelize);
model.dateclose = require('../model/DateClose')(sequelize, Sequelize);


model.users.belongsTo(model.symptom);
model.symptom.hasOne(model.users); //  take symptomId to users

model.reseration.belongsTo(model.period);
model.period.hasMany(model.reseration); //  take periodId to reseration

model.reseration.belongsTo(model.users);
model.users.hasMany(model.reseration); // take userId to reseration

model.profilepatent.belongsTo(model.users);
model.users.hasMany(model.profilepatent); // take profilepatent to user
 
model.profilepatent.belongsTo(model.medicine);
model.medicine.hasMany(model.profilepatent); //  take medicineId to profilepatent
module.exports = model;