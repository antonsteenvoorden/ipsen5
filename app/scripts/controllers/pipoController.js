'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:PipoCtrl
 * @description
 * # PipoCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp', ["chart.js"])
  .controller('PipoCtrl', function ($scope) {

    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  });
