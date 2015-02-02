app.service('userService', function ($resource) {

    var UserResource = $resource('', null, {
        getAll: { method: 'GET', url: '/api/users', isArray: true },
        getOneById: { method: 'GET', url: '/api/users/:id', params: {id: "@_id"}, isArray: false },
        addUser: { method: 'POST', url: '/api/users', isArray: false},
    });

    this.getOneById = function(userId) {
        return UserResource.getOneById({id: userId}).$promise;
    };
    
    this.getAll = function() {
        return UserResource.getAll().$promise;
    };
    
    this.addUser = function(user) {
            return UserResource.addUser(user).$promise;
    };
    
});