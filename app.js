var myApp = angular.module('myApp', []);

myApp.controller('clickCtrl', function($scope){

$scope.dynamic = "red";

$scope.changeToRed = function(){
  $scope.dynamic = "red";      
}

$scope.changeToGreen = function(){
  $scope.dynamic = "green";
}

$scope.changeToBlue = function(){
  $scope.dynamic = "blue";      
}

});