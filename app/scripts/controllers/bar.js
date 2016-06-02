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
  /*
  TODO:
  - filter op hoogste waarde links krijgen.
  - transport,hold,convert waardes van de database krijgen
  - mits in de call gedaan: alle waardes optellen.
   */

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
});
