module.exports = {

    getPeriods: function (req, res) {
        res.status(200);
        res.send({});
    },
    
    getPeriod: function (req, res) {
        var id = req.params.id;
        res.status(200);
        res.send({});
    }
}