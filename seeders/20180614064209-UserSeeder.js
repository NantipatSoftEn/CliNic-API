'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    var data = {
      id: '',
      name: 'seeder',
      lastname: 'seeder',
      telephone: 'seeder',
      gender: 'male',
      symptom_id: 1,
      typeUser: 1,
      status: 1,
      created_at: new Date(),
      updated_at: new Date()
    };
    return queryInterface.bulkInsert('users', [data], {});
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