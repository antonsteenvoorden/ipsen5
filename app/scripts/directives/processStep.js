/**
 * Created by Anton on 2-4-2016.
 */

'use strict';
angular.module('wfpcsFrontApp').directive("processstep", function () {
  return {
    templateUrl: 'views/analyse/process-step.html',
    controller:'ProcessCtrl'
  };
});
