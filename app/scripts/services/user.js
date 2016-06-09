/**
 * Created by Anton on 08/06/2016.
 */
'use strict';
angular.module('wfpcsFrontApp')
  .service('userService', function ($http) {
    var self = this;
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

    }
  });
