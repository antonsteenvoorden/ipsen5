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
        var permissions = authenticationService.getPermissions();
        return permissions.indexOf('ADMIN') > -1;
      });
  }]);
