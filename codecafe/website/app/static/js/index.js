var app = angular.module('codeCafe', ['ngMaterial'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .backgroundPalette('grey')
      .accentPalette('blue-grey')
      .warnPalette('red');
  });

app.controller("indexCtrl", function($scope, $http, $window, $mdDialog){
  $scope.user = {};
    $scope.redirectSignup = function(){
      $window.location.href = '/signup';
    }

    $scope.submitSignup = function(ev){
      if($scope.user.name == null || $scope.user.email == null || $scope.user.major == null || $scope.user.ieeemem == null){
        $scope.showAlert(ev);
      }else{
        
      }
    }
    $scope.showAlert = function(ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Errors for Sign Ups')
            .textContent('Please fix the required information on the sign-up form')
            .ariaLabel('signup error')
            .ok('Ok')
            .targetEvent(ev)
      );
    };
});
