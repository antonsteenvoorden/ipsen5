/**
 * Created by Anton on 14-6-2016.
 */
angular.module('wfpcsFrontApp')
  .controller('AdminCtrl', function ($scope, adminService) {


    adminService.getCustomers(function(result){
      $scope.customers = result;
    });



  });
