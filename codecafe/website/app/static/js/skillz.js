var app = angular.module('codeCafe', ['ngMaterial'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .backgroundPalette('grey')
      .accentPalette('blue-grey')
      .warnPalette('red');
  });

app.controller("skillCtrl", function($scope, $http, $window, $mdDialog){
  $scope.begSkill1;

  $scope.showItems = function(){
    console.log($scope.begSkill1);
  };

  $scope.submitSkills = function(){
    
  };
});
