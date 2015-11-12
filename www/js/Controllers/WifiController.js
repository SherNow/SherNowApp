angular.module('shernow.controllers', [])
.controller('WifiController', function($scope, $stateParams, Wifis) {
    $scope.wifis = Wifis.getAll(); 
});