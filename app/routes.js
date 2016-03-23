//--Edited by all--

angular.module('wfpcs').config(function ($routeProvider) {

    // standaard urls
    $routeProvider.
    when('/home', {
        templateUrl: 'assets/partials/home.html',
        controller: 'homeController',
        access: {
            requiresLogin: false,
            requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
        }
    }).otherwise({redirectTo: '/home', templateUrl: 'assets/partials/home.html', controller: 'homeController'});



    ////LID & SALES MANAGER URLS
    //when('/admin', {
    //    templateUrl: 'assets/partials/cms/adminPagina.html',
    //    controller: 'adminPaginaController',
    //    access: {
    //        requiresLogin: true,
    //        requiredPermissions: ['lid', 'ms', 'admin']
    //    }
    //}).when('/dashboard', {
    //    templateUrl: 'assets/partials/kpi.html',
    //    controller: 'kpiController',
    //    access: {
    //        requiresLogin: true,
    //        requiredPermissions: ['ms', 'admin']
    //    }
    //}).

    //
    ////ADMIN URLS
    //when('/wijziggebruikersrechten', {
    //    templateUrl: 'assets/partials/cms/wijzigGebruikersrechten.html',
    //    controller: 'adminPaginaController',
    //    access: {
    //        requiresLogin: true,
    //        requiredPermissions: ['admin']
    //    }
    //}).otherwise({redirectTo: '/home', templateUrl: 'assets/partials/home.html', controller: 'homeController'});
});
