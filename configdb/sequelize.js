'use strict';
const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('clinic', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
});


sequelize.sync()
const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;


model.reseration = require('../models/Reseration')(sequelize, Sequelize);
model.period = require('../models/Period')(sequelize, Sequelize);
model.users = require('../models/User')(sequelize, Sequelize);
model.symptom = require('../models/Symptom')(sequelize, Sequelize);
model.profilepatent = require('../models/Profilepatent')(sequelize, Sequelize);
model.medicine = require('../models/Medicine')(sequelize, Sequelize);
model.dateclose = require('../models/DateClose')(sequelize, Sequelize);


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