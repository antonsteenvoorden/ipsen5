/**
 * Created by Anton on 29-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("toBeStep", function () {
  return {
    templateUrl: 'views/analyse/tobestep.html',
    controller:'ToBeStepCtrl'
  };
});
