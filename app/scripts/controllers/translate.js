/**
 * Created by Anton on 2-4-2016.
 */
angular.module('wfpcsFrontApp').controller('TranslateCtrl', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});
