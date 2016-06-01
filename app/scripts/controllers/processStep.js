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
    $scope.lijstje = [1,2,3,4,5];

    $scope.openProcess = function() {
      processStepService.fetchOpened();
      console.log(processStepService.getOpened().name);
    };

    $scope.test = function() {
      alert("helllloooo");
    };

    $scope.loadProcessSteps = function() {
      $scope.processSteps = processStepService.getProcessSteps();
    };

}]);
