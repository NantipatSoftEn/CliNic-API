'use strict';
var data = [];

var max_user = [10, 20, 30]
var count_user = [1, 5, 3, 7, 8, 9];


for (var i = 0; i < 5; i++) {
  var max_userRamdom = max_user[Math.floor(Math.random() * max_user.length)];
  var count_userRamdom = count_user[Math.floor(Math.random() * count_user.length)];
  data[i] = {
    id: '',
    period_time: new Date(),
    max_user: max_userRamdom,
    count_user: count_userRamdom,
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
   return queryInterface.bulkInsert('periods', data, {});
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