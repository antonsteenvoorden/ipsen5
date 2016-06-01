/**
 * Created by Anton on 31-5-2016.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("vendorRating", function () {
  return {
    templateUrl: 'views/analyse/vendor-rating.html',
    controller:'ProcessCtrl'
  };
});
