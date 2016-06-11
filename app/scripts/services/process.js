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
    var edit = false;

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
        alert('Process deleted.');
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
      $http.put(uri, process)
        .error(function(message, status) {
          console.log('Updating process failed: ' + status, message);
        });
    };

      /**
       * Add the new or altered process to the local list of processes.
       * @TODO: this should send the new or altered process to the API.
       * @param process
       */
    self.newProcess = function(process, callback) {
      processen.push(
        process
      );
      self.httpPost(process);
      callback();
    };

    self.updateProcess = function(process, callback) {
      processen.forEach(function(value, index) {
        if(value.id == process.id) {
          processen.splice(index, 1, process);
          self.httpPut(process);
        }
      });
      callback();
    };

    self.deleteProcess = function(id, callback) {
      processen.forEach(function(value, index) {
        if(value.id == id) {
          self.httpDelete(processen[index]);
          processen.splice(index, 1);//Remove one.
        }
      });
      callback();
    };

    self.getProcessen = function() {
      return processen;
    };

    self.setEditableProcess = function(process) {
      var tmpProcess = new Process();
      tmpProcess.id = process.id;
      tmpProcess.name = process.name;
      tmpProcess.date = process.date;
      tmpProcess.batchSize = process.batchSize;
      tmpProcess.hoursPerDay = process.hoursPerDay;
      tmpProcess.piecesPerDay = process.piecesPerDay;
      self.editableProcess = tmpProcess;
    };

    self.getEditableProcess = function() {
      return self.editableProcess;
    };

    self.clearEditableProcess = function() {
      self.editableProcess = null;
    };

    self.getEdit = function() {
      return edit;
    };

    self.setEdit = function() {
      edit = true;
    };

    self.setNew = function() {
      edit = false;
    };

});
