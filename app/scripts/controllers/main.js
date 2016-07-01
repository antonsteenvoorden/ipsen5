'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wfpcsFrontApp
 * Used to watch the authentication function
 */
angular.module('wfpcsFrontApp')
  .controller('MainCtrl', function ($scope, $translate, $state, authenticationService) {

    $scope.process = {
      name: "Awesome naam",
      subtitle: "epic subtitle"
    };
    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };
    $scope.goToProcess = function () {
      $state.go('process.current');
    };
    $scope.$watch(function () {
      return authenticationService.authenticated;
    }, function (newVal) {
      if (typeof newVal !== 'undefined') {
        $scope.isAuthenticated = authenticationService.authenticated;
      }
    });
  });
