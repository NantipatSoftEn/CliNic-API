'use strict';
var faker = require('faker');
var sysmptom = ['allergy',
  'appendicitis',
  'asthmatic',
  'athlete’s foot',
  'bleeding', 'blister',
  'broken bone',
  'bruise', 'burn',
  'chicken pox'
];

var data =[];
for (var i = 0; i < sysmptom.length; i++) {
  var sysmptomRamdom = sysmptom[Math.floor(Math.random() * sysmptom.length)];
  data[i] = {
    id: '',
    symptomname: sysmptomRamdom,
    other: faker.lorem.sentence(),
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
    return queryInterface.bulkInsert('symptoms', data, {});
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