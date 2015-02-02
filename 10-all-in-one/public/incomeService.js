app.service('incomeService', function ($resource) {

    var IncomeResource = $resource('', null, {
        getIncomesInPeriod: { method: 'GET', url: '/api/incomes/:period', params: {period: "@_period"}, isArray: true },
        delete: { method: 'DELETE', url: '/api/incomes/:id', params: {id: "@_id"}, isArray: false },
        add: { method: 'POST', url: '/api/incomes/', isArray: false }
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