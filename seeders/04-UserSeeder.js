'use strict';
var faker = require('faker');

var data = [];

var gender = ['male','female'];
var symptom_id = [1,2,3,4,5,6,7,8,9,10]
var typeUser = [1,2,3];
var status =[1,2,3];

for(var i=0;i<5;i++){

  var genderRamdom = gender[Math.floor(Math.random()*gender.length)];
  var symptom_idRamdom = symptom_id[Math.floor(Math.random()*symptom_id.length)];
  var typeUserRamdom = typeUser[Math.floor(Math.random()*typeUser.length)];
  var statusRamdom = status[Math.floor(Math.random()*status.length)];
   data[i] = {
    id: '',
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    telephone: faker.phone.phoneNumber(),
    gender: genderRamdom,
    symptom_id:symptom_idRamdom,
    typeUser: typeUserRamdom,
    status: statusRamdom,
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
    return queryInterface.bulkInsert('users', data, {});
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