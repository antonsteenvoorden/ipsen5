/**
 * Created by Roy on 12-5-2016.
 */

angular.module('wfpcsFrontApp').directive("processCard", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/analyse/processCard.html',
    controller: 'ProcessCtrl'
  };
});
