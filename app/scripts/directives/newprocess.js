/**
 * Created by Roy on 22-5-2016.
 * Directive for the new process pop-up
 * to register a new process, also used to edit a process probably.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("newprocess", function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/dashboard/newProcess.html',
    controller: 'ProcessCardCtrl',
    controllerAs: 'new',
    scope: { editableProcess: '=editableProcess'}
  };
});
