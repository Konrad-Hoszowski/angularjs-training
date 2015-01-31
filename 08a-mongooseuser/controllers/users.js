var User = require('../models/user').User;

exports.getUsers = function (req, res) {
    User.find({}).exec(function (err, collection) {
        if (err) {
            return processError(res, err, 400);
        } else {
            res.send(collection);
        }
    })
};

exports.getUserById = function (req, res) {
    User.findOne({
        _id: req.params.id
    }).exec(function (err, user) {
        if (err) {
            return processError(res, err, 400);
        } else {
            console.log(user);
            res.send(user);
        }
    })
};

exports.insertUser = function (req, res) {
    var userData = req.body;
    User.create(userData, function (err, user) {
        if (err) {
            console.log(err);
            return processError(res, err, 400);
        } else {
            res.send(user);
        }

    });
};


function processError(res, err, errorCode) {
    res.status(errorCode);
    res.send({
        reason: err.toString()
    });
    return res;
}