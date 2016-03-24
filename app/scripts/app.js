'use strict';

/**
 * @ngdoc overview
 * @name wfpcsFrontApp
 * @description
 * # wfpcsFrontApp
 *
 * Main module of the application.
 */
 angular
  .module('wfpcsFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('wfpcsFrontApp').directive("process", function() {
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'views/process.html',
      controller: 'ProcessCtrl'
    };
  });

  angular.module('wfpcsFrontApp').directive("analyse", function() {
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'views/improvement.html'
    };
  });
