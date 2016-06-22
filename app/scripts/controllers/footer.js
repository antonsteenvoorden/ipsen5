/**
 * Created by Sven on 1-6-2016.
 */
'use strict';

angular.module('wfpcsFrontApp').controller('FooterCtrl', function($scope, $state, footerService) {
  $scope.$state = $state;
  $scope.theFooter = false;
  $scope.bottleneckData = {
    labels:[],
    values:[],
    bottleneck:0,
    taktTime:0
  };

  $scope.CycleInfoIsVisible = false;
  $scope.toggleCycleInfo = function () {
    $scope.CycleInfoIsVisible = !$scope.CycleInfoIsVisible;
  };

  $scope.refreshData = function() {
    footerService.getBottleneckData(function(result) {
      $scope.bottleneckData.values[0] = result.values;
      $scope.bottleneckData.labels = result.labels;
      $scope.bottleneckData.bottleneck = result.bottleneck;
      $scope.bottleneckData.taktTime = result.taktTime;

      console.log($scope.bottleneckData);
    });
  }
});
