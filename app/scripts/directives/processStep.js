/**
 * Created by Roy on 1-6-2016.
 */
angular.module('wfpcsFrontApp').directive('processStep', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/analyse/processStep.html'
  };
});
