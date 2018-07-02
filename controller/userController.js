const model = require('../configdb/sequelize');

const findByTel = async (req,res) => {
  const user = await model.users.findOne({ 
    where: {telephone: req.body.tel},
    include: [{
        model: model.symptom
      }] 
  })

  await res.json(user);
}

module.exports = {
  findByTel
}