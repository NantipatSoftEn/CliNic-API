const model = require('../../configdb/sequelize');

const findUserByTel = async (tel) => {
    const user = await model.users.findOne({ 
        where: {telephone: tel},
        include: [{
            model: model.symptom
          }] 
      });

    return user;
}

module.exports = {
    findUserByTel
}