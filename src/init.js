const authenticationController = require('./controllers/authentication');
const dbRepo = require('./repositories/dbRepo');
module.exports = (app) => {
    authenticationController(app);
}