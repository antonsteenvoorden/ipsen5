/**
 * Created by Roy on 22-5-2016.
 */

angular.module('wfpcsFrontApp')
  .service('processService', function($rootScope) {
    var self = this;

    var processen = [
      new Process(1, "Alfa", "01/01/1999", 1, 1, 3),
      new Process(2, "Beta", "18/05/2016", 2,  7, 14),
      new Process(3, "Gamma", "18/05/2016", 3, 1337, 14),
      new Process(5, "Delta", "18/05/2016", 4, 7, 14),
      new Process(7, "Epsilon", "04/10/1992", 5, 14, 107),
      new Process(8, "Dzèta", "18/05/2016", 6, 7, 9000)
    ];

    self.newProcess = function(process) {
      processen.push(
       process
      );
    };

    self.deleteProcess = function(id) {
      processen.forEach(function(value, index) {
        if(value.id == id) {
          processen.splice(index, 1);//Remove one.
        }
      });
    };

    self.getProcessen = function() {
      return processen;
    };

    //TODO: This should be the actual process to update,
    //TODO: on new process no process should be loaded!
    self.getProcess = function() {
      return new Process(8, "Dzèta", "18/05/2016", 6, 7, 9000);
    }

});
