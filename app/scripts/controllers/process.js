// jshint ignore: start
'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:AboutCtrl
 * @description
 * # ProcessCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp').controller('ProcessCtrl', ['$scope', '$state', '$location', 'ngDialog', 'processService', 'processStepService', function($scope, $state, $location, ngDialog, processService, processStepService) {
  $scope.$state = $state;
  $scope.processen = processService.getProcessen();

  $scope.addProcess = function() {
    var process = new Process();
    process.id = $scope.newProcess.id;
    process.name = $scope.newProcess.name;
    process.date = $scope.newProcess.date;
    process.batchSize = $scope.newProcess.batchSize;
    process.hoursDay = $scope.newProcess.hoursDay;
    process.piecesDay = $scope.newProcess.piecesDay;
    processService.newProcess(process);
    ngDialog.close();
  };

  $scope.openAddProcessView = function() {
    processService.clearEditableProcess();
    ngDialog.open({
      template: '<newprocess></newprocess>',
      plain: true
    });
  };

  $scope.cancel = function() {
    ngDialog.close();
  };

  /**
   * Delete process with given process id.
   * @param id
     */
  $scope.deleteProcess = function(id) {
    processService.deleteProcess(id);
  };

  $scope.editProcess = function(editableProcess) {
    processService.setEditableProcess(editableProcess);
    ngDialog.open({
      template: '<newprocess></newprocess>',
      plain: true,
    });
  };

  $scope.getProcess = function() {
    $scope.newProcess = processService.getEditableProcess();
  };

  $scope.open = function(process) {
    processStepService.open(process, function(result){
      $state.go('process.current');
    });

  };

  $scope.add = function() {
    $scope.stappen.push({value: $scope.stappen.length + 1});
  };

  $scope.insert = function(stap) {
    $scope.stappen.splice(stap + 1, 0, {value: stap + 1});
  };

  $scope.removeLast = function() {
    $scope.stappen.pop();
  };

  $scope.remove = function(stap) {
    $scope.stappen.splice(stap -1, 1);
  };

}]);
