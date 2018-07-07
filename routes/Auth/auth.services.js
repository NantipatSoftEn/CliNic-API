const model = require('../../configdb/sequelize');
const tools = require('../../utils/tools');

const findUserByTel = async (tel) => {
    const user = await model.users.findOne({ 
        where: {telephone: tel},
        include: [{
            model: model.symptom
          }] 
      });

    return user;
}

const register = async (user) => {
    const userRegistered = model.users.create({
        id: '',
        name: user.name,
        lastname: user.lastname,
        telephone: user.telephone,
        gender: user.gender,
        createdAt: tools.moment().format(),
        updatedAt: tools.moment().format()
      });
    return userRegistered;
}

module.exports = {
    findUserByTel,
    register
}