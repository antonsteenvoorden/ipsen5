'use strict';

/**
 * @ngdoc service
 * @name wfpcsFrontApp.user
 * @description
 * # user
 * Service in the wfpcsFrontApp.
 */
angular.module('wfpcsFrontApp')
  .service('user', function ($http) {
    var self = this;
    // AngularJS will instantiate a singleton by calling "new" on this function
    self.register = function (user) {
      var uri = 'api/klanten/';
      var data = {
        username:user.username,
        password:user.password
      };

      $http.post(uri, data)
        .success(onCreated)
        .error(function (message) {
          alert('Aanmaken mislukt: ' + message);
        });
    };
  })
;
