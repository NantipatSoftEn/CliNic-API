const AuthController = require('./auth.controller');

module.exports = (app) => {
    app.get('/auth/tel/:tel', AuthController.findByTel);
}