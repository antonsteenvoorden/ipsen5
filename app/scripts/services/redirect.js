/**
 * Created by Anton on 17-5-2016.
 */
angular.module('wfpcsFrontApp')
  .run(['$rootScope', '$state', 'userService', function ($rootScope, $state, userService) {
    $rootScope.$on('$locationChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (!toState.includes('register')) {//|| toState !== 'login') {
        if (!userService.isLoggedIn()) {
          console.log(toState);
          console.log('DENY : Redirecting to Login');
          event.preventDefault();
          $state.go('login');
        }
      } else {
        console.log('ALLOW');
      }
    });
  }]);
