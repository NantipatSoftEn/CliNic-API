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
sequelize.sync()
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
    }));

sequelize.sync()
    .then(() => model.symptom.create({
        id: '',
        symptomname: 'headage',
        other: 'sdfdsfs'
    }));

    sequelize.sync()
    .then(() => model.period.create({
        id: '',
        periodTime: '2012-06-18 16:26:21',
        maxUser: 10,
        countUser:2, 
        createdAt: '',
        updatedAt: ''
    }));

sequelize.sync()
    .then(() => model.reseration.create({
        id: '',
        queue: 1,
        periodId: 1,
        userId:1, 
        createdAt: '',
        updatedAt: ''
    }));

const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;

model.users = require('../model/User')(sequelize, Sequelize);
model.symptom = require('../model/Symptom')(sequelize, Sequelize);
model.reseration = require('../model/Reseration')(sequelize, Sequelize);
model.period = require('../model/Period')(sequelize, Sequelize);


model.symptom.hasOne(model.users);
model.users.belongsTo(model.symptom); // take   symptom_id put user model


model.users.hasOne(model.reseration);
model.reseration.belongsTo(model.users) // take  user_id  put  reseration


model.period.hasMany(model.reseration); // take  period_id put reseration
model.reseration.belongsTo(model.period);

module.exports = model;