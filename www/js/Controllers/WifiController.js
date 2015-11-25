'use strict';

angular.module('shernow.controllers')
.controller('WifiController', function($scope, $stateParams, Wifis) {
    $scope.elem = Wifis.get($stateParams.wifiId);
});