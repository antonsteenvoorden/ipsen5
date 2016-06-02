/**
 * Created by Sven on 1-6-2016.
 */
'use strict';

angular.module('wfpcsFrontApp').controller('FooterCtrl', function($scope, $state, $filter) {
  $scope.$state = $state;
  $scope.theFooter = false;

  $scope.CycleInfoIsVisible = false;
  $scope.toggleCycleInfo = function () {
    $scope.CycleInfoIsVisible = !$scope.CycleInfoIsVisible;
  };
});
