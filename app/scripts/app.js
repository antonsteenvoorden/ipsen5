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
    'ngAria',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {

      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'NavigationCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('wfpcsFrontApp').directive("navigation", function() {
  return {
    templateUrl: 'views/navigation.html',
    controller: 'NavigationCtrl'
  };
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
