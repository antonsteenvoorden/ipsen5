// jshint ignore: start
'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp')
  .controller('UserCtrl', function ($scope, $rootScope, $translate, $state, $mdToast, $http, authenticationService) {
    var self = this;

    $scope.login = function (user) {
      if (user) {
        if (self.authenticate(user)) {
          $state.go('dashboard');
        } else {
          $mdToast.show($mdToast.simple().textContent($translate.instant('LOGINFAIL')));
        }
      }
    };

    $scope.logOut = function(){
      authenticationService.deleteAuthentication();
      $state.go('login');
    };

    $scope.isAuthenticated = function () {
      return authenticationService.authenticated;
    };

    $scope.register = function (user) {
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

    // /*check of de wachtwoorden overeen komen.
    //  * dient nog aangepast te worden.
    //  * moet uitgevoerd worden voor het registreren, en bepaalt of het registreren daadwerkelijk gebeurd.
    //  * */
    // self.checkPassword = function (user,userPassword){
    //   var data = {
    //     password: user.password,
    //     passwordconfirm: userPassword.passwordconfirm
    //   };
    //     if (data.password.equal(data.passwordconfirm)){
    //
    //     }
    // };
    //

    self.authenticate = function(user) {
      authenticationService.setAccessId(user.username);
      authenticationService.setAccessKey(user.password);

      self.requestAuthentication( function(authenticated){
        console.log(authenticated);
        if(authenticated) {
          authenticationService.setAuthenticator(user);
          //self.setPermissions(user.permissions);
          authenticationService.setPermissions(['ADMIN']);
          authenticationService.storeAuthentication(user);
        }
        authenticationService.authenticated = authenticated;
      });
      return authenticationService.authenticated;
    };

    self.requestAuthentication = function (onSuccess) {
      var uri = '/api/account/auth/me';
      $http.get(uri)
        .success(function(data){
          console.log(data);
          onSuccess(data)
        })
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message);
        });
    };
  });
