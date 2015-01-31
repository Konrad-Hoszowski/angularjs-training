var Operation = require('../models/operation').Operation;
var moment = require('moment');

module.exports = {
    getIncomesInPeriod: function (req, res) {
        var period = req.params.period;
        Operation.find({
            "operationType": "income",
            "period": period
        }).exec(function (err, collection) {
            if (err) {
                return processError(res, err, 400);
            } else {
                res.send(200, collection);
            }
        });
    },

    addIncome: function (req, res) {
        var operation = req.body;
        var paidDate = operation.paidDate;
        operation.period = moment(paidDate).format('YYYY-MM');
        operation.operationType = "income";

        Operation.create(operation, function (err, operation) {
            if (err) {
                console.log(err);
                return processError(res, err, 400);
            } else {
                res.send(201, operation);
            }
        });
    },

    editIncome: function (req, res) {
        var id = req.params.id;
        var edited = req.body;
        res.status(200);
        res.send(edited);
    },

    deleteIncome: function (req, res) {
        var id = req.params.id;
        res.status(204);
        res.send();
    },
};

function processError(res, err, errorCode) {
    res.status(errorCode);
    res.send({
        reason: err.toString()
    });
    return res;
}