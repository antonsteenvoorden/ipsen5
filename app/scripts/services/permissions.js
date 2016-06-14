/**
 * Created by Anton on 18-5-2016.
 */
'use strict';
angular
  .module('wfpcsFrontApp')
  .run(['PermissionStore', 'RoleStore', 'authenticationService', function (PermissionStore, RoleStore, authenticationService) {
    PermissionStore
      .definePermission('isAuthenticated', function(){
        return authenticationService.isAuthenticated();
        // return true;
      });
    PermissionStore
      .definePermission('isAdmin', function () {
        authenticationService.restoreAuthentication();
        var permissions = authenticationService.getRoles();
        return permissions.indexOf('ADMIN') > -1;
      });
  }]);
