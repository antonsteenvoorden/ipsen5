angular.module('ipsen3', ['ngRoute'])
    .config(function($httpProvider)
    {
        $httpProvider.interceptors.push('requestService');

        if(!$httpProvider.defaults.headers.get)
        {
            $httpProvider.defaults.headers.get = {};
        }

        //html5 support gets rid of the # after the url.
        //Doen't really work so leave commented
        //$locationProvider.html5Mode(true);
    })
;

    
