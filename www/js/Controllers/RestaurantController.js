'use strict';

angular.module('shernow.controllers')
.controller('RestaurantController', function($scope, $stateParams, Restaurants) {
    $scope.elem = Restaurants.get($stateParams.restaurantId);
});