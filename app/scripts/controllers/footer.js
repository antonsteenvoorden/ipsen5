/**
 * Created by Sven on 1-6-2016.
 * Finished by Anton
 * Used to obtain info for the footer
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

  $scope.thc = {
    labels:[],
    values:[]
  };


  $scope.CycleInfoIsVisible = false;
  $scope.toggleCycleInfo = function () {
    $scope.CycleInfoIsVisible = !$scope.CycleInfoIsVisible;
  };

  /**
   * gets called when clicked on "Show content"
   * obtains the data calculated by the api
   */
  $scope.refreshData = function() {
    footerService.getBottleneckData(function(result) {
      $scope.bottleneckData.values[0] = result.values;
      $scope.bottleneckData.labels = result.labels;
      $scope.bottleneckData.bottleneck = result.bottleneck;
      $scope.bottleneckData.taktTime = result.taktTime;

      footerService.getThcData(function(result) {
        $scope.thc.values[0]=result.values;
        $scope.thc.labels = result.labels;

      })
    });
  }
});
