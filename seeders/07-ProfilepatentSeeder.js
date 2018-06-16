'use strict';
var faker = require('faker');
var data = [];
var user_id = [1,2,3,4,5];
var medicine_id = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < 10; i++) {
  var user_idRandom = user_id[Math.floor(Math.random() * user_id.length)];
  var medicine_idRandom = medicine_id[Math.floor(Math.random() * medicine_id.length)];
  data[i] = {
    id: i,
    user_id: user_idRandom,
    medicine_id: medicine_idRandom,
    diagnose: faker.lorem.sentence(),
    created_at: new Date(),
    updated_at: new Date()
  };
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
  */
    return queryInterface.bulkInsert('profilepatents', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};