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
    var begSkillColl = [];
    var intSkillColl = [];
    var advSkillColl = [];
    if($scope.begSkill1 != null){
        begSkillColl.push($scope.begSkill1);
    }
    if($scope.begSkill2 != null){
        begSkillColl.push($scope.begSkill2);
    }
    if($scope.begSkill3 != null){
        begSkillColl.push($scope.begSkill3);
    }

    if($scope.intSkill1 != null){
        intSkillColl.push($scope.intSkill1);
    }
    if($scope.intSkill2 != null){
        intSkillColl.push($scope.intSkill2);
    }
    if($scope.intSkill3 != null){
        intSkillColl.push($scope.intSkill3);
    }
    if($scope.intSkill4 != null){
        intSkillColl.push($scope.intSkill4);
    }

    if($scope.advSkill1 != null){
        advSkillColl.push($scope.advSkill1);
    }
    if($scope.advSkill2 != null){
        advSkillColl.push($scope.advSkill2);
    }
    if($scope.advSkill3 != null){
        advSkillColl.push($scope.advSkill3);
    }
    if($scope.advSkill4 != null){
        advSkillColl.push($scope.advSkill4);
    }

    var skillColl = {
      'BegSkills' : begSkillColl,
      'IntSkills' : intSkillColl,
      'AdvSkills' : advSkillColl
    };

    $http({
        method  : 'POST',
        url     : '/skillsSubmit',
        data    : skillColl, //forms newPost object
        headers : {'Content-Type': 'application/json'}
       })
        .success(function(data, status) {
          if (data.result == false) {
            // Showing errors toasts
            console.log("Error adding post in database");
          } else {
            console.log(data);
            $window.location.href = "/qrGen";
          }
        });
  };
});
