'use strict';

/**
 * @ngdoc directive
 * @name wfpcsFrontApp.directive:pipo
 * @description
 * # pipo
 */
angular.module('wfpcsFrontApp')
  .directive('pipo', function () {
    return {
      templateUrl: 'views/test.html',
      restrict: 'E',
      controller: 'PipoCtrl'
    };
  });
