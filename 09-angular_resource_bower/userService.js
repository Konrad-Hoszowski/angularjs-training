app.service('userService', function ($resource) {

    var UserResource = $resource('', null, {
        getAll: { method: 'GET', url: 'http://localhost:3000/users', isArray: true },
        getOneById: { method: 'GET', url: 'http://localhost:3000/users/:id', params: {id: "@_id"}, isArray: false },
        addUser: { method: 'POST', url: 'http://localhost:3000/users', isArray: false},
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