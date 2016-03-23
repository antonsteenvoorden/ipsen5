//Edited by All
// Deze functie schrijft automatisch alle javascript src's die hier genoteerd zijn.

(function(){
    // Libraries
    addScript('assets/js/jquery.min.js');               // jQuery
    addScript('assets/js/angular-route.min.js');        // Angular Directives
    addScript('assets/js/bootstrap.min.js');            // Twitter Bootstrap
    addScript('assets/js/angular.min.js');              // Angular

    // Applicatie
    addScript('app/bootstrap.js');
    //addScript('app/routes.js');
    //addScript('app/run.js');

    // Controllers
    addScript('app/controllers/HeaderController.js');

    // Services
    //addScript('app/services/RequestService.js');




    function addScript(url){
        document.write('<script type="text/javascript" src="' + url + '"></script>');
    }
})();
