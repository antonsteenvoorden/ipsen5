/**
 * Created by Anton on 14-6-2016.
 */
angular.module('wfpcsFrontApp')
  .service('adminService', function ($http) {

    var self = this;
    self.getCustomers = function (callback) {
      var uri = 'api/account/';
      $http.get(uri)
        .success(function (result) {
          callback(result);
        })
        .error(function (message, status) {
          alert('Ophalen customers mislukt: ' + message, status);
        });
      //callback(users);
    };

    self.getPermissions = function(callback) {
      var uri = 'api/permission/';
      $http.get(uri)
        .success(function (result) {
          callback(result);
        })
        .error(function (message, status) {
          alert('Ophalen permissions mislukt: ' + message, status);
        });
    }
  });

