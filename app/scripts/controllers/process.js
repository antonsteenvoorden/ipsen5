'use strict';

/**
 * @ngdoc function
 * @name wfpcsFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wfpcsFrontApp
 */
angular.module('wfpcsFrontApp').controller('ProcessCtrl', ['$scope', '$state', 'ngDialog', 'processService', function($scope, $state, ngDialog, processService) {
  $scope.$state = $state;
  $scope.processen = processService.getProcessen();

  $scope.addProcess = function() {
    var process = new Process();
    process.name = $scope.newProcess.name;
    process.date = $scope.newProcess.date;
    process.batchSize = $scope.newProcess.batchSize;
    process.hoursDay = $scope.newProcess.hoursDay;
    process.piecesDay = $scope.newProcess.piecesDay;
    processService.newProcess(process);
    ngDialog.close();
  };

  $scope.openAddProcessView = function() {
    ngDialog.open({
      template: '<newprocess></newprocess>',
      plain: true
    });
  };

  $scope.cancel = function() {
    ngDialog.close();
  };

  $scope.test = function() {
    return "test";
  };

  /**
   * Delete process with given process id.
   * @param id
     */
  $scope.deleteProcess = function(id) {
    processService.deleteProcess(id);
  };

  $scope.editProcess = function(newProcess) {
    ngDialog.open({
      template: '<newprocess></newprocess>',
      plain: true
    });
  };

  $scope.getProcess = function(id) {
    $scope.newProcess = processService.getProcess(2);
  }

  $scope.add = function() {
    $scope.stappen.push({value: $scope.stappen.length + 1});
  };

  $scope.insert = function(stap) {
    $scope.stappen.splice(stap + 1, 0, {value: stap + 1});
  }

  $scope.removeLast = function() {
    $scope.stappen.pop();
  };

  $scope.remove = function(stap) {
    $scope.stappen.splice(stap -1, 1);
  };

}]);
