'use strict';

angular.module('shernow.controllers')
    .controller('WifiController', function($scope, $stateParams, Wifis) {
        Wifis.get($stateParams.wifiId).then(function(wifi) {
            $scope.wifi = wifi;
        });
    });