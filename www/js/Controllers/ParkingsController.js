'use strict';

angular.module('shernow.controllers')
    .controller('ParkingsController', function($scope, $stateParams, Parkings) {
        $scope.data = Parkings.getAll();
       	
});