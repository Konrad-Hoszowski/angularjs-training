// routes/site.js
incomes = require('../controllers/incomes');
expenses = require('../controllers/expenses');
periods = require('../controllers/periods');

module.exports = function (app) {
    app.get('/incomes', incomes.getIncomes);
    app.get('/incomes/:period', incomes.getIncomesInPeriod);
    app.post('/incomes', incomes.addIncome);
    app.put('/incomes/:id', incomes.editIncome);
    app.delete('/incomes/:id', incomes.deleteIncome);
    
    app.get('/expenses', expenses.getExpenses);
    app.get('/expenses/:period', expenses.getExpensesInPeriod);
    app.post('/expenses', expenses.addExpense);
    app.put('/expenses/:id', expenses.editExpense);
    app.delete('/expenses/:id', expenses.deleteExpense);
    app.put('/expenses/:id/paid', expenses.setPaid);
    
    
    app.get('/periods', periods.getPeriods);
    app.get('/periods/:id', periods.getPeriod);
};
