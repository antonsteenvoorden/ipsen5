/**
 * Created by Anton on 23-3-2016.
 */

//TODO: authenticationservice
angular.module('wfpcs').controller('headerController', function($scope, $location)
{
    $scope.isLocation = function(location)
    {
        return $location.path() === location;
    };

    $scope.gotoHome = function()
    {
        $location.path('/');
    };
});