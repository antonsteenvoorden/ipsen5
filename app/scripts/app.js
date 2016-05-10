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
        templateUrl: 'views/dashboard.html',
        controller:'MainCtrl'
      })
      .when('/process', {
        templateUrl: 'views/process.html',
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
    $translateProvider.translations('nl', {
      KWALITEIT: "Kwaliteit",
      HUIDIGE: "Huidige",
      VERTAALD: "Dit is een stukje nederlandse tekst",
      TAAL:"Verander taal"
    });

    $translateProvider.translations('en', {
      VERTAALD: 'THE same text but in english',
      TAAL:"Change Language"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('nl');
  });
