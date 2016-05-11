'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp')
  .controller('MainCtrl', function ($scope, $translate, $state) {
      $scope.changeLanguage = function (key) {
        $translate.use(key);
      };
      $scope.goToProcess = function(){
        $state.go('process.current');
      }
  });
