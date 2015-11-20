'use strict';

angular.module('shernow.controllers')
.controller('WifiController', function($scope, $stateParams, $ionicHistory, Wifis) {
    $ionicHistory.nextViewOptions({
            disableAnimate: false,
            disableBack: true
        });
    $scope.wifi = Wifis.get($stateParams.wifiId);
});