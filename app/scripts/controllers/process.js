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

  $scope.getEdit = function() {
    return processService.getEdit();
  };

  $scope.setEdit = function(boolean) {
    if(boolean)
      processService.setEdit();
    else
      processService.setNew();
  };

  //TODO: DIT WORDT IN IEDERE CONTROLLER OPGEHAALD, DAAROM HEB IK PROCESSCARD CONTROLLER GEMAAKT, KUNNEN DE REST VAN DEZE FUNCTIES WEG?
  processService.loadProcesses(function(result){
    $scope.processen = result;
  });


  /**
   * TODO: Vind deze oplossing toch niet zo chill Anton,
   * TODO: Twee methoden die maar een regel verschillen.
   */
  //Add a new process
  $scope.addProcess = function() {
    var process = self.prepareProcess();
    processService.newProcess(process, function(){
      ngDialog.close();
      $location.reload();
    });
  };

  $scope.updateProcess = function() {
    var process = self.prepareProcess();
    processService.updateProcess(process, function() {
      ngDialog.close();
      $location.reload();
    });

  };

  self.prepareProcess = function(){
    var process = new Process();
    process.id = $scope.newProcess.id;
    process.name = $scope.newProcess.name;
    process.date = $scope.newProcess.date;
    process.batchSize = $scope.newProcess.batchSize;
    process.hoursPerDay = $scope.newProcess.hoursPerDay;
    process.piecesPerDay = $scope.newProcess.piecesPerDay;
    process.version = $scope.newProcess.version;
    return process;
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


  $scope.getProcess = function() {
    $scope.newProcess = processService.getEditableProcess();
  };

  $scope.open = function(process) {
    processStepService.open(process, function(result){
      $state.go('process.current');
    });

  };

}]);
