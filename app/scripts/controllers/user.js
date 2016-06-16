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


    if($state.current.name === 'myprofile') {
      userService.getMyProfile(authenticationService.getAuthenticator().id, function (account) {
        console.log(account);
        $scope.user = account;
      });
    }

    $scope.login = function (user) {
      if(user) {
        self.authenticate(user);
      }
    };

    $scope.logOut = function(){
      authenticationService.deleteAuthentication();
      $state.go('login');
    };


    $scope.edit = function(user){
      userService.callEdit(user, function(){
        $mdToast.show($mdToast.simple().textContent($translate.instant('CUSTOMEREDITSUCCESS')));
      }, function(){
        $mdToast.show($mdToast.simple().textContent($translate.instant('CUSTOMEREDITFAIL')));
      });
    };

    $scope.editPassword = function(password) {
      console.log('password:', password);
      userService.editPassword(password, function() {
        authenticationService.deleteAuthentication();
        $mdToast.show($mdToast.simple().textContent($translate.instant('PASSWORDEDITSUCCESS')));
        $state.go('login');
      });
    };

    $scope.isAuthenticated = function () {
      return authenticationService.authenticated;
    };

    $scope.callRegister = function (user) {
      userService.callRegister(user, function(){
        $mdToast.show($mdToast.simple().textContent($translate.instant('REGISTERSUCCESS')));
        $state.go('login');
      }, function(){
        $mdToast.show($mdToast.simple().textContent($translate.instant('REGISTERFAIL')));
      });
    };

    self.authenticate = function(authenticator) {
      authenticationService.setAccessId(authenticator.username);
      authenticationService.setAccessKey(authenticator.password);
      var succesful = false;
      return userService.requestAuthentication(function(user){
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
  });
