/**
 * Created by Anton on 23/06/2016.
 */
'use strict';
angular.module('wfpcsFrontApp').directive("searchbar", function () {
  return {
    template: '<div ><label>Search processlist</label><input ng-model=\"searchQuery\"></div>',
    controller:'ProcessCtrl'
  };
});

