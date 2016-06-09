/**
 * Created by Sven on 8-6-2016.
 */
'use strict';
angular.module('wfpcsFrontApp')
  
// TODO: Deze gehele calls kunnen naar mijn idee weg, aangezien de data voor een proces globaal al wordt opgehaald op het moment van navigatie.
  .service('cycleBarService', function ($http) {
    var self = this;
    self.getBarDataBatchCycleBar = function() {

      var uri = 'api/account/';

      console.log("dataopvraag(barcyclechart) aangeroepen")

      $http.get(uri)

      

      console.log("http eind")
    }
  })

  .service('cycleBarService', function ($http) {
    var self = this;
    self.getBarDataBatchCycleBottleneckBar = function() {

      var uri = 'api/account/';

      console.log("dataopvraag(barcyclechart) aangeroepen")

      $http.get(uri)

      

      console.log("http eind")
    }
  })

  .service('cycleBarService', function ($http) {
    var self = this;
    self.getBarDataVendorPrioritiesBar = function() {

      var uri = 'api/account/';

      console.log("dataopvraag(barcyclechart) aangeroepen")

      $http.get(uri)
      
      

      console.log("http eind")
    }
  })

  .service('cycleBarService', function ($http) {
    var self = this;
    self.getBarDataDisturbanceBar = function() {

      var uri = 'api/account/';

      console.log("dataopvraag(barcyclechart) aangeroepen")

      $http.get(uri)



      console.log("http eind")
    }
  })

  .service('cycleBarService', function ($http) {
    var self = this;
    self.getBarDataDisturbancePrioritiesBar = function() {

      var uri = 'api/account/';

      console.log("dataopvraag(barcyclechart) aangeroepen")

      $http.get(uri)

  

      console.log("http eind")
    }
  });
