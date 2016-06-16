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
      var data = JSON.stringify(account);
      console.log(data);
      var uri = 'api/account/';
      $http.post(uri, data)
        .success(resolved)
        .error(function (err) {
          rejected();
          console.log(err);
        })
    };

    self.callEdit = function (account, resolved, rejected) {
      var uri = 'api/account/' + account.id;
      var data = angular.toJson(account);
      $http.put(uri, data)
        .success(resolved)
        .error(rejected)
    };

    self.requestAuthentication = function (onSuccess) {
      var uri = 'api/account/auth/me';
      $http.get(uri)
        .success(function (result) {
          onSuccess(result);
        })
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message, status);
        });
      // onSuccess(true);
    };

    self.editPassword = function (password, callback) {
      var uri = 'api/account/password';
      var data = {
        password: password
      };
      console.log("password to send", data);
      $http.put(uri, data)
        .success(callback)
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message, status);
        });
    };
  });
