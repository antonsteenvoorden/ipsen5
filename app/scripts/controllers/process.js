'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp').controller('ProcessCtrl', ['$scope', function($scope) {
  $scope.stappen = [
    {value: 1},
    {value: 2},
    {value: 3}
  ];

  $scope.add = function() {
    $scope.stappen.push({value: $scope.stappen.length + 1});
  };

  $scope.remove = function() {
    $scope.stappen.pop();
  };

}]);
