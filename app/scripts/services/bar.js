/**
 * Created by Sven on 8-6-2016.
 */
'use strict';
angular.module('wfpcsFrontApp')
  
  .service('cycleBarService', function ($http) {
    var self = this;
    var uri = 'api/account/'; /*<--- dient nog aangepast te worden*/
    var batchCycleBarData;
    
    self.getBarDataBatchCycleBottleneckBar = function(onSuccess) {
      console.log("dataopvraag(barcyclechart) aangeroepen")
      $http.get(uri).success(function (result) {
        batchCycleBarData = result;
        onSuccess(result);
      }).error(function (message, status) {
        console.log("Data ophalen mislukt " + message, status);
      });
    }
  });
