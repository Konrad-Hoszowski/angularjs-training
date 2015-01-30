module.exports = {

    getExpenses: function (req, res) {
        res.status(200);
        res.send({});
    },
    
    getExpensesInPeriod: function (req, res) {
        var period = req.param.period;
        res.status(200);
        res.send({});
    },
    
    addExpense: function (req, res) {
        var expense = req.body;
        res.status(201);
        res.send(expense);
    },
    
    editExpense: function (req, res) {
        var id = req.param.id;
        var edited = req.body;
        res.status(200);
        res.send(edited);
    },
    
    deleteExpense: function (req, res) {
        var id = req.param.id;
        res.status(204);
        res.send();
    },
    
    setPaid: function (req, res) {
        var id = req.param.id;
        res.status(200);
        res.send();
    },
};