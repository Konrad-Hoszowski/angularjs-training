// routes/site.js
controller = require('../controllers/controller');

module.exports = function (app) {
    app.get('/', controller.doGetAction);
    app.post('/', controller.doPostAction);
    app.put('/user', controller.doPutUserAction);
    app.delete('/user', controller.doDeleteUserAction);
};
