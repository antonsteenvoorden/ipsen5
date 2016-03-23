angular.module('wfpcs', ['ngRoute'])
    .config(function ($httpProvider) {
        //$httpProvider.interceptors.push('requestService');

        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
    }).config(function ($locationProvider) {
    $locationProvider.baseHref = '/';
    $locationProvider.html5Mode(true);
});


    
