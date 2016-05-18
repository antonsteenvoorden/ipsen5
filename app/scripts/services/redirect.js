/**
 * Created by Anton on 17-5-2016.
 */
//angular.module('wfpcsFrontApp')
//  .run(['$rootScope', '$state', 'authenticationService', function ($rootScope, $state, authenticationService) {
//    $rootScope.$on('$locationChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
//      if (!toState.includes('register')) {//|| toState !== 'login') {
//        if (!authenticationService.isAuthenticated()) {
//          console.log(toState);
//          console.log('DENY : Redirecting to Login');
//          event.preventDefault();
//          $state.go('login');
//        }
//      } else {
//        console.log('ALLOW');
//      }
//    });
//  }]);
