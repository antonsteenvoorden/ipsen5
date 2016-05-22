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
    'ngDialog',
    'ui.router',
  ])
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    customer: 'customer',
    guest: 'guest'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    //$urlRouterProvider.html5Mode(true);
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .state('login', {
        url: "/login",
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .state('register', {
        url: "/register",
        templateUrl: 'views/register.html',
        controller: 'UserCtrl'
      })
      .state('dashboard', {
        url: "/dashboard",
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
      .state('admin', {
        url: "/admin",
        templateUrl: 'views/test.html',
        controller: 'NavigationCtrl',
        controllerAs: 'about',
        //data: {
        //  authorizedRoles: [USER_ROLES.admin]
        //}
      });
  })
  //translation config
  .config(function ($translateProvider) {

    $translateProvider.translations('en', {
      LOGIN: "Sign in first",
      USERNAME: "Username",
      PASSWORD: "Password",
      LOGINBUTTON: "Sign in",
      REGISTER: "I don't have an account",
      ENGLISH: "English",
      BASE: "Base64",
      MYPROFILE: "My profile",
      SIGNOUT: "Sign out",
      HOME: "Dashboard",
      PURCHASE: "Purchase",
      CONTACT: "Contact",
      CURRENT: "Current",
      TOBE: "To be",
      QUALITY: "Quality"
    });

    $translateProvider.translations('nl', {
      LOGIN: "Log eerst in",
      USERNAME: "Gebruikersnaam",
      PASSWORD: "Wachtwoord",
      LOGINBUTTON: "Aanmelden",
      REGISTER: "Ik heb nog geen account",
      ENGLISH: "Engels",
      BASE: "Baas",
      MYPROFILE: "Mijn profiel",
      SIGNOUT: "Uitloggen",
      HOME: "Dashboard",
      PURCHASE: "Aankopen",
      CONTACT: "Contact",
      CURRENT: "Huidige",
      TOBE: "Verbetering",
      QUALITY: "Kwaliteit"
    });


    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('requestService');

    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }

  });


