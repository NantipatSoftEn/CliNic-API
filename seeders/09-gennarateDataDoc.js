'use strict';
var data = [];


var  url     = ['/user' ,'/user'  ,'/user/:id'  ,'/user/:id'  ,'/user/:id',
                    '/symptom' ,'/symptom'  ,'/symptom/:id'  ,'/symptom/:id'  ,'/symptom/:id',
                    '/reseration' ,'/reseration'  ,'/reseration/:id'  ,'/reseration/:id'  ,'/reseration/:id',
                    '/profilepatent' ,'/profilepatent'  ,'/profilepatent/:id'  ,'/profilepatent/:id'  ,'/profilepatent/:id',
                    '/medicine' ,'/medicine'  ,'/medicine/:id'  ,'/medicine/:id'  ,'/medicine/:id',
                    '/period' ,'/period'  ,'/period/:id'  ,'/period/:id'  ,'/period/:id',
                    '/dateclose' ,'/dateclose'  ,'/dateclose/:id'  ,'/dateclose/:id'  ,'/dateclose/:id'];

var action = [
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE ',
  'GET' ,'POST','GET' ,'PUT '  ,'DELETE '
];
var pathparameters = [
                                    'non-required','non-required','userId','userId','userId',
                                    'non-required','non-required','symptomId','symptomId','symptomId',
                                    'non-required','non-required','reserationId','reserationId','reserationId',
                                    'non-required','non-required','profilepatentId','profilepatentId','profilepatentId',
                                    'non-required','non-required','medicineId','medicineId','medicineId',
                                    'non-required','non-required','periodId','periodId','periodId',
                                    'non-required','non-required','datecloseId','datecloseId','datecloseId'
                                  ];

                                  var dataReturn = [
                                    ` {
                                      "id": 1,
                                      "name": "Kailyn",
                                      "lastname": "Murazik",
                                      "telephone": "(901) 987-6917",
                                      "gender": "male",
                                      "symptomId": 6,
                                      "typeUser": 1,
                                      "status": "2",
                                      "createdAt": "2018-07-24T03:15:58.000Z",
                                      "updatedAt": "2018-07-24T03:15:58.000Z",
                                      "symptom": {
                                          "id": 6,
                                          "symptomname": "broken bone",
                                          "other": "Animi ut vel quidem exercitationem.",
                                          "createdAt": "2018-07-24T03:15:58.000Z",
                                          "updatedAt": "2018-07-24T03:15:58.000Z"
                                      }
                                  }`, 
                                  'success',
                                  ` {
                                    "id": 1,
                                    "name": "Kailyn",
                                    "lastname": "Murazik",
                                    "telephone": "(901) 987-6917",
                                    "gender": "male",
                                    "symptomId": 6,
                                    "typeUser": 1,
                                    "status": "2",
                                    "createdAt": "2018-07-24T03:15:58.000Z",
                                    "updatedAt": "2018-07-24T03:15:58.000Z",
                                    "symptom": {
                                        "id": 6,
                                        "symptomname": "broken bone",
                                        "other": "Animi ut vel quidem exercitationem.",
                                        "createdAt": "2018-07-24T03:15:58.000Z",
                                        "updatedAt": "2018-07-24T03:15:58.000Z"
                                    }
                                }`,'success','success' ,


                                //  symptomname

                                ` {
                                  "id": 1,
                                  "symptomname": "asthmatic",
                                  "other": "Reprehenderit dolorem a dolorem consequatur.",
                                  "createdAt": "2018-07-24T03:15:58.000Z",
                                  "updatedAt": "2018-07-24T03:15:58.000Z"
                              }` ,'success',
                              `{
                                "id": 1,
                                "symptomname": "asthmatic",
                                "other": "Reprehenderit dolorem a dolorem consequatur.",
                                "createdAt": "2018-07-24T03:15:58.000Z",
                                "updatedAt": "2018-07-24T03:15:58.000Z"
                            }`,'success','success' ,




                            //  reseration 


                            `{
                              "id": 1,
                              "queue": "0",
                              "userId": 4,
                              "periodId": 3,
                              "createdAt": "2018-07-24T03:40:55.000Z",
                              "updatedAt": "2018-07-24T03:40:55.000Z",
                              "period": {
                                  "id": 3,
                                  "periodTime": "2018-07-24T03:40:55.000Z",
                                  "maxUser": 10,
                                  "countUser": 8,
                                  "createdAt": "2018-07-24T03:40:55.000Z",
                                  "updatedAt": "2018-07-24T03:40:55.000Z"
                              }`,'success' ,
                              `{
                                "id": 1,
                                "queue": "0",
                                "userId": 4,
                                "periodId": 3,
                                "createdAt": "2018-07-24T03:40:55.000Z",
                                "updatedAt": "2018-07-24T03:40:55.000Z",
                                "period": {
                                    "id": 3,
                                    "periodTime": "2018-07-24T03:40:55.000Z",
                                    "maxUser": 10,
                                    "countUser": 8,
                                    "createdAt": "2018-07-24T03:40:55.000Z",
                                    "updatedAt": "2018-07-24T03:40:55.000Z"
                                }`,'success','success',

                                // profilepatent

                                `{
                                  "id": 1,
                                  "userId": 4,
                                  "medicineId": 10,
                                  "diagnose": "Deleniti enim commodi quod recusandae provident voluptatem molestiae voluptatibus dicta.",
                                  "createdAt": "2018-07-24T03:46:26.000Z",
                                  "updatedAt": "2018-07-24T03:46:26.000Z",
                                  "medicine": {
                                      "id": 10,
                                      "medicineName": "antibacteria",
                                      "createdAt": "2018-07-24T03:46:26.000Z",
                                      "updatedAt": "2018-07-24T03:46:26.000Z"
                                  }
                              }`, 'success',
                              `  {
                                "id": 1,
                                "userId": 4,
                                "medicineId": 10,
                                "diagnose": "Deleniti enim commodi quod recusandae provident voluptatem molestiae voluptatibus dicta.",
                                "createdAt": "2018-07-24T03:46:26.000Z",
                                "updatedAt": "2018-07-24T03:46:26.000Z",
                                "medicine": {
                                    "id": 10,
                                    "medicineName": "antibacteria",
                                    "createdAt": "2018-07-24T03:46:26.000Z",
                                    "updatedAt": "2018-07-24T03:46:26.000Z"
                                }
                            }`,'success','success',


                            //  medicine
                            `  {
                              "id": 1,
                              "userId": 4,
                              "medicineId": 10,
                              "diagnose": "Deleniti enim commodi quod recusandae provident voluptatem molestiae voluptatibus dicta.",
                              "createdAt": "2018-07-24T03:46:26.000Z",
                              "updatedAt": "2018-07-24T03:46:26.000Z",
                              "medicine": {
                                  "id": 10,
                                  "medicineName": "antibacteria",
                                  "createdAt": "2018-07-24T03:46:26.000Z",
                                  "updatedAt": "2018-07-24T03:46:26.000Z"
                              }
                          }`, 'success',
                          `{
                            "id": 1,
                            "userId": 4,
                            "medicineId": 10,
                            "diagnose": "Deleniti enim commodi quod recusandae provident voluptatem molestiae voluptatibus dicta.",
                            "createdAt": "2018-07-24T03:46:26.000Z",
                            "updatedAt": "2018-07-24T03:46:26.000Z",
                            "medicine": {
                                "id": 10,
                                "medicineName": "antibacteria",
                                "createdAt": "2018-07-24T03:46:26.000Z",
                                "updatedAt": "2018-07-24T03:46:26.000Z"
                            }
                        }`,'success','success',

                          //  period

                          `{
                            "id": 1,
                            "periodTime": "2018-07-24T03:46:26.000Z",
                            "maxUser": 30,
                            "countUser": 7,
                            "createdAt": "2018-07-24T03:46:26.000Z",
                            "updatedAt": "2018-07-24T03:46:26.000Z"
                        }`,'success',
                        `{
                          "id": 1,
                          "periodTime": "2018-07-24T03:46:26.000Z",
                          "maxUser": 30,
                          "countUser": 7,
                          "createdAt": "2018-07-24T03:46:26.000Z",
                          "updatedAt": "2018-07-24T03:46:26.000Z"
                      }`,'success','success',
                      
                      
                            //  dateclose
                      ` {
                        "id": 1,
                        "date": "2018-07-24T03:46:27.000Z",
                        "house": "16:26:20",
                        "createdAt": "2018-07-24T03:46:27.000Z",
                        "updatedAt": "2018-07-24T03:46:27.000Z"
                    }`,'success',
                    ` {
                      "id": 1,
                      "date": "2018-07-24T03:46:27.000Z",
                      "house": "16:26:20",
                      "createdAt": "2018-07-24T03:46:27.000Z",
                      "updatedAt": "2018-07-24T03:46:27.000Z"
                  }`,'success','success'

                              
                          
                                ];
                                
for (var i = 0; i < url.length; i++) {
  data[i] = {
    id: '',
    url: url[i],
    action: action[i],
    pathparameters: pathparameters[i],
    respone:'200 Success',
    data:    dataReturn[i] ,
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