var Operation = require('../models/operation').Operation;
module.exports = {
    getIncomes: function (req, res) {
        Operation.find({
            "operationType": "income"
        }).exec(function (err, collection) {
            if (err) {
                return processError(res, err, 400);
            } else {
                res.send(200, collection);
            }
        });
    },

    getIncomesInPeriod: function (req, res) {
        var period = req.params.period;
        console.log(period);
        res.status(200);
        res.send({
            period: period
        });
    },

    addIncome: function (req, res) {
        var operation = req.body;
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