app.service('incomeService', function ($resource) {

    var IncomeResource = $resource('', null, {
        getIncomesInPeriod: { method: 'GET', url: 'http://localhost:3000/incomes/:period', params: {period: "@_period"}, isArray: true },
    });

    this.getInPeriod = function(period) {
        return IncomeResource.getIncomesInPeriod({period: period}).$promise;
    };
    
});