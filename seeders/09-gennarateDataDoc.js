'use strict';
var data = [];
for (var i = 0; i < 5; i++) {
  data[i] = {
    id: '',
    action: 'GET',
    pathparameters: 'non-required',
    respone:`[
        {
            "id": 1,
            "name": "testasdsadadsd",
            "lastname": "sdasd",
            "telephone": "848484",
            "gender": "female",
            "symptomId": 1,
            "typeUser": 1,
            "status": "1",
            "createdAt": "2018-06-20T11:11:13.000Z",
            "updatedAt": "2018-06-22T03:34:27.000Z",
            "symptom": {
                "id": 1,
                "symptomname": "allergy",
                "other": "Eveniet et voluptatem nobis illum est consequuntur fugiat mollitia.",
                "createdAt": "2018-06-20T11:11:13.000Z",
                "updatedAt": "2018-06-20T11:11:13.000Z"
            }
        }
    ]`,
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
   return queryInterface.bulkInsert('datapis', data, {});
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