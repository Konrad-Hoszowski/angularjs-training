var Operation = require('../models/operation').Operation;
module.exports = {

    getPeriods: function (req, res) {
        Operation.distinct('period').exec(function (err, collection) {
            if (err) {
                return processError(res, err, 400);
            } else {
                res.send(200, collection);
            }
        });  
    },
    
    getPeriod: function (req, res) {
        var id = req.params.id;
        res.status(200);
        res.send({});
    }
}

function processError(res, err, errorCode) {
    res.status(errorCode);
    res.send({
        reason: err.toString()
    });
    return res;
}