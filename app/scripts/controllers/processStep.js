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
    $scope.process;
    $scope.processSteps = processStepService.getProcessSteps();
    $scope.locked = false;

    $scope.openProcess = function() {
      processStepService.fetchOpened();
      console.log(processStepService.getOpened().name);
    };

    $scope.appendProcessStep = function(processStep) {
      var processStepO = new ProcessStep(
        processStep.id,
        processStep.number,
        processStep.type,
        processStep.name,
        processStep.bottleneck,
        processStep.duration,
        processStep.distance,
        processStep.cost );
      processStepService.addProcessStep(processStepO);
    };

    $scope.test = function() {
      alert("helllloooo");
    };

    $scope.loadProcessSteps = function() {
      $scope.processSteps = processStepService.getProcessSteps();
    };

    $scope.deleteStep = function(processStep) {
      processStepservice.deleteStep(processStep);
    };

}]);
