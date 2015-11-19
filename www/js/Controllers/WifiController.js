'use strict';

angular.module('shernow.controllers')
.controller('WifiController', function($scope, $stateParams, Wifis) {
    $scope.wifi = Wifis.get($stateParams.wifiId);
});