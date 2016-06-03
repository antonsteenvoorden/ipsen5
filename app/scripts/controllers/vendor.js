/**
 * Created by Anton on 31-5-2016.
 */
angular.module('wfpcsFrontApp')
  .controller('VendorCtrl', function ($scope, $translate, ngDialog, processService) {
    var self = this;
    $scope.locked = false;

    $scope.save = function(vendorRating){
      //processService.saveVendorRating(vendorRating);
      console.log("Vendor rating saved:",vendorRating);
    }
  });
