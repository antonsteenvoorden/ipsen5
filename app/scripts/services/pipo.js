'use strict';

/**
 * @ngdoc service
 * @name wfpcsFrontApp.pipo
 * @description
 * # pipo
 * Service in the wfpcsFrontApp.
 */
angular.module('wfpcsFrontApp')
  .service('pipo', function () {
    this.test = function() {
      console.log('this is the timon directive');
    }
  });
