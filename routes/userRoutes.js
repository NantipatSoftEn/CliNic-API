const userController = require('../controller/userController');

module.exports = (app) => {
    app.post('/findUserByTel', userController.findByTel);
}