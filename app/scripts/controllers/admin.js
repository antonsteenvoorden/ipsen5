/**
 * Created by Anton on 14-6-2016.
 */
angular.module('wfpcsFrontApp')
  .controller('AdminCtrl', function ($scope, $mdToast, $translate, adminService, userService) {
    $scope.currentCustomer= {
      roles:[],
      permissions:[]
    };

    $scope.allRoles = ["GANGSTER", "OG"];
    $scope.allPermissions = ["CURRENTPROCESS", "Zwemmen met kevers"];

    adminService.getPermissions(function (result) {
      $scope.allRoles = result.roles;
      $scope.allPermissions = result.permissions;
      adminService.getCustomers(function (result) {
        $scope.customers = result;
        $scope.currentCustomer = $scope.customers[0] || undefined;
      });
    });


    $scope.openCustomer = function (customer) {
      $scope.currentCustomer = customer;
    };


    $scope.edit = function (customer) {
      userService.callEdit(customer, function () {
        $mdToast.show($mdToast.simple().textContent($translate.instant('CUSTOMEREDITSUCCESS')));
      }, function () {
        $mdToast.show($mdToast.simple().textContent($translate.instant('CUSTOMEREDITFAIL')));
      });
    };

    $scope.addRole = function (role) {
      if (!($scope.currentCustomer.roles.indexOf(role) >= 0)) {
        $scope.currentCustomer.roles.push(role);
      }
    };

    $scope.addPermission = function (permission) {
      if (!($scope.currentCustomer.permissions.indexOf(permission) >= 0)) {
        $scope.currentCustomer.permissions.push(permission);
      }
    };

  });
