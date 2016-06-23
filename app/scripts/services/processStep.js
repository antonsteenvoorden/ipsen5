/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp')
  .service('processStepService', function ($rootScope, $window, $http) {
    console.log("Service log");
    var self = this;
    self.processSteps = [];
    self.toBeSteps = [];

      /**
       * Load the processteps and open te processteps tab.
       * @param process
       * @param onSuccess
       */
    self.open = function (process, onSuccess) {
      localStorage.setItem('opened', process.id);
      console.log(process.id);
      var uri = '/api/process/'+ process.id +'/steps';
      $http.get(uri)
        .success(function (result) {
          self.processSteps = result;
          for(var i = 0; i < self.processSteps.length; i++) {
            self.toBeSteps.push(self.processSteps[i].optimizationStep);
          }
          onSuccess(result);
        });
    };

    self.getOpened = function () {
      return self.opened;
    };

    self.fetchOpened = function () {
      self.opened = $window.localStorage.getItem('opened');
    };

    self.getProcessSteps = function () {
      return self.processSteps;
    };

    self.getToBeSteps = function () {
      return self.toBeSteps;
    };

    self.saveVendorRating = function (vendorRating) {
      vendorRating.vendor.rating = self.getVendorRatingData(vendorRating);
      console.log(self.replaceProcessStep(vendorRating));

    };

    self.findProcessStep = function (processStepToFind) {
      for (var i = 0; i < self.processSteps.length; i++) {
        if (self.processSteps[i].index = processStepToFind.index) {
          return self.processSteps[i];
        }
      }
    };

    self.replaceProcessStep = function (processStepToFind) {
      for (var i = 0; i < self.processSteps.length; i++) {
        if (self.processSteps[i].index = processStepToFind.index) {
          self.processSteps[i] = processStepToFind;
          return self.processSteps[i];
        }
      }
    };

    self.getVendorRatingData = function (processStep) {
      var tmpStep = self.findProcessStep(processStep).vendor;
      var calc = 1;
      calc = calc * tmpStep.capacity;
      calc = calc * tmpStep.cash;
      calc = calc * tmpStep.certified;
      calc = calc * tmpStep.clock;
      calc = calc * tmpStep.complaints;
      calc = calc * tmpStep.cost;
      calc = calc * tmpStep.csr;
      calc = calc * tmpStep.culture;
      calc = calc * tmpStep.quality;
      return calc;
    };

    self.getAllVendorRatingData = function () {
      var tmpList = [];
      for (var i = 0; i < self.processSteps.length; i++) {
        tmpList.add(self.processSteps[i].rating);
      }
      return tmpList;
    };

    /**
     * Append the processSteps list with new processStep.
     * Also make the call to the API to save it.
     */
    self.addProcessStep = function(processStep) {
      //the new processStep gets the number of the last element plus one.
      if(self.processSteps.length > 0)
        processStep.number = self.processSteps[self.processSteps.length -1].number + 1;
      else
        processStep.number = 1;
      self.processSteps.push(processStep);
      console.log("adding step to process:",localStorage.getItem('opened'));
      var uri = '/api/process/' + localStorage.getItem('opened') + '/steps';
      $http.post(uri, processStep)
        .success(function() {
          console.log('processstep call made');
        });
    };

    /**
     * Delete the processtep.
     * Also make the call to the API to remove it.
     */
    self.deleteStep = function(processStep) {
      var uri = '/api/process/'+ processStep.id +'/steps'
      $http.delete(uri, processStep);
      for(var i = 0; i < self.processSteps.length; i++) {
        if(self.processSteps[i].id == processStep.id) {
          self.processSteps.splice(i, 1);
          return;
        }
      }
    };

    self.editToBeStep = function(toBeStep, callback) {
      var uri = '/api/process/' + localStorage.getItem('opened') + '/tobe';
      var data = {
        optimizationStep : angular.toJson(toBeStep)
      };
      $http.put(uri, data)
        .success(callback);
    };

    self.editStep = function(processStep, callback) {
      var uri = '/api/process/' + localStorage.getItem('opened') + '/steps';
      $http.put(uri, processStep)
        .success(callback);
    };


      /**
       * Insert a empty processStep in the list,
       * update positions accordingly.
       * @param processStep
       */
    self.insertProcessStep = function(position) {
      for(var i = 0; i < self.processSteps.length; i++) {
        if(self.processSteps[i].number == position) {
          var tmp = new ProcessStep();
          tmp.setPosition(position);
          var uri = '/api/process/' + sessionStorage.getItem('opened') + '/steps';
          $http.post(uri, tmp).success(function(id) {
            tmp.id = id;
            self.processSteps.splice(i, 0, tmp);
          }).error(function(message, status) {
            console.log(message);
          });
          i++;
        }
        if(self.processSteps[i].number >= position - 1) {
          self.processSteps[i].number++;
        }
      }
      console.log("Service finished.");
    };

  });
