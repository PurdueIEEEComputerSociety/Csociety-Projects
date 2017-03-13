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
        begSkillColl.push("vadtype");
    }
    if($scope.begSkill2 != null){
        begSkillColl.push("cflow");
    }
    if($scope.begSkill3 != null){
        begSkillColl.push("fmeths");
    }

    if($scope.intSkill1 != null){
        intSkillColl.push("objs");
    }
    if($scope.intSkill2 != null){
        intSkillColl.push("cbacks");
    }
    if($scope.intSkill3 != null){
        intSkillColl.push("dstructs");
    }
    if($scope.intSkill4 != null){
        intSkillColl.push("restapi");
    }

    if($scope.advSkill1 != null){
        advSkillColl.push("webGL");
    }
    if($scope.advSkill2 != null){
        advSkillColl.push("gprog");
    }
    if($scope.advSkill3 != null){
        advSkillColl.push("nodejs");
    }
    if($scope.advSkill4 != null){
        advSkillColl.push("spjs");
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
            $window.location.href = "/thankSignup";
          }
        });
  };
});
