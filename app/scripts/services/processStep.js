/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp')
  .service('processStepService', function($rootScope, $localStorage) {

    var self = this;
    var opened;

    self.open = function(process) {
      self.opened = process;
    }

    self.getOpened = function() {
      return self.opened;
    }


});
