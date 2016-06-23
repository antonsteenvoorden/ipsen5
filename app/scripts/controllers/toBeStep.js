/**
 * Created by Anton on 23/06/2016.
 */
/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp').controller('ToBeStepCtrl', ['$scope', '$state', 'processService', 'processStepService',
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

    $scope.editStep = function(toBeStep){
      processStepService.editToBeStep(toBeStep, function(){
      });
    };
  }]);
