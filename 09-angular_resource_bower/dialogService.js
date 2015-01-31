app.service('dialogService', function ($modal, $q) {

    function createModal(options) {
        var modalInstance = $modal.open(angular.extend({
            controller: ['$scope', function ($scope) {
                $scope.content = options.content;
                $scope.okText = options.okText || 'OK';
                $scope.cancelText = options.cancelText || 'Anuluj';
                $scope.close = function (value) {
                    modalInstance.close(value);
                };
            }]
        }, options));
        return modalInstance;
    }
    
    this.confirm = function (content, modalOpts) {
        var modalInstance = createModal(angular.extend({
            content: content || 'Operacja wymaga potwierdzenia.',
            templateUrl: 'dialog-confirm.html'
        }, modalOpts));
        var dfd = $q.defer();
        modalInstance.result.then(dfd.resolve, function dismissed() {
            dfd.resolve(false);
        });
        return dfd.promise;
    };
    
});
