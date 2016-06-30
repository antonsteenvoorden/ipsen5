/**
 * Created by Anton on 2-4-2016.
 * Used to change language
 */
'use strict';
angular.module('wfpcsFrontApp').controller('MenuCtrl', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

});
