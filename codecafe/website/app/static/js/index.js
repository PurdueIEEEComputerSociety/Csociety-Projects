var app = angular.module('codeCafe', ['ngMaterial'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .backgroundPalette('grey')
      .accentPalette('blue-grey')
      .warnPalette('red');
  });

app.controller("indexCtrl", function($scope, $http, $window){
  
});
