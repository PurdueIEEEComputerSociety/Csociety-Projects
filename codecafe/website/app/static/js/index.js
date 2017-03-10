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
        if($scope.user.sex == null){
          $scope.user.sex = "";
          $scope.user.sex = $scope.genText;
          if($scope.user.sex == null){
            $scope.user.sex = "";
          }
        }
        if($scope.user.pxp == null){
          $scope.user.pxp = "";
        }
        var user = {
          'name' : $scope.user.name,
          'major' : $scope.user.major,
          'email' : $scope.user.email,
          'sex' : $scope.user.sex,
          'pxp' : $scope.user.pxp,
          'ieeemem' : $scope.user.ieeemem
        };
        $http({
            method  : 'POST',
            url     : '/postSignupInfo',
            data    : user, //forms newPost object
            headers : {'Content-Type': 'application/json'}
           })
            .success(function(data, status) {
              if (data.result == false) {
                // Showing errors toasts
                console.log("Error adding post in database");
              } else {
                console.log(data);
                $window.location.href = "/skillPage";
              }
            });
      }
    }

    $scope.showSignupError = function(ev){
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('body')))
          .clickOutsideToClose(true)
          .title('Errors adding you to our database')
          .textContent('Please try again, or contact us at codecafe@purdue.edu')
          .ariaLabel('signup error')
          .ok('Ok')
          .targetEvent(ev)
      );
    };

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
