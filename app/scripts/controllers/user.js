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

    $scope.callRegister = function (user) {
      userService.callRegister(user, function(){
        $mdToast.show($mdToast.simple().textContent($translate.instant('REGISTERSUCCESS')));
      });
    };

    self.authenticate = function(user) {
      authenticationService.setAccessId(user.username);
      authenticationService.setAccessKey(user.password);
      var succesful = false;
      return self.requestAuthentication(function(user){
        console.log(user,"Success");
        if(user) {
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
