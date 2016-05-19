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
        password: user.password,
        companyname: user.companyname,
        companydescription: user.companydescription,
        adress: user.adress,
        zipcode: user.zipcode,
        city: user.city,
        email: user.email
      };

      $http.post(uri, data)
        .success(onCreated)
        .error(function (message) {
          alert('Aanmaken mislukt: ' + message);
        });
    };

/*check of de wachtwoorden overeen komen.
* dient nog aangepast te worden.
* moet uitgevoerd worden voor het registreren, en bepaalt of het registreren daadwerkelijk gebeurd.
* */
    self.checkPassword = function (user,userPassword){
      var data = {
        password: user.password,
        passwordconfirm: userPassword.passwordconfirm
      }
      if (user, userPassword){
        if (data.password.equal(data.passwordconfirm)){

        }
      }
    }

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
