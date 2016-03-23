/*
 * Edited By: Sidney de Geus
 */

/**
 * run file dat wordt uitgevoerd na de config en voor de headerController.
 * Checkt of de url veranderd, en zo ja gaat checken of iemand juiste rechten heeft
 * voor de nieuwe geopende pagina.
**/

angular.module('ipsen3').run(function($rootScope, $location, authenticationService, $route, $window) {

     $rootScope.nietBesteldBestelling = [];
     $rootScope.bestellingWachtende = false;

     $rootScope.$on('$routeChangeStart', function(event, next, current) {
        var pagePermissions = [];

        angular.forEach($route.routes, function(route, key){
            if(key == $location.path()) {
                Object.keys(route.access.requiredPermissions).map(function(k) {
                    pagePermissions[k] = route.access.requiredPermissions[k].toLowerCase();
                });
                console.log(pagePermissions);
            }
        });

        var userPermissions = authenticationService.getPermissions();

        start:
        for(var i = 0; i < pagePermissions.length; i++) {
            var n = 0;
            while(n < userPermissions.length) {
                if(userPermissions[n] === pagePermissions[i]) {
                    console.log('permission granted');
                    break start;
                }
                n++;
            }
            if(n >= userPermissions.length) {
                console.log('no permission');
                $window.location.href = ('/');
            }
        }
     });
});
