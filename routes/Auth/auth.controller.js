const authServices = require('./auth.services');


const findByTel = async (req,res) => {
  try {
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

module.exports = {
  findByTel
}