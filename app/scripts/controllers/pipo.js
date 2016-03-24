'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:PipoCtrl
 * @description
 * # PipoCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp')
  .controller('PipoCtrl', function ($scope, pipo) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = function() {
      pipo.test();
    }
  });
