'use strict';

angular.module('shernow.controllers')
.controller('ParkingController', function($scope, $stateParams, Parkings) {
    $scope.elem = Parkings.get($stateParams.parkingId);
});