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
    'pascalprecht.translate',
    'ngAria',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'chart.js',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'MainCtrl'
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
  })
  //translation config
  .config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('nl');

    $translateProvider.translations('nl', {
      'KWALITEIT': "Kwaliteit",
      'HUIDIGE': "Huidige",
      'VERTAALD': "Dit is een stukje nederlandse tekst",
      'TAAL':"Verander taal"
    });

    $translateProvider.translations('en', {
      'VERTAALD': 'THE same text but in english',
      'TAAL':"Change Language"
    });
});

angular.module('wfpcsFrontApp').directive("navigation", function () {
  return {
    templateUrl: 'views/navigation.html',
    controller: 'NavigationCtrl'
  };
});

angular.module('wfpcsFrontApp').directive("process", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/process.html',
    controller: 'ProcessCtrl'
  };
});


angular.module('wfpcsFrontApp').directive("analyse", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/improvement.html'
  };
});
