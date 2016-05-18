/**
 * Created by Anton on 17-5-2016.
 */
angular.module('wfpcsFrontApp')
  .service('authenticationService', function ($rootScope, $window) {
    var self = this;

    //credential shit
    var accessId = null;
    var accessKey = null;
    var permissions = [];
    var authenticator = null;
    var authenticated = null;

    self.authenticate = function(user) {
      self.setAccessId(user.username);
      self.setAccessKey(user.password);

      self.requestAuthentication( function(authenticated){
        console.log(authenticated);
        if(authenticated) {
          self.setAuthenticator(user);
          //self.setPermissions(user.permissions);
          self.setPermissions(['ADMIN']);
          self.storeAuthentication(user);
        }
        self.authenticated = authenticated;
      });
      return self.authenticated;
    };

    self.requestAuthentication = function (onSuccess) {
      //var uri = '/api/klanten/' + authString.accessId;
      //$http.get(uri)
      //  .success(onSuccess(true))
      //  .error(function (message, status) {
      //    alert('Inloggen mislukt: ' + message);
      //  });
      onSuccess(true);
    };

// GETTERS & SETTERS
    self.getAccessId = function () {
      return accessId;
    };

    self.setAccessId = function (id) {
      accessId = id;
    };

    self.getAccessKey = function () {
      return accessKey;
    };

    self.setAccessKey = function (key) {
      accessKey = key;
    };

    self.getPermissions = function () {
      return permissions;
    };
    self.setPermissions = function (permissions) {
      if (authenticator !== undefined) {
        this.permissions = permissions;
        $rootScope.authenticator.permissions = permissions;
      }
    };
    self.setAuthenticator = function (user) {
        $rootScope.authenticator = user;
    };
    self.createAuthorizationString = function () {
      return 'Basic ' + Base64.encode(accessId + ':' + accessKey);
    };

    self.isAuthenticated = function () {
      return $rootScope.authenticator !== undefined;
    };

    self.createAuthentication = function (identifier, password) {
      self.setAccessId(identifier);
      self.setAccessKey(password);
    };

    self.storeAuthentication = function (user) {
      var authenticator = angular.toJson(user);
      var storage = (user.remember === true) ? $window.localStorage : $window.sessionStorage;
      storage.setItem('authenticator', authenticator);
    };

    var restoreAuthentication = function () {
      var authenticator = $window.sessionStorage.getItem('authenticator');

      if (authenticator === null) {
        authenticator = $window.localStorage.getItem('authenticator');
      } else {
        authenticator = JSON.parse(authenticator);

        self.setAccessId(authenticator.accessId);
        self.setAccessKey(authenticator.accessKey);
        //self.setPermissions(authenticator.permissions);
        self.setAuthenticator(authenticator);
      }
    };

    self.deleteAuthentication = function () {
      self.setAccessId(null);
      self.setAccessKey(null);
      self.setPermissions(null);
      self.setAuthenticator(undefined);

      $window.sessionStorage.removeItem('authenticator');
      $window.localStorage.removeItem('authenticator');
    };


    var Base64 = {
      keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

      encode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
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
          chr1 = chr2 = chr3 = "";
          enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);

        return output;
      },

      decode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
          window.alert("There were invalid base64 characters in the input text.\n" +
            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
            "Expect errors in decoding.");
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

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

          chr1 = chr2 = chr3 = "";
          enc1 = enc2 = enc3 = enc4 = "";

        } while (i < input.length);

        return output;
      }
    };
  });
