'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp')
  .controller('UserCtrl', function ($scope, $translate, $state, userService) {
    $scope.login = function(user){
      userService.authenticate(user)
    }
    $scope.logOut = function(){
      userService.logOut();
    }
    $scope.register = function(user){
      userService.register(user);
    }
  });
