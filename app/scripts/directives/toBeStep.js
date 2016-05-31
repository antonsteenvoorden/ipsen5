/**
 * Created by Anton on 29-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("tobestep", function () {
  return {
    templateUrl: 'views/analyse/tobestep.html',
    controller:'ProcessCtrl'
  };
});
