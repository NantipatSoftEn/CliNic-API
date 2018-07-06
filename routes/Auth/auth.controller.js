const authServices = require('./auth.services');

const findByTel = async (req,res) => {
  const user = await authServices.findUserByTel(req.params.tel);

  await res.json(user);
}

module.exports = {
  findByTel
}