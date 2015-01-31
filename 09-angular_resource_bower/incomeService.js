app.service('incomeService', function ($resource) {

    var IncomeResource = $resource('', null, {
        getIncomesInPeriod: { method: 'GET', url: 'http://localhost:3000/incomes/:period', params: {period: "@_period"}, isArray: true },
        delete: { method: 'DELETE', url: 'http://localhost:3000/incomes/:id', params: {id: "@_id"}, isArray: false },
        add: { method: 'POST', url: 'http://localhost:3000/incomes/', isArray: false }
    });

    this.getInPeriod = function(period) {
        return IncomeResource.getIncomesInPeriod({period: period}).$promise;
    };
    
    this.delete = function(id) {
        return IncomeResource.delete({id: id}).$promise;
    };
    
    this.add = function(income) {
        return IncomeResource.add(income).$promise;
    };
});