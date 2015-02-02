app.service('periodService', function ($resource) {

    var PeriodResource = $resource('', null, {
        getAll: { method: 'GET', url: '/api/periods', isArray: true },
    });

    this.getAll = function() {
        return PeriodResource.getAll().$promise;
    };
    
});