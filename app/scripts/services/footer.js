/**
 * Created by Anton on 22/06/2016.
 * Used to obtain data calculated by the api used in the graphs
 */
angular.module('wfpcsFrontApp')
  .service('footerService', function ($http, $window, processStepService) {
    var self = this;

    self.getBottleneckData = function (callback) {
      var uri = 'api/data/bottleneck/' + localStorage.getItem('opened');
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
