/**
 * Created by ilpirata on 14/09/2014.
 */
app.controller('HeaderController', function ($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});