// jshint ignore: start
/**
 * Created by Roy on 22-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp')
  .service('processService', function($rootScope, $http) {
    var self = this;

    var processen;

      /**
       * Fecth the processes from the API.
       */
    self.loadProcesses = function() {
      var uri = '/api/process/';
      $http.get(uri).success(function (result) {
        processen = result;
        console.log("De process service roept het onderstaande:");
        console.log(result[0]);
      }).error(function (message, status) {
        console.log("Processen ophalen mislukt: " + message, status);
      });
    };

      /**
       * Add the new or altered process to the local list of processes.
       * @TODO: this should send the new or altered process to the API.
       * @param process
       */
    self.newProcess = function(process) {
      var added = false;
      processen.forEach(function(value, index) {
        if(value.id == process.id) {
          processen.splice(index, 1, process);
          added = true;
        }
      });
      if(!added) {  //If no process was updated ad it last.
        processen.push(
          process
        );
      }
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

    self.setEditableProcess = function(process) {
      self.editableProcess = process.clone();
    };

    self.getEditableProcess = function() {
      return self.editableProcess;
    };

    self.clearEditableProcess = function() {
      self.editableProcess = null;
    };

});
