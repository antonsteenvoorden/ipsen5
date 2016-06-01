/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp')
  .service('processStepService', function($rootScope, $window) {

    var self = this;
    var opened;
    var processSteps = [
      new ProcessStep(1, 1, "C", "Hout plaatsen", false, 2, 5, 3),
      new ProcessStep(2, 2, "H", "Hout slijpen", false, 2, 5, 3),
      new ProcessStep(3, 3, "H", "Hout verfen", true, 7, 0, 9),
      new ProcessStep(4, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(5, 4, "T", "Tafelpoot verzenden", false, 2, 5, 3)
    ];

    self.open = function(process, onSuccess) {
      $window.localStorage.setItem('openedProcess', process);
      // self.fetchOpened();
      var uri = '/api/process/'+ process.id+'/steps';
      $http.get(uri)
        .success(function(result){
          processSteps = result;
          console.log(result);
          onSuccess(processSteps);
        })
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message, status);
        });
    };

    self.getOpened = function() {
      return self.opened;
    };

    self.fetchOpened = function() {
      self.opened = $window.localStorage.getItem('openedProcess');
      for(var property in $window.localStorage.getItem('openedProcess')) {
        console.log($window.localStorage.getItem('openedProcess').property);
      }
    };

    self.getProcessSteps = function() {
      return self.processSteps;
    };
});
