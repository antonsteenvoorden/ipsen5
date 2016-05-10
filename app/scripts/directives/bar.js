/**
 * Created by Anton on 2-4-2016.
 */
angular.module('wfpcsFrontApp').directive("bar", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/barchart.html'
  };
});
