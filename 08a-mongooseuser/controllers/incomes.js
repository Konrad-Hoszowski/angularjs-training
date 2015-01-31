module.exports = {

    getIncomes: function (req, res) {
        res.status(200);
        res.send({});
    },
    
    getIncomesInPeriod: function (req, res) {
        var period = req.params.period;
        console.log(period);
        res.status(200);
        res.send({period: period});
    },
    
    addIncome: function (req, res) {
        var income = req.body;
        res.status(201);
        res.send(income);
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