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
    'ui.router',
    'permission',
    'permission.ui',
    'ngDialog',
    'validation.match'
  ])
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    customer: 'customer',
    guest: 'guest'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get('$state');
      $state.go('/');
    });
    //$urlRouterProvider.html5Mode(true);
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .state('recover', {
        url: '/recover',
        templateUrl: 'views/recover.html',
        controller: 'UserCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'UserCtrl'
      })
      .state('myprofile', {
        url: '/myprofile',
        templateUrl: 'views/myprofile.html',
        controller: 'UserCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'UserCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
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
        url: '/process',
        templateUrl: 'views/tabs/process.html',
        controller: 'ProcessStepCtrl'
      })
      .state('process.current', {
        url: '/current',
        templateUrl: 'views/tabs/current.html',
        controller: 'ProcessStepCtrl'
      })
      .state('process.improvement', {
        url: '/improvement',
        templateUrl: 'views/tabs/improvement.html',
        controller: 'ProcessStepCtrl'
      })
      .state('process.quality', {
        url: '/quality',
        templateUrl: 'views/tabs/quality.html',
        controller: 'ProcessStepCtrl'
      })
      .state('process.vendor', {
        url: '/vendor',
        templateUrl: 'views/tabs/vendor.html',
        controller: 'ProcessStepCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('401', {
        url: '/401',
        templateUrl: 'views/notAuthorized.html'
      })
      .state('admin', {
        url: '/admin',
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

  /*
  Allowes to set options for the angular-chart module.
   */
  .config(function(ChartJsProvider) {

  })


  //translation config
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      LOGIN: 'Sign in first',
      LOGINFAIL: 'Log in failed! Make sure you enter the correct credentials',
      REGISTERSUCCESS:'An email has been sent',
      REGISTERFAIL:'Register failed.. Try another username and make sure your info is correct',
      USERNAME: 'Username',
      PASSWORD: 'Password',
      LOGINBUTTON: 'Sign in',
      REGISTER: 'I don\'t have an account',
      CHANGEPASSWORDBUTTON: 'Change password',
      SAVECHANGEBUTTON: 'Submit change',

      RECOVER_PASSWORD: 'I forgot my password',
      RECOVER_PASSWORD_INSTRUCTIONS: 'Please fill in your emailadress',
      RECOVER_PASSWORD_INSTRUCTIONS2: 'An email will be send with further instructions',
      RECOVER_PASSWORD_BUTTON: 'Send recovery email',

      ENGLISH: 'English',
      BASE: 'Dutch',
      MYPROFILE: 'My profile',
      SIGNOUT: 'Sign out',
      HOME: 'Dashboard',
      PURCHASE: 'Purchase',
      CONTACT: 'Contact',
      CURRENT: 'As-is',
      TOBE: 'To-be',
      QUALITY: 'Test',
      VENDOR: 'Vendor Rating',
      COMPANYNAME: 'Company name',
      COMPANYDESCRIPTION: 'Company description',
      ADDRESS: 'Address',
      ZIPCODE: 'Zipcode',
      CITY: 'City',
      EMAIL: 'E-mail address',
      REGISTERBUTTON: 'Register',
      PASSWORDCONFIRM: 'Confirm password',
      CANCELRBUTTON: 'Cancel',
      REGISTERTITLE: 'Register',
      PASSWORDMISSMATCH: "password mismatch!",
      FIRSTNAME:'First name',
      LASTNAME:'Last name',
      SALUTATION:'Salutation',

      HIDEFOOTER: "Hide content",
      SHOWFOOTER: "Show content",
      TOTALTRANSPORTTIMEMINUTE:"Total transport time in minutes",
      TOTALHOLDTIMEMINUTE: "Total hold time in minutes",
      TOTALCONVERTTIMEMINUTE: "Total convert time in minutes",
      TOTALTIMEMINUTE: "Total time in minutes",
      TOTALTRANSPORTTIMEPERCENTAGE: "Total transport time in percentage",
      TOTALHOLDTIMEPERCENTAGE: "Total hold time in percentage",
      TOTALCONVERTTIMEPERCENTAGE: "Total convert time in percentage",
      TOTALTIMEPERCENTAGE: "Total time in percentage",
      CYCLETIMEINFO: "Show additional information",

      TTTM: "TTTM",
      THTM: "THTM",
      TCTM: "TCTM",
      TTM: "TTM",
      TTTP: "TTTP",
      THTP: "THTP",
      TCTP: "TCTP",
      TTP: "TTP",
      LOW:'Low',
      HIGH:'High',
      EDIT:'Edit',
      REMOVE:'Remove',

      TRAVEL_DISTANCE:'Travel distance',
      CYCLE_TIME:'Cycle time',
      NAME:'Name',
      COST:'Cost',
      HEAD_COUNT:'Head count',
      ENERGY_USAGE:'Energy usage',

      CAPACITY:'Capacity',
      CERTIFIED:'Certified',
      CLOCK:'Clock',
      COMPLAINTS:'Complaints',
      CSR:'CSR',
      CASH:'Cash',
      CULTURE:'Culture'
    });

    $translateProvider.translations('nl', {
      LOGIN: 'Log eerst in',
      LOGINFAIL: 'Inloggen niet gelukt! Zorg dat je de goede gegevens invult!',
      REGISTERSUCCESS:'Er is een mail verstuurd',
      REGISTERFAIL:'Register failed.. Try another username and make sure your info is correct',
      USERNAME: 'Gebruikersnaam',
      PASSWORD: 'Wachtwoord',
      LOGINBUTTON: 'Aanmelden',
      REGISTER: 'Ik heb nog geen account',
      CHANGEPASSWORDBUTTON: 'Wijzig wachtwoord',
      SAVECHANGEBUTTON: 'Wijzig',

      RECOVER_PASSWORD: 'I forgot my password',
      RECOVER_PASSWORD_INSTRUCTIONS: 'Please fill in your emailadress',
      RECOVER_PASSWORD_INSTRUCTIONS2: 'An email will be send with further instructions',
      RECOVER_PASSWORD_BUTTON: 'Send recovery email',

      ENGLISH: 'Engels',
      BASE: 'Nederlands',
      MYPROFILE: 'Mijn profiel',
      SIGNOUT: 'Uitloggen',
      HOME: 'Dashboard',
      PURCHASE: 'Aankopen',
      CONTACT: 'Contact',
      CURRENT: 'Huidig',
      TOBE: 'Gewenst',
      QUALITY: 'Kwaliteit',
      VENDOR: 'Leveranciers',
      COMPANYNAME: 'Bedrijfsnaam',
      COMPANYDESCRIPTION: 'Bedrijfsomschrijving',
      ADDRESS: 'Adres',
      ZIPCODE: 'Postcode',
      CITY: 'Woonplaats',
      EMAIL: 'E-mailadres',
      REGISTERBUTTON: 'Registreer',
      PASSWORDCONFIRM: 'Wachtwoord bevestigen',
      CANCELRBUTTON: 'Annuleren',
      REGISTERTITLE: 'Registreren',
      PASSWORDMISSMATCH: "Foutieve confirmatie!",
      FIRSTNAME:'Voornaam',
      LASTNAME:'Achternaam',
      SALUTATION:'Aanhef',

      HIDEFOOTER: "Verberg inhoud",
      SHOWFOOTER: "Toon inhoud",
      TOTALTRANSPORTTIMEMINUTE:"Totale transport tijd in minuten:",
      TOTALHOLDTIMEMINUTE: "Totale opslag tijd in minuten",
      TOTALCONVERTTIMEMINUTE: "Totale bewerk tijd in minuten",
      TOTALTIMEMINUTE: "Totale tijd in minuten",
      TOTALTRANSPORTTIMEPERCENTAGE: "Totale transport tijd in percentage",
      TOTALHOLDTIMEPERCENTAGE: "Totale opslag tijd in percentage",
      TOTALCONVERTTIMEPERCENTAGE: "Totale bewerk tijd in percentage",
      TOTALTIMEPERCENTAGE: "Totale tijd in percentage",
      CYCLETIMEINFO: "Toon extra informatie",

      TTTM: "TTTM",
      THTM: "TOTM",
      TCTM: "TBTM",
      TTM: "TTM",
      TTTP: "TTTP",
      THTP: "TOTP",
      TCTP: "TBTP",
      TTP: "TTP",
      LOW:'Laag',
      HIGH:'Hoog',
      EDIT:'Edit',
      REMOVE:'Remove',

      TRAVEL_DISTANCE:'Travel distance',
      CYCLE_TIME:'Cycle time',
      NAME:'Name',
      COST:'Cost',
      HEAD_COUNT:'Head count',
      ENERGY_USAGE:'Energy usage',

      CAPACITY:'Capaciteit',
      CERTIFIED:'Certified',
      CLOCK:'Tijd',
      COMPLAINTS:'Klachten',
      CSR:'CSR',
      CASH:'Geld',
      CULTURE:'Cultuur'
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

