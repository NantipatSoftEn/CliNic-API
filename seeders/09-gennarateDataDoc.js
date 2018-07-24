'use strict';
var data = [];


var  url     = ['/user' ,'/user'  ,'/user/:id'  ,'/user/:id'  ,'/user/:id',
                    '/symptom' ,'/symptom'  ,'/symptom/:id'  ,'/symptom/:id'  ,'/symptom/:id',
                    '/reseration' ,'/reseration'  ,'/reseration/:id'  ,'/reseration/:id'  ,'/reseration/:id',
                    '/profilepatent' ,'/profilepatent'  ,'/profilepatent/:id'  ,'/profilepatent/:id'  ,'/profilepatent/:id',
                    '/medicine' ,'/medicine'  ,'/medicine/:id'  ,'/medicine/:id'  ,'/medicine/:id',
                    '/period' ,'/period'  ,'/period/:id'  ,'/period/:id'  ,'/period/:id',
                    '/dateclose' ,'/dateclose'  ,'/dateclose/:id'  ,'/dateclose/:id'  ,'/dateclose/:id',]



var action = ['GET' ,'POST','GET' ,'PUT '  ,'DELETE ']

var param = [ '']
for (var i = 0; i < ; i++) {
  data[i] = {
    id: '',
    url: url[i],
    action: 'GET',
    pathparameters: 'non-required',
    respone:'200 Success',
    data: null,
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