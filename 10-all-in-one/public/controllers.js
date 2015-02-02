var app = angular.module('budget', ['ui.bootstrap', 'ngResource']);

app.controller('MainCtrl', function ($scope, dialogService, userService, periodService, incomeService) {
    $scope.periods = [];
    $scope.incomes = [];

    reloadAll();
    
    function reloadAll() {
        periodService.getAll()
        .then(onPeriods)
        .then(loadCurrentPeriod);
    }
    
    function onPeriods(periods) {
        $scope.periods = [];
        periods.forEach(function (period) {
            $scope.periods.push(period);
        });
        $scope.currentPeriod = $scope.periods[0];
    }

    function loadCurrentPeriod() {
        incomeService.getInPeriod($scope.currentPeriod)
            .then(function (incomes) {
                $scope.incomes = incomes;
            });
    }

    $scope.changeCurrentPeriod = function (period) {
        $scope.currentPeriod = period;
        loadCurrentPeriod();
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

    $scope.defaultExpenses = [
        {
            "id": 10,
            "title": "Bilet miesięczny",
            "amount": 11,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"

        },
        {
            "id": 20,
            "title": "Podatek VAT",
            "amount": 12,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"
        },
        {
            "id": 30,
            "title": "Czynsz",
            "amount": 13,
            "deadline": "2014-02-12",
            "description": "Bo wylacza prad"
        }
  ];

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
        incomeService.add($scope.newIncome).then(function () {
            $scope.newIncome = null;
            reloadAll();
        });
    };

    function removeIncome(income) {
        var searchedIncome = $scope.incomes.indexOf(income);
        incomeService.delete(income._id).then(loadCurrentPeriod);
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
    $scope.datePickerFormatPeriod = 'yyyy-MM';

    $scope.tryRemoveExpense = function (expense) {
        askToExecute(function () {
            removeExpense(expense);
        });
    };

    $scope.tryRemoveIncome = function (income) {
        askToExecute(function () {
            removeIncome(income);
        });
    };

    function askToExecute(operation) {
        dialogService.confirm().then(function (result) {
            if (result) {
                operation();
            }
        });
    }

    $scope.saveNewPeriod = function (period) {
        $scope.periods.push(moment(period).format('YYYY-MM'));
    };

});


app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return ''
                var transformedInput = inputValue.replace(/[^0-9+.]/g, '');
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});