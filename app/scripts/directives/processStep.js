/**
 * Created by Anton on 2-4-2016.
 */

'use strict';
angular.module('wfpcsFrontApp').directive("processStep", function () {
  return {
    templateUrl: 'views/analyse/process-step.html',
    controller:'ProcessStepCtrl'
  };
});
