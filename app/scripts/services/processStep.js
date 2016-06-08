/**
 * Created by Roy on 26-5-2016.
 */
angular.module('wfpcsFrontApp')
  .service('processStepService', function ($rootScope, $window, $http) {
    console.log("Service log");
    var self = this;
    var opened;
    self.processSteps = [
      new ProcessStep(1, 1, "C", "Hout plaatsen", false, 2, 5, 3),
      new ProcessStep(2, 2, "H", "Hout slijpen", false, 2, 5, 3),
      new ProcessStep(3, 3, "H", "Hout verfen", true, 7, 0, 9),
      new ProcessStep(4, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(4, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(5, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(6, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(7, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(8, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(9, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(10, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(11, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(12, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(13, 5, "C", "Tafelpoot inpakken", false, 2, 5, 3),
      new ProcessStep(14, 4, "T", "Tafelpoot verzenden", false, 2, 5, 3)
    ];

    self.open = function (process, onSuccess) {
      $window.localStorage.setItem('openedProcess', process);
      // self.fetchOpened();
      // var uri = '/api/process/'+ process.id+'/steps';
      var uri = '/api/process/1/steps';
      $http.get(uri)
        .success(function (result) {
          self.processSteps = result;
          console.log("processteps:", self.processSteps);
          onSuccess(result);
        })
        .error(function (message, status) {
          alert('Inloggen mislukt: ' + message, status);
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
  });
