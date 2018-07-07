const authServices = require('./auth.services');
const tools = require('../../utils/tools');

const findByTel = async (req,res) => {
  try {
    console.log(tools.moment().format());
    const phoeRegex = /^\d*\.?\d*$/;
    const tel = req.params.tel;
    if(!phoeRegex.test(tel)) {
      throw "tel is Number";
    }

    const user = await authServices.findUserByTel(tel);

    if(!user) {
      throw "Not have user";
    } else {
      await res.send({user});
    }
    
  } catch (error) {
      await res.status(400).send({ error })
  } 
}

const register = async (req,res) => {
    const user = await authServices.register(req.body);
    await res.send({user});
}

module.exports = {
  findByTel,
  register
}