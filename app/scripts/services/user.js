'use strict';

/**
 * @ngdoc service
 * @name wfpcsFrontApp.user
 * @description
 * # user
 * Service in the wfpcsFrontApp.
 */
angular.module('wfpcsFrontApp')
  .service('userService', function (authenticationService, $state) {
    var self = this;

    //credential shit
    var accessId = null;
    var accessKey = null;
    var permissions = [];
    var authenticator = null;

    self.register = function (user) {
      var uri = 'api/klanten/';
      var data = {
        username: user.username,
        password: user.password
      };

      $http.post(uri, data)
        .success(onCreated)
        .error(function (message) {
          alert('Aanmaken mislukt: ' + message);
        });
    };

    self.authenticate = function (user) {
      if (user) {
        if (authenticationService.authenticate(user)) {
          $state.go('dashboard')
        }
      }
    };

    self.logOut = function(){
      authenticationService.deleteAuthentication();
    };

  });
