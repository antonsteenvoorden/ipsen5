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
  .controller('UserCtrl', function ($scope, $rootScope, $translate, $state, $mdToast, $http, authenticationService, userService) {
    var self = this;

    $scope.login = function (user) {
      // if (user) {
      //   if (self.authenticate(user)) {
      //     $state.go('dashboard');
      //   } else {
      //     $mdToast.show($mdToast.simple().textContent($translate.instant('LOGINFAIL')));
      //   }
      // }
      if(user) {
        self.authenticate(user);
      }
    };

    $scope.logOut = function(){
      authenticationService.deleteAuthentication();
      $state.go('login');
    };

    $scope.isAuthenticated = function () {
      return authenticationService.authenticated;
    };

    $scope.salutation = [
      { id: 1, salutation: $translate.instant('HEER') },
      { id: 2, salutation: $translate.instant('MEVROUW') }
    ];

    $scope.registeruser = function (user) {
      var account = {
        username: user.username,
        password: user.password,
        customer: {
          businessname: user.companyname,
          description: user.companydescription,
          adress: user.adress,
          zipcode: user.zipcode,
          city: user.city,
          emailaddress: user.emailadress,
          firstname: user.firstname,
          lastname: user.lastname,
          salutation: user.salutation,
        }
      };

        userService.register(account);
    };

    $scope.cancelregister = function(){
      $state.go('login');
    };

    self.authenticate = function(authenticator) {
      authenticationService.setAccessId(authenticator.username);
      authenticationService.setAccessKey(authenticator.password);
      var succesful = false;
      return self.requestAuthentication(function(user){
        console.log(user,"Success");
        if(user) {
          user.password = authenticator.password;
          authenticationService.authenticated = true;
          authenticationService.setAuthenticator(user);
          authenticationService.storeAuthentication(user);
          succesful = true;
          $state.go('dashboard');
        } else {
          authenticationService.authenticated = false;
          $mdToast.show($mdToast.simple().textContent($translate.instant('LOGINFAIL')));
        }
        return succesful;
      });
    };
    // TODO moet dit niet naar een service????
    self.requestAuthentication = function (onSuccess) {
      var uri = '/api/account/auth/me';
      console.log("authentication called");
      $http.get(uri)
       .success(function(result){
         onSuccess(result);
       })
       .error(function (message, status) {
         alert('Inloggen mislukt: ' + message, status);
       });
    // onSuccess(true);
    };

  });
