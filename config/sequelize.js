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



module.exports = model; 