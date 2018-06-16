'use strict';


var data = [];

var user_id = [1,2,3,4,5]
var period_id = [1,2,3,4,5];


for (var i = 0; i < 10; i++) {

  var user_idRandom = user_id[Math.floor(Math.random() * user_id.length)];
  var period_idRandom = period_id[Math.floor(Math.random() * period_id.length)];
  data[i] = {
    
    queue: i,
    user_id: user_idRandom,
    period_id: period_idRandom,
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
    return queryInterface.bulkInsert('reserations', data, {});
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