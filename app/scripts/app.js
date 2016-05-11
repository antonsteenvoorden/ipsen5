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
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl'
      })
      .state('process', {
        url: "/process",
        templateUrl: 'views/process.html',
        controller: 'ProcessCtrl'
      })
      .state('process.current', {
        url: "/current",
        templateUrl: 'views/tabs/current.html',
        controller: 'ProcessCtrl'
      })
      .state('process.improvement', {
        url: "/improvement",
        templateUrl: 'views/tabs/improvement.html',
        controller: 'ProcessCtrl'
      })
      .state('process.quality', {
        url: "/quality",
        templateUrl: 'views/tabs/quality.html',
        controller: 'ProcessCtrl'
      })

      .state('about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('test', {
        url: "/test",
        templateUrl: 'views/test.html',
        controller: 'NavigationCtrl',
        controllerAs: 'about'
      });
  })
  //translation config
  .config(function ($translateProvider) {
    $translateProvider.translations('nl', {
      KWALITEIT: "Kwaliteit",
      HUIDIGE: "Huidige",
      VERTAALD: "Dit is een stukje nederlandse tekst",
      TAAL: "Verander taal",
      TEST: "TEST"
    });

    $translateProvider.translations('en', {
      VERTAALD: 'THE same text but in english',
      TAAL: "Change Language"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('nl');
  });
