var app = angular.module('budget', []);

app.controller('MainCtrl', function ($scope) {

    $scope.sometext = "witam serdecznie";

    $scope.users = [
        {name: "Ala", gender: "female", description: "Ala desc"},
        {name: "Olek", gender: "male", description: "Olek desc"}
    ];
    
    
    
    
     $scope.$watch('users', function(newValue, oldValue){
        console.log("Old: ");
        console.log(oldValue);
        console.log("New:");
        console.log(newValue);
    }, true);

});



app.directive('mySuperCustomDirective', function(){
    return {
        template: 'Nie taki diabel straszny'
    };
});
