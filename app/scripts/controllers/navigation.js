'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation){
      return viewLocation == $location.path();
    }

    $scope.setTab = function(tabSelected) {
      $scope.tab = tabSelected;
    }

    $scope.getTab = function(tabSelected) {
      if($scope.tab == tabSelected) {
        return true;
      } else {
        return false;
      }
    }

    $scope.goToHome = function()
    {
      $location.path('/');
    };

    $scope.goToTest = function()
    {
      $location.path('/test');
    };

  });
