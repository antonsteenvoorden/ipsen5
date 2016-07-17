/**
 * Created by Anton on 23/06/2016.
 */
angular.module('wfpcsFrontApp').controller('ToBeStepCtrl', ['$scope', '$state', 'processService', 'processStepService',
  function($scope, $state, processService, processStepService) {
    $scope.$state = $state;
    $scope.locked = false;

    $scope.editStep = function(toBeStep){
      processStepService.editToBeStep(toBeStep, function(){
      });
    };
  }]);
