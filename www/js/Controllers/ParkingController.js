'use strict';

angular.module('shernow.controllers')
.controller('ParkingController', function($scope, $stateParams, ModelFactory) {
    $scope.elem = ModelFactory.get("parking", $stateParams.parkingId);
});