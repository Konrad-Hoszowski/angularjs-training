app.service('periodService', function ($resource) {

    var PeriodResource = $resource('', null, {
        getAll: { method: 'GET', url: 'http://localhost:3000/periods', isArray: true },
    });

    this.getAll = function() {
        return PeriodResource.getAll().$promise;
    };
    
});