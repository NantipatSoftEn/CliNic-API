'use strict';
var data = [];
var medicine_name = ['adhesive plaster',
  'analgesic',
  'antacid',
  'antibacteria',
  'antidote',
  'vitamin',
  'tweezers',
  'tongue depressor',
  'sleeping pill',
  'sedative'
];

for (var i = 0; i < medicine_name.length; i++) {
  var medicine_nameRamdom = medicine_name[Math.floor(Math.random() * medicine_name.length)];
  data[i] = {
    id: '',
    medicine_name: medicine_nameRamdom,
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

    return queryInterface.bulkInsert('medicines', data, {});

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