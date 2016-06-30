// jshint ignore: start
/**
 * Created by Anton on 17-5-2016.
 * Stores all info related to authentication of users
 */
'use strict';
angular.module('wfpcsFrontApp')
  .service('authenticationService', function ($rootScope, $window) {
    var self = this;

    //credential shit
    var accessId = null;
    var accessKey = null;
    var permissions = [];
    self.authenticated = false;


    // GETTERS & SETTERS
    self.getAccessId = function () {
      return self.accessId;
    };

    self.setAccessId = function (id) {
      self.accessId = id;
    };

    self.getAccessKey = function () {
      return self.accessKey;
    };

    self.setAccessKey = function (key) {
      self.accessKey = key;
    };

    self.setRoles = function () {

    };
    self.getRoles = function () {
      if ($rootScope.authenticator.roles) {
        return $rootScope.authenticator.roles;
      } else {
        return [];
      }
    };

    self.getPermissions = function () {
      if ($rootScope.authenticator) {
        if ($rootScope.authenticator.permissions) {
          return $rootScope.authenticator.permissions;
        }
      } else {
        return [];
      }
    };

    self.setPermissions = function (permissions) {
      if ($rootScope.authenticator !== undefined) {
        this.permissions = permissions;
        $rootScope.authenticator.permissions = permissions;
      }
    };
    self.setAuthenticator = function (user) {
      $rootScope.authenticator = user;
    };

    self.getAuthenticator = function () {
      return $rootScope.authenticator;
    };

    self.createAuthorizationString = function () {
      return 'Basic ' + Base64.encode(self.accessId + ':' + self.accessKey);
    };

    self.isAuthenticated = function () {
      if (!self.authenticated) {
        self.restoreAuthentication();
      }
      return self.authenticated;
    };

    self.createAuthentication = function (identifier, password) {
      self.setAccessId(identifier);
      self.setAccessKey(password);
    };

    self.storeAuthentication = function (user) {
      var authenticator = angular.toJson(user);
      user.password = self.getAccessId();
      var storage = $window.localStorage;
      storage.setItem('authenticator', authenticator);
    };

    self.restoreAuthentication = function () {
      var authenticator = $window.localStorage.getItem('authenticator');

      if (authenticator !== null) {
        authenticator = JSON.parse(authenticator);
        self.setAccessId(authenticator.username);
        self.setAccessKey(authenticator.password);
        //self.setPermissions(authenticator.permissions);
        self.setAuthenticator(authenticator);
        self.authenticated = true;
      } else {
        self.setAuthenticator(undefined);
        self.authenticated = false;
      }
    };

    self.deleteAuthentication = function () {
      self.setAccessId(null);
      self.setAccessKey(null);
      self.setPermissions(null);
      self.setAuthenticator(undefined);
      self.authenticated = false;
      $window.sessionStorage.removeItem('authenticator');
      $window.localStorage.removeItem('authenticator');
    };


    /**
     * used to send data encrypted in base64 over the line
     * @type {{keyStr: string, encode: Base64.encode, decode: Base64.decode}}
       */
    var Base64 = {
      keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

      encode: function (input) {
        var output = '';
        var chr1, chr2, chr3 = '';
        var enc1, enc2, enc3, enc4 = '';
        var i = 0;

        do {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }

          output = output +
            this.keyStr.charAt(enc1) +
            this.keyStr.charAt(enc2) +
            this.keyStr.charAt(enc3) +
            this.keyStr.charAt(enc4);
          chr1 = chr2 = chr3 = '';
          enc1 = enc2 = enc3 = enc4 = '';
        } while (i < input.length);

        return output;
      },

      decode: function (input) {
        var output = '';
        var chr1, chr2, chr3 = '';
        var enc1, enc2, enc3, enc4 = '';
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
          window.alert('There were invalid base64 characters in the input text.\n' +
            'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' +
            'Expect errors in decoding.');
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

        do {
          enc1 = this.keyStr.indexOf(input.charAt(i++));
          enc2 = this.keyStr.indexOf(input.charAt(i++));
          enc3 = this.keyStr.indexOf(input.charAt(i++));
          enc4 = this.keyStr.indexOf(input.charAt(i++));

          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;

          output = output + String.fromCharCode(chr1);

          if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
          }

          chr1 = chr2 = chr3 = '';
          enc1 = enc2 = enc3 = enc4 = '';

        } while (i < input.length);

        return output;
      }
    };
  });
