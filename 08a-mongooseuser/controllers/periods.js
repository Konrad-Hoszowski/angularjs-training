module.exports = {

    getPeriods: function (req, res) {
        res.status(200);
        
        var r = [{"period":"2015-11"},{"period":"2015-12"}];
        
        res.send(r);
    },
    
    getPeriod: function (req, res) {
        var id = req.params.id;
        res.status(200);
        res.send({});
    }
}