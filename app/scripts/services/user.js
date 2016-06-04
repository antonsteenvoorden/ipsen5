/**
 * Created by Sven on 2-6-2016.
 */

//Hier komt een functie, die een account verwacht als parameter. Deze functie

//definieren
'use strict';
angular.module('wfpcsFrontApp')
  .service('userService', function ($http) {
    var self = this;
    self.register = function(account) {

      var uri = 'api/account/';
      var data = account;

      console.log("register(account) aangeroepen")

      $http.post(uri, data)

      //TODO: vraag na wat hier gedaan moet worden

      console.log("http eind")
    }
  });
