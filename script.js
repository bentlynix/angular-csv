var myApp = angular.module('myApp', ['ngSanitize','ngCsv'])

.controller('MyCtrl', function($scope) {

    $scope.init = function(){
      $scope.users = $scope.getUsers();      
    };
  
    $scope.getUsers = function(){
        return [
          {
            id: 1, 
            name: 'Bob',
            age: 10
          },
          {
            id: 2, 
            name: 'Alice',                         
            age: '11'
          }
        ];
    };
    
    $scope.downloadCSV = function(){
      var array = [];
      angular.forEach($scope.users, function(user){
        array.push([
          user.id, 
          user.name,
          user.age
        ]);
      });
      return array;
    };
  
    $scope.init();
});