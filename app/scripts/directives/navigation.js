/**
 * Created by Anton on 2-4-2016.
 */
angular.module('wfpcsFrontApp').directive("navigation", function ($timeout,$compile, authenticationService) {
  return {
    templateUrl: 'views/navigation.html',
    controller: 'NavigationCtrl'
    // ,
    // link: function(scope, element, attrs){
    //   scope.$watch(function () {
    //     return authenticationService.authenticated;
    //   }, function () {
    //
    //     if(authenticationService.authenticated){
    //       $timeout(function(){
    //         $compile(element.contents())(scope);
    //       }, 1000);
    //     }
    //   });
    // }
  };
});
