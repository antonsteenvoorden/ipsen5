/**
 * Created by Roy on 12-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("processCard", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/dashboard/processCard.html'
  };
});
