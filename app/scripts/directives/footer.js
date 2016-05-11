/**
 * Created by Anton on 11-5-2016.
 */
angular.module('wfpcsFrontApp').directive("footer", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/footer.html'
  };
});
