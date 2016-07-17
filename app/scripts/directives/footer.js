/**
 * Created by Anton on 11-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("footer", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/footer.html',
    controller: 'FooterCtrl'
  };
});
