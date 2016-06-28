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
      var uri = '/api/process/' + process.id + '/steps';
      $http.get(uri)
        .success(function (result) {
          self.processSteps = result;
          self.setToBeSteps(self.processSteps);
          onSuccess(result);
        });
    };

    self.setToBeSteps = function (processSteps) {
      for (var i = 0; i < processSteps.length; i++) {
        self.toBeSteps[i] = (processSteps[i].optimizationStep);
      }
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
    self.addProcessStep = function (processStep) {
      //the new processStep gets the number of the last element plus one.
      if (self.processSteps.length > 0)
        processStep.number = self.processSteps[self.processSteps.length - 1].number + 1;
      else
        processStep.number = 1;

      console.log("adding step to process:", localStorage.getItem('opened'));
      var uri = '/api/process/' + localStorage.getItem('opened') + '/steps';
      $http.post(uri, processStep)
        .success(function (newId) {
          processStep.id = newId;
          console.log('processstep call made, id obtained',newId);
        });
      self.processSteps.push(processStep);
    };

    /**
     * Delete the processtep.
     * Also make the call to the API to remove it.
     */
    self.deleteStep = function (processStep, callback) {
      var uri = '/api/process/' +localStorage.getItem('opened')  + '/steps/' + processStep.id;
      $http.delete(uri, processStep);
      self.decreaseAllAfterNumber(processStep.number);
      callback();
    };

    self.decreaseAllAfterNumber = function(number) {
      console.log('going to decrease starting from: ', number);

      for(var i = number-1; i < self.processSteps.length; i++) {
        if(self.processSteps[i].number == number) {
         self.processSteps.splice(i,1);
        }
        if(self.processSteps[i].number > number) {
          self.processSteps[i].number--;
        }
      }
    };

    self.editToBeStep = function (toBeStep, callback) {
      var uri = '/api/process/' + localStorage.getItem('opened') + '/tobe';
      var data = angular.toJson(toBeStep);
      $http.put(uri, data)
        .success(callback);
    };

    self.editStep = function (processStep, callback) {
      var uri = '/api/process/' + localStorage.getItem('opened') + '/steps';
      $http.put(uri, processStep)
        .success(callback);
    };


    /**
     * Insert a empty processStep in the list,
     * update positions accordingly.
     * @param processStep
     */
    self.insertProcessStep = function (position, callback) {
      for (var i = 0; i < self.processSteps.length; i++) {
        console.log(self.processSteps[i]);

        if (self.processSteps[i].number > position) {
          self.processSteps[i].number +=1;
        }

        if (self.processSteps[i].number == position) {
          var tmp = new ProcessStep();
          tmp.setPosition(position);
          self.postProcessStep(tmp, callback);
          self.processSteps.splice(i, 0, tmp);
          self.processSteps[i+1].number++;
          i++;
        }
      }
    };

    self.postProcessStep = function (processStep, callback) {
      var uri = '/api/process/' + localStorage.getItem('opened') + '/steps';
      $http.post(uri, processStep)
        .success(function (id) {
          processStep.id = id;
          callback();
        }).error(function (message, status) {
        console.log(message);
      });
    }
  });
