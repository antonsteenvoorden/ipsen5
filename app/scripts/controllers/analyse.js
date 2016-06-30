/**
 * Created by Roy and Anton on 26-5-2016.
 * Used for containing and obtaining the processteps from the service and api
 */
angular.module('wfpcsFrontApp').controller('AnalyseCtrl', ['$scope', '$state', 'processService', 'processStepService',
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
    $scope.toBeSteps = processStepService.getToBeSteps();
    console.log("Loggin tobe",$scope.toBeSteps);

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

    /**
     * Adds processtep to the end of the list
     * @param processStep
       */
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

    /**
     * gets processsteps from the service
     */
    $scope.loadProcessSteps = function() {
      $scope.processSteps = processStepService.getProcessSteps();
    };

    /**
     * Deletes processtep from the list
     * @param processStep
       */
    $scope.deleteStep = function(processStep) {
      processStepService.deleteStep(processStep);
    };

    /**
     * update processtep
     * @param processStep
       */
    $scope.editStep = function(processStep){
      processStepService.editStep(processStep, function(){
        console.log(":;oo;");
      });
    };
  }]);
