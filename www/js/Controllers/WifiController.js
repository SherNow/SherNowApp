'use strict';

angular.module('shernow.controllers')
.controller('WifiController', function($scope, $stateParams, ModelFactory) {
    $scope.elem = ModelFactory.get("wifi", $stateParams.wifiId);
});