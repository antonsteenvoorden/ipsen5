/**
 * Created by Anton on 14-6-2016.
 */
angular.module('wfpcsFrontApp')
  .controller('AdminCtrl', function ($scope, adminService) {


    adminService.getCustomers(function(result){
      $scope.customers = result;
      $scope.customers[0].roles=["TEST"];
      $scope.currentCustomer = $scope.customers[0] || undefined;
    });

    $scope.openCustomer = function(customer) {
      console.log('customer selected:', customer);
      $scope.currentCustomer = customer;
    };



  });
