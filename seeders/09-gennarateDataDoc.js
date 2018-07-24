'use strict';
var data = [];


var  url     = ['/user' ,'/user'  ,'/user/:id'  ,'/user/:id'  ,'/user/:id',
                    '/symptom' ,'/symptom'  ,'/symptom/:id'  ,'/symptom/:id'  ,'/symptom/:id',
                    '/reseration' ,'/reseration'  ,'/reseration/:id'  ,'/reseration/:id'  ,'/reseration/:id',
                    '/profilepatent' ,'/profilepatent'  ,'/profilepatent/:id'  ,'/profilepatent/:id'  ,'/profilepatent/:id',
                    '/medicine' ,'/medicine'  ,'/medicine/:id'  ,'/medicine/:id'  ,'/medicine/:id',
                    '/period' ,'/period'  ,'/period/:id'  ,'/period/:id'  ,'/period/:id',
                    '/dateclose' ,'/dateclose'  ,'/dateclose/:id'  ,'/dateclose/:id'  ,'/dateclose/:id']

var action = [
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE '
]
var pathparameters = [
                                    'non-required','non-required','userId','userId','userId',
                                    'non-required','non-required','symptomId','symptomId','symptomId',
                                    'non-required','non-required','reserationId','reserationId','reserationId',
                                    'non-required','non-required','profilepatentId','profilepatentId','profilepatentId',
                                    'non-required','non-required','medicineId','medicineId','medicineId',
                                    'non-required','non-required','periodId','periodId','periodId',
                                    'non-required','non-required','datecloseId','datecloseId','datecloseId'
                                  ]


var dataReturn =[  `{
      "id": 1,
      "name": "arm",
      "lastname": "horyshit",
      "telephone": "08878",
      "gender": "male",
      "symptomId": 1,
      "typeUser": 1,
      "status": "1",
      "createdAt": "2018-07-23T23:59:58.000Z",
      "updatedAt": "2018-07-23T23:59:58.000Z",
      "symptom": {
          "id": 1,
          "symptomname": "headage",
          "other": "sdfdsfs",
          "createdAt": "2018-07-23T23:58:09.000Z",
          "updatedAt": "2018-07-23T23:58:09.000Z"
      }'
  }`, ]

for (var i = 0; i < url.length; i++) {
  data[i] = {
    id: '',
    url: url[i],
    action: action[i],
    pathparameters: pathparameters[i],
    respone:'200 Success',
    data: dataReturn[0],
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