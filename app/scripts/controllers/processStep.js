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
    $scope.locked = false;

      /**
       * Insert a space for a new processstep.
       */
    $scope.insert = function(position) {
      console.log(position, 'is the number to insert');
      processStepService.insertProcessStep(position, function(){
        $scope.processSteps = processStepService.getProcessSteps();
      });
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

    $scope.deleteStep = function(processStep) {
      processStepService.deleteStep(processStep, function(){
        $scope.processSteps = processStepService.getProcessSteps();
      });
    };

    $scope.editStep = function(processStep){
      processStepService.editStep(processStep, function(){
      });
    };
}]);
