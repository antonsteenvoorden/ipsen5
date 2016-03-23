//--Edited by all--

angular.module('ipsen3').config(function($routeProvider) {
    
    $routeProvider.
            
            // standaard urls
            when('/home', {
                    templateUrl: 'assets/partials/home.html',
                    controller: 'homeController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/contact', {
                    templateUrl: 'assets/partials/contact.html',
                    controller: 'contactController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/producten', {
                    templateUrl: 'assets/partials/producten.html',
                    controller: 'bestellingenController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/acties', {
                    templateUrl: 'assets/partials/acties.html',
                    controller: 'actieController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/registratie', {
                    templateUrl: 'assets/partials/registration.html',
                    controller: 'registratieController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/inloggen', {
                    templateUrl: 'assets/partials/inloggen.html',
                    controller: 'inloggenController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/wachtwoordvergeten', {
                    templateUrl: 'assets/partials/wachtwoordvergeten.html',
                    controller: 'wwVergetenController',
                    access: {
                        requiresLogin: false,
                        requiredPermissions: ['gast', 'klant', 'lid', 'ms', 'admin']
                    }
                }).


            // ACCOUNT URLS
            when('/mijnaccount', {
                    templateUrl: 'assets/partials/mijnaccount.html',
                    controller: 'mijnAccountController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/bewerkprofiel', {
                    templateUrl: 'assets/partials/user/profielBewerken.html',
                    controller: 'profielBewerkenController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/bekijkprofiel', {
                    templateUrl: 'assets/partials/user/profielInformatie.html',
                    controller: 'profielBekijkenController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/bekijkbestellingen', {
                    templateUrl: 'assets/partials/user/bestellingBekijken.html',
                    controller: 'bestellingenController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['klant', 'lid', 'ms', 'admin']
                    }
                }).
            when('/bewerkwachtwoord', {
                    templateUrl: 'assets/partials/user/wachtwoordBewerken.html',
                    controller: 'profielBewerkenController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['klant', 'lid', 'ms', 'admin']
                    }
                }).



            //LID & SALES MANAGER URLS
            when('/admin', {
                    templateUrl: 'assets/partials/cms/adminPagina.html',
                    controller: 'adminPaginaController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['lid', 'ms', 'admin']
                    }
                }).
            when('/dashboard', {
                templateUrl: 'assets/partials/kpi.html',
                controller: 'kpiController',
                access: {
                    requiresLogin: true,
                    requiredPermissions: ['ms', 'admin']
                }
            }).

            //TODO: KPI pagina



            //ADMIN URLS
            when('/wijziggebruikersrechten', {
                    templateUrl: 'assets/partials/cms/wijzigGebruikersrechten.html',
                    controller: 'adminPaginaController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['admin']
                    }
                }).
            when('/actieaanmaken', {
                    templateUrl: 'assets/partials/cms/actieAanmaken.html',
                    controller: 'actieAanmakenController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['admin']
                    }
                }).
            when('/actiebewerken', {
                    templateUrl: 'assets/partials/cms/actieOverzicht.html',
                    controller: 'actieOverzichtController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['admin']
                    }
                }).
            when('/actiebewerken/id/:id', {
                    templateUrl: 'assets/partials/cms/actieBewerken.html',
                    controller: 'actieBewerkenController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['admin']
                    }
                }).
            when('/nieuwsbriefversturen', {
                    templateUrl: 'assets/partials/cms/nieuwsbriefVersturen.html',
                    controller: 'nieuwsbriefController',
                    access: {
                        requiresLogin: true,
                        requiredPermissions: ['admin']
                    }
                }).


            otherwise({redirectTo: '/home', templateUrl: 'assets/partials/home.html', controller: 'homeController'});

    // Voeg hier meer routes toe

});
