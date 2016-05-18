'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp').controller('ProcessCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.$state = $state;

  $scope.testProcessen = [
    new Process(1, "Alfa", "01/01/1999", 1, 3)
  ];
  $scope.process = new Process(1, "Alfa", "01/01/1991", 1, 3);

  $scope.stappen = [
    {value: 1},
    {value: 2},
    {value: 3}
  ];

  $scope.add = function() {
    $scope.stappen.push({value: $scope.stappen.length + 1});
  };

  $scope.insert = function(stap) {
    $scope.stappen.splice(stap + 1, 0, {value: stap + 1});
  }

  $scope.removeLast = function() {
    $scope.stappen.pop();
  };

  $scope.remove = function(stap) {
    $scope.stappen.splice(stap -1, 1);
  };

}]);
