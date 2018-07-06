
const authRoutes = require('./Auth/auth.route');

module.exports = (app) => {
    authRoutes(app);
}