/**
 * Created by Anton on 2-4-2016.
 */

'use strict';
angular.module('wfpcsFrontApp').directive("process", function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/analyse/processlist.html',
    controller: 'ProcessCtrl'
  };
});
