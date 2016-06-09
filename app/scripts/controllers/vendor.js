/**
 * Created by Anton on 31-5-2016.
 */
angular.module('wfpcsFrontApp')
  .controller('VendorCtrl', function ($scope, $translate, ngDialog, processStepService) {
    var self = this;
    $scope.locked = false;

    $scope.save = function(vendorRating){
      processStepService.saveVendorRating(vendorRating);
      console.log("Vendor rating saved:",vendorRating);
    }
  });
