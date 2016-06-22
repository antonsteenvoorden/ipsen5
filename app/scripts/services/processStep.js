/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp')
  .service('processStepService', function ($rootScope, $window, $http) {
    console.log("Service log");
    var self = this;
    self.processSteps = [
      new ProcessStep(1, 1, "C", "Hout plaatsen",  2, 5, 3),
      new ProcessStep(2, 2, "H", "Hout slijpen",  2, 5, 3),
      new ProcessStep(3, 3, "H", "Hout verfen",  7, 0, 9),
      new ProcessStep(4, 5, "C", "Tafelpoot inpakken",  2, 5, 3)
    ];

      /**
       * Load the processteps and open te processteps tab.
       * @param process
       * @param onSuccess
       */
    self.open = function (process, onSuccess) {
      sessionStorage.setItem('opened', process.id);
      console.log(process.id);
      var uri = '/api/process/'+ process.id +'/steps';
      $http.get(uri)
        .success(function (result) {
          self.processSteps = result;
          onSuccess(result);
        })
        .error(function (message, status) {
          alert('Fetching processteps failed : ' + message, status);
        });
    };

    self.getOpened = function () {
      return self.opened;
    };

    self.fetchOpened = function () {
      self.opened = $window.localStorage.getItem('openedProcess');
      for (var property in $window.localStorage.getItem('openedProcess')) {
        console.log($window.localStorage.getItem('openedProcess').property);
      }
    };

    self.getProcessSteps = function () {
      console.log("get steps called", self.processSteps);
      return self.processSteps;
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
      console.log("adding step to process:",sessionStorage.getItem('opened'));
      var uri = '/api/process/' + sessionStorage.getItem('opened') + '/steps';
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
      alert('Verwijderen werkt nog niet');
    };

    self.editStep = function(processStep, callback) {
      var uri = '/api/process/' + sessionStorage.getItem('opened') + '/steps';
      $http.put(uri, processStep)
        .success(callback);
    };
  });
