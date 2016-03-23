//Edited by All
// Deze functie schrijft automatisch alle javascript src's die hier genoteerd zijn.

(function(){

    // Applicatie
    addScript('app/bootstrap.js');
    addScript('app/routes.js');
    addScript('app/run.js');

    // Controllers
    addScript('app/controllers/HeaderController.js');
    addScript('app/controllers/BestellingenController.js');
    addScript('app/controllers/HomeController.js');
    addScript('app/controllers/ContactController.js');
    addScript('app/controllers/InloggenController.js');
    addScript('app/controllers/RegistratieController.js');
    addScript('app/controllers/WWVergetenController.js');
    addScript('app/controllers/MijnAccountController.js');
    addScript('app/controllers/ProfielBewerkenController.js');
    addScript('app/controllers/ProfielBekijkenController.js');
    addScript('app/controllers/AdminPaginaController.js');
    addScript('app/controllers/ActieController.js');
    addScript('app/controllers/UitloggenController.js');
    addScript('app/controllers/ActieAanmakenController.js');
    addScript('app/controllers/ActieBewerkenController.js');
    addScript('app/controllers/KpiController.js');
    addScript('app/controllers/NieuwsbriefController.js');

    // Services
    addScript('app/services/AuthenticationService.js');
    addScript('app/services/RequestService.js');
    addScript('app/services/BestellingenClientService.js');
    addScript('app/services/InloggenClientService.js');
    addScript('app/services/RegistratieClientService.js');
    addScript('app/services/ActieClientService.js');
    addScript('app/services/ProfielBekijkenService.js');
    addScript('app/services/ProfielBewerkenService.js');
    addScript('app/services/ContactClientService.js');
    addScript('app/services/AdminService.js');
    addScript('app/services/KpiService.js');
    addScript('app/services/NieuwsbriefService.js');
    //TODO services toevoegen


    // Javascript
    addScript('app/js/jquery.min.js');                  // jQuery
    addScript('app/js/bootstrap.min.js');               // Bootstrap
    addScript('app/js/jquery.parallax.js');             // Parallax
    addScript('app/js/smoothscroll.js');                // Smooth Scroll
    addScript('app/js/masonry.pkgd.min.js');            // masonry
    addScript('app/js/jquery.fitvids.js');              // fitvids
    addScript('app/js/owl.carousel.min.js');            // Owl-Carousel
    addScript('app/js/jquery.counterup.min.js');        // CounterUp
    addScript('app/js/waypoints.min.js');               // CounterUp
    addScript('app/js/jquery.isotope.min.js');          // isotope
    addScript('app/js/jquery.magnific-popup.min.js');   // magnific-popup
    addScript('app/js/scripts.js');                     // Scripts

    function addScript(url){
        document.write('<script type="text/javascript" src="' + url + '"></script>');
    }
})();
