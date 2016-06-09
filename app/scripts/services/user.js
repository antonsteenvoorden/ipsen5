/**
 * Created by Anton on 08/06/2016.
 */
'use strict';
angular.module('wfpcsFrontApp')
  .service('userService', function ($http) {
    var self = this;

    self.getMyProfile = function (id, onSuccess) {
      var uri = 'api/account/' + id;
      console.log("making call to", uri);
      $http.get(uri)
        .success(function (result) {
          onSuccess(result);
        })
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message, status);
        });
    };

    self.callRegister = function (account, resolved, rejected) {
      var uri = 'api/account/';
      var data = JSON.stringify(account);
      console.log(data);
      $http.post(uri, data)
        .success(resolved)
        .error(function (err) {
          rejected();
          console.log(err);
        })
    };

    self.requestAuthentication = function (onSuccess) {
      var uri = '/api/account/auth/me';
      $http.get(uri)
        .success(function (result) {
          onSuccess(result);
        })
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message, status);
        });
      // onSuccess(true);
    };

  });
