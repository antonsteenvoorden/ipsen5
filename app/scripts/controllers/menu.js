/**
 * Created by Anton on 2-4-2016.
 */
'use strict';
angular.module('wfpcsFrontApp').controller('MenuCtrl', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
  $scope.signOut = function(){
    console.log("SIGN OUT YO");
  };
});
