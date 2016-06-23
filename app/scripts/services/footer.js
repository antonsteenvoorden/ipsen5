/**
 * Created by Anton on 22/06/2016.
 */
angular.module('wfpcsFrontApp')
  .service('footerService', function ($http, $window, processStepService) {
    var self = this;

    self.getBottleneckData = function (callback) {
      var uri = 'api/data/bottleneck/' + sessionStorage.getItem('opened');
      console.log(uri);
      var data = angular.toJson(processStepService.getProcessSteps());
      $http.post(uri, data)
        .success(function (result) {
          callback(result);
        })
        .error(function (message, status) {
          alert('Ophalen graph data mislukt: ' + message, status);
        });
    };

    self.getThcData = function (callback) {
      var uri = 'api/data/thc';
      console.log(uri);
      var data = angular.toJson(processStepService.getProcessSteps());
      $http.post(uri, data)
        .success(function (result) {
          callback(result);
        })
        .error(function (message, status) {
          alert('Ophalen graph data mislukt: ' + message, status);
        });
    };



  });
