// routes/site.js
incomes = require('../server/controllers/incomes');
expenses = require('../server/controllers/expenses');
periods = require('../server/controllers/periods');


module.exports = function (app) {
    
    // server routes ===========================================================
    app.get('/api/incomes/:period', incomes.getIncomesInPeriod);
    app.post('/api/incomes', incomes.addIncome);
    app.put('/api/incomes/:id', incomes.editIncome);
    app.delete('/api/incomes/:id', incomes.deleteIncome);
    
    app.get('/api/expenses', expenses.getExpenses);
    app.get('/api/expenses/:period', expenses.getExpensesInPeriod);
    app.post('/api/expenses', expenses.addExpense);
    app.put('/api/expenses/:id', expenses.editExpense);
    app.delete('/api/expenses/:id', expenses.deleteExpense);
    app.put('/api/expenses/:id/paid', expenses.setPaid);
        
    app.get('/api/periods', periods.getPeriods);
    
    // frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
