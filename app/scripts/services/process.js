// jshint ignore: start
/**
 * Created by Roy on 22-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp')
  .service('processService', function($rootScope, $http) {
    var self = this;
    var uri = '/api/process/';
    var processen;

      /**
       * Fecth the processes from the API.
       */
    self.loadProcesses = function(onSuccess) {
      console.log('loadprocesses called');
      $http.get(uri).success(function (result) {
        processen = result;
        onSuccess(result);
      }).error(function (message, status) {
        console.log("Processen ophalen mislukt: " + message, status);
      });
    };

      /**
       * Send the call to delete the process from the database.
       * @param process
       */
    self.httpDelete = function(process) {
      $http.delete(uri + process.id)
      .success(function() {
        alert('Motherfucker deleted.');
      }).error(function(message, status) {
        console.log('Deleting process failed: ' + status, message);
      });
    };

      /**
       * Send the call to create the process to the API.
       * @param process
       */
    self.httpPost = function(process) {
      console.log(JSON.stringify(process));
      $http.post(uri, process)
      .error(function(message, status) {
        console.log('Creating new process failed: ' + status, message);
      });
    };

      /**
       * Send the call to update the process to the API.
       * @param process
       */
    self.httpPut = function(process) {
      $http.post(uri, process)
        .error(function(message, status) {
          console.log('Updating process failed: ' + status, message);
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
          self.httpPut(process);
          added = true;
        }
      });
      if(!added) {  //If no process was updated ad it last.
        processen.push(
          process
        );
        self.httpPost(process);
      }
    };

    self.deleteProcess = function(id) {
      processen.forEach(function(value, index) {
        if(value.id == id) {
          self.httpDelete(processen[index]);
          alert(processen[index]);
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
