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
    'ui.router',
    'permission',
    'permission.ui',
    'ngDialog',
  ])
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    customer: 'customer',
    guest: 'guest'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get("$state");
      $state.go('/');
    });
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
        .state('recover', {
          url: "/recover",
          templateUrl: 'views/recover.html',
          controller: 'UserCtrl'
        })
      .state('register', {
        url: "/register",
        templateUrl: 'views/register.html',
        controller: 'UserCtrl'
      })
      .state('myprofile', {
        url: "/myprofile",
        templateUrl: 'views/myprofile.html',
        controller: 'UserCtrl'
      })
      .state('contact', {
        url: "/contact",
        templateUrl: 'views/contact.html',
        controller: 'UserCtrl'
      })
      .state('dashboard', {
        url: "/dashboard",
        templateUrl: 'views/dashboard.html',
        controller: 'ProcessCtrl',
        controllerAs: 'dashboard',
        data: {
          permissions: {
            only: ['isAuthenticated'],
            redirectTo: 'login'
          }
        }
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
      .state('401', {
        url: "/401",
        templateUrl: 'views/notAuthorized.html'
      })
      .state('admin', {
        url: "/admin",
        templateUrl: 'views/test.html',
        controller: 'MainCtrl',
        controllerAs: 'about',
        data: {
          permissions: {
            only: ['isAdmin'],
            redirectTo: '401'
          }
        }
      });
  })
  //translation config
  .config(function ($translateProvider) {

    $translateProvider.translations('en', {
      LOGIN: "Sign in first",
      LOGINFAIL: "Log in failed! Make sure you enter the correct credentials",
      USERNAME: "Username",
      PASSWORD: "Password",
      LOGINBUTTON: "Sign in",
      REGISTER: "I don't have an account",

      RECOVER_PASSWORD:"I forgot my password",
      RECOVER_PASSWORD_INSTRUCTIONS:"Please fill in your emailadress",
      RECOVER_PASSWORD_INSTRUCTIONS2:"An email will be send with further instructions",
      RECOVER_PASSWORD_BUTTON:"Send recovery email",

      ENGLISH: "English",
      BASE: "Base64",
      MYPROFILE: "My profile",
      SIGNOUT: "Sign out",
      HOME: "Dashboard",
      PURCHASE: "Purchase",
      CONTACT: "Contact",
      CURRENT: "Current",
      TOBE: "To be",
      QUALITY: "Quality",
      COMPANYNAME:"Company name",
      COMPANYDESCRIPTION:"Company description",
      ADRESS:"Adress",
      ZIPCODE:"Zipcode",
      CITY:"City",
      EMAIL:"E-mail",
      REGISTERBUTTON:"Register",
      PASSWORDCONFIRM: "Confirm password",
      CANCELRBUTTON:"Cancel",
      REGISTERTITLE: "Register"
    });

    $translateProvider.translations('nl', {
      LOGIN: "Log eerst in",
      LOGINFAIL: "Inloggen niet gelukt! Zorg dat je de goede gegevens invult!",
      USERNAME: "Gebruikersnaam",
      PASSWORD: "Wachtwoord",
      LOGINBUTTON: "Aanmelden",
      REGISTER: "Ik heb nog geen account",

      RECOVER_PASSWORD:"I forgot my password",
      RECOVER_PASSWORD_INSTRUCTIONS:"Please fill in your emailadress",
      RECOVER_PASSWORD_INSTRUCTIONS2:"An email will be send with further instructions",
      RECOVER_PASSWORD_BUTTON:"Send recovery email",
      
      ENGLISH: "Engels",
      BASE: "Baas",
      MYPROFILE: "Mijn profiel",
      SIGNOUT: "Uitloggen",
      HOME: "Dashboard",
      PURCHASE: "Aankopen",
      CONTACT: "Contact",
      CURRENT: "Huidige",
      TOBE: "Verbetering",
      QUALITY: "Kwaliteit",
      COMPANYNAME:"Bedrijfsnaam",
      COMPANYDESCRIPTION:"Bedrijfsomschrijving",
      ADRESS:"Adres",
      ZIPCODE:"Postcode",
      CITY:"Woonplaats",
      EMAIL:"E-mailadres",
      REGISTERBUTTON:"Registreer",
      PASSWORDCONFIRM:"Wachtwoord bevestigen",
      CANCELRBUTTON:"Annuleren",
      REGISTERTITLE:"Registreren"
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


