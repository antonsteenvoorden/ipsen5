'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp')
  .controller('UserCtrl', function ($scope, $rootScope, $translate, $state, $mdToast, authenticationService) {

    $scope.login = function (user) {
      if (user) {
        if (authenticationService.authenticate(user)) {
          $state.go('dashboard');
        } else {
          $mdToast.show($mdToast.simple().textContent($translate.instant('LOGINFAIL')));
        }
      }
    };

    $scope.logOut = function(){
      authenticationService.deleteAuthentication();
      $state.go('login');
    };
    
    $scope.register = function(user){
      userService.register(user);
    }

 
    $scope.isAuthenticated = function () {
      return authenticationService.authenticated;
    };

    $scope.register = function (user) {
      var uri = 'api/klanten/';
      var data = {
        username: user.username,
        password: user.password
      };

      $http.post(uri, data)
        .success(onCreated)
        .error(function (message) {
          alert('Aanmaken mislukt: ' + message);
        });
    };
  });
