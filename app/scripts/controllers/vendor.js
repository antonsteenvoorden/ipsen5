/**
 * Created by Anton on 31-5-2016.
 */
angular.module('wfpcsFrontApp')
  .controller('VendorCtrl', function ($scope, processService) {
    var self = this;

    $scope.save = function(vendorRating){
      //processService.saveVendorRating(vendorRating);
      console.log("Vendor rating saved:",vendorRating);
    }
  });
