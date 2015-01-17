var app = angular.module('budget', ['ui.bootstrap']);

app.controller('MainCtrl', function ($scope, dialogService) {
    $scope.periods = ['2014-01', '2014-02', '2014-03'];
    $scope.currentPeriod = $scope.periods[0];

    $scope.changeCurrentPeriod = function (period) {
        $scope.currentPeriod = period;
    };

    $scope.expenses = [{
            "id": 1,
            "title": "Czynsz",
            "amount": 11,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad",
            "paid": true,
            "paidDate": "2014-02-12"

        },
        {
            "id": 2,
            "title": "Czynsz2",
            "amount": 12,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"
        },
        {
            "id": 3,
            "title": "Czynsz3",
            "amount": 13,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"
        }];

    $scope.incomes = [{
            "id": 1,
            "title": "PensjA1",
            "amount": 1100000.52,
            "date": "2014-02-12",
            "description": "Od IQ",
        },
        {
            "id": 2,
            "title": "PensjA2",
            "amount": 2.00,
            "date": "2014-02-15",
            "description": "Od AAA",
        }];

    $scope.getTotalIncomes = function () {
        return $scope.getTotal($scope.incomes, "amount");
    };

    $scope.getTotalExpenses = function () {
        return $scope.getTotal($scope.expenses, "amount");
    };


    $scope.getTotal = function (list, item) {
        var total = 0;
        list.forEach(function (expense) {
            total += parseFloat(expense[item]);
        });
        return total;
    };

    $scope.getTotalExpensesPaid = function () {
        var totalPaid = 0;
        var paid = $scope.expenses.filter(function (expense) {
            return expense.paid;
        });

        paid.forEach(function (expense) {
            totalPaid += expense.amount;
        });
        return totalPaid;
    };

    $scope.markAsPaid = function (expense) {
        expense.paid = true;
        expense.paidDate = moment().format('YYYY-MM-DD');

    };

    $scope.addExpense = function () {
        $scope.newExpense.id = Math.random();
        $scope.expenses.push($scope.newExpense);
        $scope.newExpense = null;
    };

    function removeExpense(expense) {
        var searchedExpense = $scope.expenses.indexOf(expense);
        $scope.expenses.splice(searchedExpense, 1);
    }

    $scope.addIncome = function () {
        $scope.newIncome.id = Math.random();
        $scope.incomes.push($scope.newIncome);
        $scope.newIncome = null;
    };

    function removeIncome(income) {
        var searchedIncome = $scope.incomes.indexOf(income);
        $scope.incomes.splice(searchedIncome, 1);
    }


    $scope.datePickerOpen = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    $scope.datePickerOptions = {
        formatYear: 'yyyy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.datePickerFormat = 'yyyy-MM-dd';
    
    
    $scope.tryRemoveExpense = function(expense){
        dialogService.confirm().then(function (result) {
            if(result){
                removeExpense(expense);
            } else {
                console.log("nie: " + expense);
            }
        });
    };
    
    $scope.tryRemoveIncome = function(income){
        dialogService.confirm().then(function (result) {
            if(result){
                removeIncome(income);
            } else {
                console.log("nie: " + income);
            }
        });
    };
    
});


app.directive('numbersOnly', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           if (inputValue == undefined) return '' 
           var transformedInput = inputValue.replace(/[^0-9+.]/g, ''); 
           if (transformedInput!=inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }         
           return transformedInput;         
       });
     }
   };
});