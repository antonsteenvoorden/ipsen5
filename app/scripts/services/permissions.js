/**
 * Created by Anton on 18-5-2016.
 */
angular
  .module('wfpcsFrontApp')
  .run(['PermissionStore', 'RoleStore', 'authenticationService', function (PermissionStore, RoleStore, authenticationService) {
    PermissionStore
      .definePermission('isAuthorized', function () {
        return authenticationService.isAuthenticated();
      });
    PermissionStore
      .definePermission('isAdmin', function () {
        return authenticationService.getPermissions().includes('ADMIN');
      });
  }]);
