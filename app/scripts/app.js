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

    $translateProvider.translations('en', {
      ENGLISH: "English",
      BASE: "Base64",
      SIGNOUT:"Sign out",
      HOME:"Home",
      PURCHASE:"Purchase",
      CONTACT:"Contact",
      CURRENT:"Current",
      TOBE:"To be",
      QUALITY:"Quality"
    });

    $translateProvider.translations('nl', {
      ENGLISH: "Engels",
      BASE: "Baas",
      SIGNOUT:"Uitloggen",
      HOME:"Thuis",
      PURCHASE:"Aankopen",
      CONTACT:"Contact",
      CURRENT: "Huidige",
      TOBE:"Verbetering",
      QUALITY: "Kwaliteit"
    });


    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
  });
