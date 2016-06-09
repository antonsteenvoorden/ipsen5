/**
 * Created by Anton on 2-4-2016.
 */
'use strict';

angular.module('wfpcsFrontApp')
  .controller('BarCtrl', function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  })

.controller('BatchCycleBar', function ($scope) {
  var self = this;

  

  var Transport = 10;
  var Hold = 20.5;
  var Convert = 10;
  var CycleSum = Transport + Hold + Convert;

  var TransportPercentage = (Transport/CycleSum)*100;
  var HoldPercentage = (Hold/CycleSum)*100;
  var ConvertPercentage = (Convert/CycleSum)*100;

  $scope.labels = ['Transport', 'Hold', 'Convert'];
  $scope.series = ['CurrentCycleTime'];
  $scope.colours = ['#0d00ff'];
  $scope.data = [
    [TransportPercentage, HoldPercentage, ConvertPercentage]
  ];


  $scope.getTransportTimeMinute = Transport;
  $scope.getHoldTimeMinute = Hold;
  $scope.getConvertTimeMinute = Convert;
  $scope.getTransportTimePercentage = TransportPercentage;
  $scope.getHoldTimePercentage = HoldPercentage;
  $scope.getConvertTimePercentage = ConvertPercentage;
  $scope.getTotalTime = CycleSum;
})

//TODO: krijg een array van vaiabele groote in de graphiek.
.controller('BatchCycleBottleneckBar', function ($scope) {
  var stepNumber = [
    '10','24','32'
  ];
  var stepValue = [
    5.4
  ];

  $scope.labels = [stepNumber];
  $scope.series = ['Current, Optimized'];
  $scope.colours = ['#ff00ff'];
  $scope.data = [
    [stepValue, 10,10]
  ];
})

.controller('VendorPrioritiesBar', function ($scope) {

  var prioritie5 = 0;
  var prioritie8 = 1;
  var prioritie12 = 0;
  var prioritie17 = 1;
  var prioritie26 = 0;
  var prioritie39 = 0;
  var prioritie58 = 0;
  var prioritie87 = 0;
  var prioritie131 = 0;
  var prioritie197 = 2;

  //TODO: vraag na welke input notatie er is, zorg dat deze in de graphiek komt.
  $scope.labels = ['5','8','12','17','26','39','58','87', '131', '197'];
  $scope.series = ['Vendor priorities'];
  $scope.colours = ['#ffff00'];
  $scope.data = [
    [ prioritie5, prioritie8, prioritie12, prioritie17, prioritie26,
      prioritie39, prioritie58, prioritie87, prioritie131, prioritie197]
  ];
})

.controller('DisturbanceBar', function ($scope) {

  var machine = 0;
  var material = 1;
  var methode = 0;
  var man = 1;
  var management = 0;
  var totalAmountDisturbances = 0;

  var machinePercentage = 0;
  var materialPercentage = 1;
  var methodePercentage = 0;
  var manPercentage = 1;
  var managementPercentage = 0;

  $scope.labels = ['Machine','Material','Methode','Man','Management'];
  $scope.series = ['Disturbances amount'];
  $scope.colours = ['#00ffff'];
  $scope.data = [
    [ machine, material, methode, man, management]
  ];

  $scope.getMachine = machine;
  $scope.getMaterial = material;
  $scope.getMethode = methode;
  $scope.getMan = man;
  $scope.getManagement = management;
  $scope.getTotalAmountDisturbances = totalAmountDisturbances;

  $scope.getMachinePercentage = machinePercentage;
  $scope.getMaterialPercentage = materialPercentage;
  $scope.getMethodePercentage = methodePercentage;
  $scope.getManPercentage = manPercentage;
  $scope.getManagementPercentage = managementPercentage;
})

.controller('DisturbancePrioritiesBar', function ($scope) {

  var prioritie512 = 1;
  var prioritie128 = 2;
  var prioritie32 = 1;

  $scope.labels = ['512','128','32'];
  $scope.series = ['Disturbance priorities'];
  $scope.colours = ['#ff00ff'];
  $scope.data = [
    [ prioritie512, prioritie128, prioritie32]
  ];
});
