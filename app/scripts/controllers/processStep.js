/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp').controller('ProcessStepCtrl', ['$scope', '$state', 'processService', 
  function($scope, $state, processService) {
    
    $scope.test = function() {
      alert("Hello World");
    };
    
}]);
