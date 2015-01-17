var app = angular.module('budget', []);

app.controller('MainCtrl', function ($scope) {
    $scope.periods = ['2014-01', '2014-02', '2014-03'];
    $scope.currentPeriod = $scope.periods[0];

    $scope.expenses = [{
            "title": "Czynsz",
            "amount": 11,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad",
            "paid": true,
            "paidDate": "2014-02-12"

        },
        {
            "title": "Czynsz2",
            "amount": 12,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"
        },
        {
            "title": "Czynsz3",
            "amount": 13,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"
        }];

    $scope.getTotalExpenses = function () {
        var total = 0;
        $scope.expenses.forEach(function (expense) {
            total += expense.amount;
        });
        return total;
    };

//    $scope.getTotalExpensesPaid = function () {
//        var totalPaid = 0;
//        $scope.expenses.forEach(function (expense) {
//            if(expense.paid) {
//                totalPaid += expense.amount;
//            }
//        });
//        return totalPaid;
//    };
    
    $scope.getTotalExpensesPaid = function () {
        var totalPaid = 0;
        
        var paid = $scope.expenses.filter(function(expense){
            return expense.paid;
        });
        
        paid.forEach(function (expense) {
                totalPaid += expense.amount;
        });
        return totalPaid;
    };

});