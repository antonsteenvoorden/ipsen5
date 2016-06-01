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

    self.open = function(process) {
      $window.localStorage.setItem('openedProcess', process);
      self.fetchOpened();
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
