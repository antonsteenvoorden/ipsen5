/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp').controller('ProcessStepCtrl', ['$scope', '$state', 'processService', 'processStepService',
  function($scope, $state, processService, processStepService) {
    /*
    TODO: fetch the process that's opened.
    TODO: fetch the processteps for opened process.
    TODO: display the processteps.
    TODO: make the add and remove methods.
    TODO: make the edit processtep method.
     */
    $scope.$state = $state;

    $scope.processSteps = processStepService.getProcessSteps();
    $scope.locked = false;

    $scope.openProcess = function() {
      processStepService.fetchOpened();
      console.log(processStepService.getOpened().name);
    };

      /**
       * Insert a space for a new processstep.
       */
    $scope.insert = function(position) {
      processStepService.insertProcessStep(position);
      $scope.processSteps = processStepService.getProcessSteps();
    };

    $scope.appendProcessStep = function(processStep) {
      var processStepO = new ProcessStep(
        processStep.id,
        processStep.number,
        processStep.type,
        processStep.name,
        processStep.time,
        processStep.distance,
        processStep.cost,
        processStep.energy,
        processStep.headCount
      );
      processStepService.addProcessStep(processStepO);
    };

    $scope.test = function() {
      alert("helllloooo");
    };

    $scope.loadProcessSteps = function() {
      $scope.processSteps = processStepService.getProcessSteps();
    };

    $scope.deleteStep = function(processStep) {
      processStepService.deleteStep(processStep);
    };

    $scope.editStep = function(processStep){
      processStepService.editStep(processStep, function(){
        console.log(":;oo;");
      });
    };
}]);
